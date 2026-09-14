<script setup>
defineProps({
  variant: { type: String, default: 'primary' }, // primary | outline | ghost
  size:    { type: String, default: 'md' },      // sm | md | lg
  tag:     { type: String, default: 'button' },
  href:    { type: String, default: null },
})
</script>

<template>
  <component
    :is="href ? 'a' : tag"
    :href="href"
    :target="href ? '_blank' : null"
    :rel="href ? 'noopener' : null"
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`]"
  >
    <slot />
  </component>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: -0.01em;
  cursor: pointer;
  border: 1px solid transparent;
  transition: transform .18s ease, box-shadow .18s ease,
              background .18s ease, color .18s ease, border-color .18s ease;
  text-decoration: none;
  white-space: nowrap;
}
.btn--sm { padding: 10px 18px; font-size: 14px; }
.btn--md { padding: 14px 26px; font-size: 15px; }
.btn--lg { padding: 18px 34px; font-size: 17px; }

.btn--primary {
  background: var(--g-accent);
  color: #fff;
  box-shadow: var(--sh-accent);
}
.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 40px rgba(43,127,255,.45);
}

.btn--outline {
  background: #fff;
  color: var(--c-ink);
  border-color: var(--c-line);
  box-shadow: var(--sh-sm);
}
.btn--outline:hover {
  border-color: var(--c-accent);
  color: var(--c-accent);
  transform: translateY(-2px);
}

.btn--ghost {
  background: var(--c-bg-mute);
  color: var(--c-ink);
}
.btn--ghost:hover { background: var(--c-accent-soft); color: var(--c-accent); }
</style>