"use client";

import { useEffect, useRef, type RefObject } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PHOTO_SRC = "/Contemplative%20Silhouette%20in%20Smoky%20Backlight.png";

type PixelFieldProps = {
  triggerRef: RefObject<HTMLDivElement | null>;
};

type TextureLike = {
  dispose(): void;
  colorSpace: string;
  minFilter: number;
  magFilter: number;
  generateMipmaps: boolean;
};

type GeometryLike = {
  dispose(): void;
  setAttribute(name: string, attribute: unknown): void;
};

type Vector2Like = {
  set(x: number, y: number): unknown;
  lerp(target: Vector2Like, alpha: number): Vector2Like;
  copy(target: Vector2Like): Vector2Like;
};

type RendererLike = {
  setClearColor(color: number, alpha: number): void;
  setPixelRatio(value: number): void;
  outputColorSpace: string;
  setSize(width: number, height: number, updateStyle?: boolean): void;
  render(scene: unknown, camera: unknown): void;
  dispose(): void;
  forceContextLoss(): void;
};

type PointsLike = {
  geometry: GeometryLike;
  renderOrder: number;
};

type RenderObjectLike = { renderOrder: number };
type MaterialLike = { dispose(): void };

type FieldTextures = {
  photoTexture: TextureLike;
  maskTexture: TextureLike;
  width: number;
  height: number;
  geometry: GeometryLike;
};

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value));
}


