<script setup>
defineProps({
  variant: { type: String, default: 'primary' }, // primary | outline | ghost
  tag: { type: String, default: 'button' },
  href: { type: String, default: null },
})
</script>

<template>
  <component
    :is="href ? 'a' : tag"
    :href="href"
    :target="href ? '_blank' : null"
    :rel="href ? 'noopener' : null"
    class="btn"
    :class="`btn--${variant}`"
  >
    <slot />
  </component>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  border: none;
  transition: transform .15s, box-shadow .15s, background .15s;
  text-decoration: none;
}
.btn:hover { transform: translateY(-2px); }
.btn--primary { background: #229ED9; color: #fff; }
.btn--primary:hover { box-shadow: 0 8px 24px rgba(34,158,217,.35); }
.btn--outline { background: transparent; color: #229ED9; border: 2px solid #229ED9; }
.btn--ghost { background: rgba(0,0,0,.05); color: #111; }
</style>