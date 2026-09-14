<script setup>
defineProps({
  eyebrow:  { type: String, default: '' },
  title:    { type: String, required: true },
  subtitle: { type: String, default: '' },
  align:    { type: String, default: 'center' },
})
</script>

<template>
  <header class="st" :class="`st--${align}`">
    <span v-if="eyebrow" class="st__eyebrow">{{ eyebrow }}</span>
    <h2 class="st__title">{{ title }}</h2>
    <p v-if="subtitle" class="st__sub">{{ subtitle }}</p>
  </header>
</template>

<style scoped>
.st { margin-bottom: 60px; }
.st--center { text-align: center; max-width: 720px; margin-left: auto; margin-right: auto; }
.st--left   { text-align: left; max-width: 560px; }

.st__eyebrow {
  display: inline-block;
  padding: 6px 14px;
  margin-bottom: 20px;
  border-radius: 999px;
  background: var(--c-accent-soft);
  color: var(--c-accent);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.st__title { margin-bottom: 16px; }

.st__sub {
  color: var(--c-ink-3);
  font-size: clamp(15px, 1.3vw, 17px);
  line-height: 1.7;
}
</style>