function buildFieldTextures(
  photo: HTMLImageElement,
  host: HTMLElement,
  imageElement: HTMLImageElement,
): FieldTextures | null {
  const width = host.clientWidth;
  const height = host.clientHeight;
  if (!width || !height || !photo.naturalWidth || !photo.naturalHeight) return null;

  // Keep the simulation texture bounded so 4K displays do not create a huge
  // CPU-side pixel buffer. The points are normalized and still fill the canvas.
  const sampleWidth = Math.min(800, Math.max(280, Math.round(width * 0.72)));
  const scale = sampleWidth / width;
  const sampleHeight = Math.max(1, Math.round(height * scale));
  const imageStyle = window.getComputedStyle(imageElement);
  const imageTop = Number.parseFloat(imageStyle.top) || 0;
  const cropTop = Math.max(0, Math.round(-imageTop * scale));
  const tempHeight = sampleHeight + cropTop;

  const tempCanvas = document.createElement("canvas");
  tempCanvas.width = sampleWidth;
  tempCanvas.height = tempHeight;
  const tempContext = tempCanvas.getContext("2d", { willReadFrequently: true });
  if (!tempContext) return null;

  // Reproduce object-fit: cover / object-position: center 50%, including the
  // existing upward image offset, without changing the site's actual image.
  const fitScale = Math.max(sampleWidth / photo.naturalWidth, tempHeight / photo.naturalHeight);
  const drawWidth = photo.naturalWidth * fitScale;
  const drawHeight = photo.naturalHeight * fitScale;
  tempContext.drawImage(
    photo,
    (sampleWidth - drawWidth) / 2,
    (tempHeight - drawHeight) / 2,
    drawWidth,
    drawHeight,
  );

  const photoCanvas = document.createElement("canvas");
  photoCanvas.width = sampleWidth;
  photoCanvas.height = sampleHeight;
  const photoContext = photoCanvas.getContext("2d", { willReadFrequently: true });
  if (!photoContext) return null;
  photoContext.drawImage(tempCanvas, 0, cropTop, sampleWidth, sampleHeight, 0, 0, sampleWidth, sampleHeight);

  // A soft polygon bounds the effect to the head, neck, shoulders, and chest.
  // The dark-pixel test below intersects this shape with the actual silhouette.
  const shapeCanvas = document.createElement("canvas");
  shapeCanvas.width = sampleWidth;
  shapeCanvas.height = sampleHeight;
  const shapeContext = shapeCanvas.getContext("2d", { willReadFrequently: true });
  if (!shapeContext) return null;
  const p = (x: number, y: number) => [x * sampleWidth, y * sampleHeight] as const;
  const silhouette = [
    p(0.38, 0.12), p(0.42, 0.075), p(0.50, 0.065), p(0.56, 0.085),
    p(0.60, 0.14), p(0.62, 0.22), p(0.65, 0.29), p(0.645, 0.35),
    p(0.625, 0.405), p(0.595, 0.445), p(0.55, 0.475), p(0.535, 0.515),
    p(0.58, 0.555), p(0.65, 0.60), p(0.71, 0.67), p(0.76, 0.78),
    p(0.82, 1), p(0.18, 1), p(0.24, 0.80), p(0.29, 0.69),
    p(0.35, 0.62), p(0.41, 0.575), p(0.46, 0.54), p(0.455, 0.51),
    p(0.415, 0.475), p(0.38, 0.435), p(0.355, 0.385), p(0.34, 0.32),
    p(0.35, 0.235), p(0.36, 0.17),
  ];
  shapeContext.fillStyle = "#fff";
  shapeContext.beginPath();
  silhouette.forEach(([x, y], index) => {
    if (index === 0) shapeContext.moveTo(x, y);
    else shapeContext.lineTo(x, y);
  });
  shapeContext.closePath();
  shapeContext.fill();

  const photoPixels = photoContext.getImageData(0, 0, sampleWidth, sampleHeight).data;
  const shapePixels = shapeContext.getImageData(0, 0, sampleWidth, sampleHeight).data;
  const maskCanvas = document.createElement("canvas");
  maskCanvas.width = sampleWidth;
  maskCanvas.height = sampleHeight;
  const maskContext = maskCanvas.getContext("2d", { willReadFrequently: true });
  if (!maskContext) return null;
  const maskImage = maskContext.createImageData(sampleWidth, sampleHeight);

  const positions: number[] = [];
  const uvs: number[] = [];
  const colors: number[] = [];
  const sizes: number[] = [];
  const seeds: number[] = [];
  const depths: number[] = [];
  const kinds: number[] = [];
  const step = sampleWidth < 420 ? 5 : 4;

  const addPoint = (x: number, y: number, seed: number, kind: number, size: number) => {
    const nx = x / sampleWidth;
    const ny = y / sampleHeight;
    const headDepth = Math.max(0, 1 - ((nx - 0.49) / 0.19) ** 2 - ((ny - 0.29) / 0.25) ** 2);
    const chestDepth = Math.max(0, 1 - ((nx - 0.5) / 0.43) ** 2 - ((ny - 0.76) / 0.37) ** 2);
    const depth = Math.max(headDepth, chestDepth) * 0.9 + 0.1;
    positions.push(nx * 2 - 1, 1 - ny * 2, 0);
    uvs.push(nx, ny);
    const white = seed > 0.84;
    colors.push(white ? 0.78 : 0.58, white ? 1 : 1, white ? 0.82 : 0.28);
    sizes.push(size);
    seeds.push(seed);
    depths.push(depth);
    kinds.push(kind);
  };

  for (let y = 0; y < sampleHeight; y += 1) {
    for (let x = 0; x < sampleWidth; x += 1) {
      const index = (y * sampleWidth + x) * 4;
      const polygonAlpha = shapePixels[index + 3] / 255;
      if (polygonAlpha < 0.5) continue;

      const luminance = photoPixels[index] * 0.2126
        + photoPixels[index + 1] * 0.7152
        + photoPixels[index + 2] * 0.0722;
      // Keep the effect on the near-black silhouette, not the bright smoke.
      const darkness = clamp01((142 - luminance) / 72);
      const alpha = polygonAlpha * darkness;
      if (alpha < 0.22) continue;

      const depth = Math.max(
        0,
        1 - ((x / sampleWidth - 0.49) / 0.19) ** 2 - ((y / sampleHeight - 0.29) / 0.25) ** 2,
        1 - ((x / sampleWidth - 0.5) / 0.43) ** 2 - ((y / sampleHeight - 0.76) / 0.37) ** 2,
      );
      maskImage.data[index] = Math.round((0.18 + depth * 0.82) * 255);
      maskImage.data[index + 1] = 255;
      maskImage.data[index + 2] = 160;
      maskImage.data[index + 3] = Math.round(alpha * 255);

      if (x % step !== 0 || y % step !== 0) continue;
      const seed = ((x * 73856093) ^ (y * 19349663)) >>> 0;
      const random = (seed % 10000) / 10000;
      const jitterX = ((seed % 17) / 17) * step;
      const jitterY = (((seed >>> 5) % 17) / 17) * step;
      addPoint(
        Math.min(sampleWidth - 1, x + jitterX),
        Math.min(sampleHeight - 1, y + jitterY),
        random,
        random > 0.82 ? 1 : 0,
        random > 0.82 ? 1.6 + random * 2.1 : 2.2 + random * 3.1,
      );
      // A sparse second population gives the square scan a softer particle halo.
      if (random < 0.11) {
        addPoint(
          Math.min(sampleWidth - 1, x + step * 0.5),
          Math.min(sampleHeight - 1, y + step * 0.5),
          1 - random,
          1,
          1.1 + random * 2,
        );
      }
    }
  }

  maskContext.putImageData(maskImage, 0, 0);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("aUv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setAttribute("aColor", new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute("aSize", new THREE.Float32BufferAttribute(sizes, 1));
  geometry.setAttribute("aSeed", new THREE.Float32BufferAttribute(seeds, 1));
  geometry.setAttribute("aDepth", new THREE.Float32BufferAttribute(depths, 1));
  geometry.setAttribute("aKind", new THREE.Float32BufferAttribute(kinds, 1));

  const photoTexture = new THREE.CanvasTexture(photoCanvas);
  photoTexture.colorSpace = THREE.SRGBColorSpace;
  photoTexture.minFilter = THREE.LinearFilter;
  photoTexture.magFilter = THREE.LinearFilter;
  photoTexture.generateMipmaps = false;

  const maskTexture = new THREE.CanvasTexture(maskCanvas);
  maskTexture.minFilter = THREE.LinearFilter;
  maskTexture.magFilter = THREE.LinearFilter;
  maskTexture.generateMipmaps = false;

  return { photoTexture, maskTexture, width: sampleWidth, height: sampleHeight, geometry };
}

export function HeroPixelField({ triggerRef }: PixelFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const trigger = triggerRef.current;
    const imageElement = host?.querySelector("img");
    if (!canvas || !host || !trigger || !(imageElement instanceof HTMLImageElement)) return;

    let disposed = false;
    let frameId = 0;
    let resizeObserver: ResizeObserver | undefined;
    let scrollTrigger: ScrollTrigger | undefined;
    let renderer: RendererLike | undefined;
    let field: PointsLike | undefined;
    let plane: RenderObjectLike | undefined;
    let geometry: GeometryLike | undefined;
    let planeGeometry: GeometryLike | undefined;
    let pointsMaterial: MaterialLike | undefined;
    let planeMaterial: MaterialLike | undefined;
    let photoTexture: TextureLike | undefined;
    let maskTexture: TextureLike | undefined;
    let uniforms: {
      uTime: { value: number };
      uProgress: { value: number };
      uPointer: { value: Vector2Like };
      uResolution: { value: Vector2Like };
      uPixelRatio: { value: number };
      uPhoto: { value: TextureLike | null };
      uMask: { value: TextureLike | null };
    } | undefined;
    const targetPointer = new THREE.Vector2(0, 0);
    const currentPointer = new THREE.Vector2(0, 0);
    let previousWidth = 0;
    let previousHeight = 0;

    const onPointerMove = (event: PointerEvent) => {
      targetPointer.set(
        (event.clientX / Math.max(1, window.innerWidth) - 0.5) * 2,
        (event.clientY / Math.max(1, window.innerHeight) - 0.5) * 2,
      );
    };

    const init = async () => {
      const photo = new Image();
      photo.decoding = "async";
      photo.src = PHOTO_SRC;
      try {
        await photo.decode();
      } catch {
        return;
      }
      if (disposed) return;

      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: false,
          powerPreference: "low-power",
          premultipliedAlpha: true,
        });
      } catch {
        canvas.dataset.unavailable = "true";
        return;
      }
      const activeRenderer = renderer;
      if (!activeRenderer) return;
      activeRenderer.setClearColor(0x000000, 0);
      activeRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      activeRenderer.outputColorSpace = THREE.SRGBColorSpace;
      activeRenderer.setSize(host.clientWidth, host.clientHeight, false);

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
      camera.position.z = 1;

      uniforms = {
        uTime: { value: 0 },
        uProgress: { value: 0 },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 1.5) },
        uPhoto: { value: null },
        uMask: { value: null },
      };

      planeGeometry = new THREE.PlaneGeometry(2, 2);
      planeMaterial = new THREE.ShaderMaterial({
        uniforms,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform sampler2D uPhoto;
          uniform sampler2D uMask;
          uniform vec2 uPointer;
          uniform vec2 uResolution;
          uniform float uProgress;
          varying vec2 vUv;
          void main() {
            vec2 topUv = vec2(vUv.x, 1.0 - vUv.y);
            vec4 mask = texture2D(uMask, vUv);
            float alphaMask = mask.a;
            float depth = mask.r;
            float active = smoothstep(0.015, 0.20, uProgress)
              * (1.0 - smoothstep(0.86, 1.0, uProgress) * 0.72);
            float scanY = uProgress * 1.18 - 0.08;
            float scanBand = 1.0 - smoothstep(0.0, 0.045, abs(topUv.y - scanY));
            float scanReveal = 1.0 - smoothstep(scanY - 0.025, scanY + 0.035, topUv.y);
            vec2 displacement = vec2(uPointer.x, -uPointer.y) * depth * 0.006;
            displacement.y += uProgress * depth * 0.003;
            vec2 sampleUv = clamp(vUv + displacement, vec2(0.001), vec2(0.999));
            float cellSize = mix(1.0, 7.0, smoothstep(0.05, 0.6, uProgress));
            vec2 pixelUv = floor(sampleUv * uResolution / cellSize) * cellSize / uResolution;
            vec3 original = texture2D(uPhoto, sampleUv).rgb;
            vec3 pixelated = texture2D(uPhoto, clamp(pixelUv, vec2(0.001), vec2(0.999))).rgb;
            vec3 lime = vec3(0.57, 1.0, 0.28);
            vec3 scanned = mix(pixelated, lime, 0.34 + scanBand * 0.34);
            vec3 color = mix(original, scanned, 0.45 + scanBand * 0.45);
            float alpha = alphaMask * active * scanReveal * (0.12 + scanBand * 0.36);
            gl_FragColor = vec4(color, alpha);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }
        `,
      });
      const activePlane: RenderObjectLike = new THREE.Mesh(planeGeometry, planeMaterial);
      plane = activePlane;
      activePlane.renderOrder = 1;
      scene.add(activePlane);

      pointsMaterial = new THREE.ShaderMaterial({
        uniforms,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexShader: `
          uniform float uTime;
          uniform float uProgress;
          uniform vec2 uPointer;
          uniform float uPixelRatio;
          attribute vec2 aUv;
          attribute vec3 aColor;
          attribute float aSize;
          attribute float aSeed;
          attribute float aDepth;
          attribute float aKind;
          varying vec3 vColor;
          varying float vAlpha;
          varying float vKind;
          varying float vSeed;
          varying float vScan;
          varying vec2 vUv;
          void main() {
            vUv = aUv;
            float active = smoothstep(0.015, 0.18, uProgress)
              * (1.0 - smoothstep(0.84, 1.0, uProgress) * 0.68);
            float scanY = uProgress * 1.18 - 0.08;
            float scanBand = 1.0 - smoothstep(0.0, 0.09, abs(aUv.y - scanY));
            float scanReveal = 1.0 - smoothstep(scanY - 0.025, scanY + 0.06, aUv.y);
            vec3 shifted = position;
            shifted.x += uPointer.x * aDepth * 0.018;
            shifted.y -= uPointer.y * aDepth * 0.012;
            shifted.x += sin(uTime * 0.7 + aSeed * 18.0) * 0.0022 * aDepth;
            shifted.y += cos(uTime * 0.55 + aSeed * 21.0) * 0.0018 * aDepth;
            shifted.y -= uProgress * aDepth * 0.008;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(shifted, 1.0);
            gl_PointSize = aSize * uPixelRatio * (0.82 + scanBand * 1.45);
            vColor = aColor * (1.0 + scanBand * 0.8);
            vKind = aKind;
            vSeed = aSeed;
            vScan = scanBand;
            vAlpha = active * scanReveal * (0.22 + scanBand * 0.78)
              * (0.72 + 0.28 * sin(uTime * 1.5 + aSeed * 26.0));
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          varying float vAlpha;
          varying float vKind;
          varying float vSeed;
          varying float vScan;
          varying vec2 vUv;
          void main() {
            vec2 point = gl_PointCoord - vec2(0.5);
            if (vKind < 0.5) {
              if (max(abs(point.x), abs(point.y)) > 0.47) discard;
            } else {
              if (length(point) > 0.5) discard;
            }
            float halo = exp(-length(point) * 5.5) * 0.26;
            float alpha = clamp(vAlpha + halo * vScan, 0.0, 1.0);
            gl_FragColor = vec4(vColor, alpha);
          }
        `,
      });

      const rebuild = () => {
        if (disposed || !uniforms || !host.clientWidth || !host.clientHeight) return;
        const width = host.clientWidth;
        const height = host.clientHeight;
        if (width === previousWidth && height === previousHeight && geometry) return;
        previousWidth = width;
        previousHeight = height;

        const fieldTextures = buildFieldTextures(photo, host, imageElement);
        if (!fieldTextures) return;
        geometry?.dispose();
        photoTexture?.dispose();
        maskTexture?.dispose();
        geometry = fieldTextures.geometry;
        photoTexture = fieldTextures.photoTexture;
        maskTexture = fieldTextures.maskTexture;
        uniforms.uPhoto.value = photoTexture;
        uniforms.uMask.value = maskTexture;
        uniforms.uResolution.value.set(fieldTextures.width, fieldTextures.height);

        const currentField = field;
        if (currentField) {
          currentField.geometry = fieldTextures.geometry;
        } else {
          const nextField: PointsLike = new THREE.Points(fieldTextures.geometry, pointsMaterial!);
          nextField.renderOrder = 2;
          field = nextField;
          scene.add(nextField);
        }
        activeRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio || 1, 1.5);
        activeRenderer.setSize(width, height, false);
      };

      rebuild();
      resizeObserver = new ResizeObserver(() => {
        previousWidth = 0;
        previousHeight = 0;
        rebuild();
      });
      resizeObserver.observe(host);
      window.addEventListener("pointermove", onPointerMove, { passive: true });

      gsap.registerPlugin(ScrollTrigger);
      scrollTrigger = ScrollTrigger.create({
        trigger,
        start: "top top",
        end: "bottom top",
        scrub: 0.35,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (uniforms) uniforms.uProgress.value = self.progress;
        },
      });
      if (uniforms) uniforms.uProgress.value = scrollTrigger.progress;

      const startedAt = performance.now();
      const render = (now: number) => {
        if (disposed) return;
        frameId = window.requestAnimationFrame(render);
        if (document.visibilityState === "hidden") return;
        if (uniforms) {
          uniforms.uTime.value = (now - startedAt) / 1000;
          currentPointer.lerp(targetPointer, 0.045);
          uniforms.uPointer.value.copy(currentPointer);
        }
        activeRenderer.render(scene, camera);
      };
      frameId = window.requestAnimationFrame(render);
    };

    void init();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", onPointerMove);
      resizeObserver?.disconnect();
      scrollTrigger?.kill();
      geometry?.dispose();
      planeGeometry?.dispose();
      pointsMaterial?.dispose();
      planeMaterial?.dispose();
      photoTexture?.dispose();
      maskTexture?.dispose();
      renderer?.dispose();
      renderer?.forceContextLoss();
    };
  }, [triggerRef]);

  return <canvas ref={canvasRef} className="hero-pixel-field" aria-hidden="true" />;
}
