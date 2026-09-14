<script setup>
defineProps({
  id: { type: String, default: null },
  narrow: { type: Boolean, default: false },
})
</script>

<template>
  <section :id="id" class="section" :class="{ 'section--narrow': narrow }">
    <div class="container">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.section { padding: 80px 0; }
.section--narrow { padding: 48px 0; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
</style>