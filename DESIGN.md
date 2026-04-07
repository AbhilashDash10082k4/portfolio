# DESIGN.md

## 🚀 Purpose

These are the **strict rules that must ALWAYS be followed** while designing, building, or modifying UI components.

This applies to:

- All existing components
- All newly generated components
- Any refactoring tasks

The goal is:

- High performance (60fps UI)
- Minimal re-renders
- Clean architecture
- Production-grade UX

---

# ⚠️ GLOBAL RULE

Any component that violates these rules MUST be refactored.

The LLM should:

1. Detect violations
2. Fix them automatically
3. Avoid introducing regressions
4. Preserve visual output while improving performance

---

# 🎯 ANIMATION RULES (CRITICAL)

## 1. Use `transform` Instead of Layout Animations

Layout-changing properties trigger reflows and must be avoided.

❌ DO NOT animate:

- width
- height
- top
- left
- margin

✅ ALWAYS animate:

- transform
- opacity

Example:

```tsx
<motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} />
```
