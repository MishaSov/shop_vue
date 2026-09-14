<script setup>
defineProps({
  variant: { type: String, default: 'primary' },
  size:    { type: String, default: 'md' },
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
  font-weight: 500;
  letter-spacing: -0.005em;
  cursor: pointer;
  border: 1px solid transparent;
  transition: transform .2s cubic-bezier(.22,1,.36,1),
              box-shadow .2s ease, background .2s ease,
              color .2s ease, border-color .2s ease;
  text-decoration: none;
  white-space: nowrap;
}
.btn--sm { padding: 10px 20px; font-size: 14px; }
.btn--md { padding: 14px 28px; font-size: 15px; }
.btn--lg { padding: 18px 34px; font-size: 16px; }

.btn--primary {
  background: var(--c-ink);
  color: #fff;
  box-shadow: 0 8px 24px rgba(43,38,34,.18);
}
.btn--primary:hover {
  transform: translateY(-2px);
  background: #1a1614;
  box-shadow: 0 14px 34px rgba(43,38,34,.28);
}

.btn--outline {
  background: rgba(255,255,255,.7);
  color: var(--c-ink);
  border-color: var(--c-line);
  backdrop-filter: blur(8px);
}
.btn--outline:hover {
  border-color: var(--c-accent);
  color: var(--c-accent);
  transform: translateY(-2px);
  box-shadow: var(--sh-md);
}

.btn--ghost {
  background: var(--c-bg-mute);
  color: var(--c-ink);
}
.btn--ghost:hover { background: var(--c-accent-soft); color: var(--c-accent); }
</style>