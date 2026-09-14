<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  align: { type: String, default: 'center' },
})
</script>

<template>
  <header class="title" :class="`title--${align}`">
    <h2>{{ title }}</h2>
    <p v-if="subtitle">{{ subtitle }}</p>
  </header>
</template>

<style scoped>
.title { margin-bottom: 48px; }
.title--center { text-align: center; }
.title h2 { font-size: clamp(24px, 4vw, 36px); margin: 0 0 12px; }
.title p { color: #666; font-size: 17px; margin: 0; }
</style>