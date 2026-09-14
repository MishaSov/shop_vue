<script setup>
defineProps({
  id:      { type: String, default: null },
  tone:    { type: String, default: 'default' }, // default | soft | mute
  narrow:  { type: Boolean, default: false },
})
</script>

<template>
  <section
    :id="id"
    class="section"
    :class="[`section--${tone}`, { 'section--narrow': narrow }]"
  >
    <div class="container">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.section { padding: var(--s-py) 0; position: relative; }
.section--default { background: var(--c-bg); }
.section--soft    { background: var(--c-bg-soft); }
.section--mute    { background: var(--c-bg-mute); }
.section--narrow  { padding: calc(var(--s-py) * .6) 0; }

.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
}
</style>