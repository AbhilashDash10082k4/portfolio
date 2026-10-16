/**
 * Homepage hero copy, portrait, and primary calls to action.
 * On small screens, the message and name appear before the portrait.
 */
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export function Intro() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.72fr)] md:gap-16">
      <div className="order-1 max-w-3xl text-center md:text-left">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-xs font-bold tracking-wide text-muted shadow-sm">
          <span aria-hidden="true" className="size-2 rounded-full bg-accent-strong shadow-[0_0_12px_rgba(43,122,109,0.35)]" />
          Independent engineer · Full-stack, AI & automation
        </p>
        <p className="hero-name mx-auto mb-3 md:mx-0">
          Hi, I’m <span className="hero-name-script">Abhilash Dash</span>
        </p>
        <h1 className="page-title mx-auto md:mx-0">
          Strategic business solutions
          <span className="mt-2 block text-accent-strong">& digital engineering.</span>
        </h1>
        <p className="page-copy mx-auto mt-7 max-w-2xl md:mx-0">
          I build full-stack products, AI agents, and workflow automations that help turn complicated ideas into useful systems and reduce repetitive work.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
          <Link href="/contact" className="primary-button text-base sm:px-7 sm:text-lg">
            Let’s discuss your project <ArrowUpRight aria-hidden="true" className="size-5" />
          </Link>
          <Link href="/projects" className="secondary-button">
            Explore selected work <ArrowDownRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-muted md:justify-start">
          <span>Full-stack engineering</span><span aria-hidden="true" className="size-1 rounded-full bg-accent-strong/60" />
          <span>AI agents</span><span aria-hidden="true" className="size-1 rounded-full bg-accent-strong/60" />
          <span>Business automation</span>
        </div>
      </div>
      <div className="order-2 mx-auto w-full max-w-[330px] md:max-w-[390px]">
        <div className="relative rounded-[2rem] border border-border bg-surface/70 p-2 shadow-[0_30px_100px_var(--shadow)]">
          <div className="absolute -inset-3 -z-10 rounded-[2.5rem] border border-accent-strong/15" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-surface-muted">
            <Image
              src="/dp.webp"
              alt="Portrait of Abhilash Dash"
              width={640}
              height={800}
              priority
              sizes="(max-width: 767px) 280px, 390px"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-6 pt-20 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">Independent builder</p>
              <p className="mt-2 text-xl font-semibold tracking-tight">From idea to working system.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
