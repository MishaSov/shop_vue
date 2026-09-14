<script setup>
defineProps({
  variant: { type: String, default: 'default' }, // default | warm | sage
})
</script>

<template>
  <div class="bg-decor">
    <!-- Цветные пятна: насыщеннее, чем фон -->
    <span
      class="bg-blob bg-blob--1"
      :style="{
        width: '620px', height: '620px',
        top: '-220px', left: '-180px',
        background: variant === 'sage'
          ? 'radial-gradient(circle, #b8cfae 0%, transparent 70%)'
          : 'radial-gradient(circle, #e8bfa3 0%, transparent 70%)',
        opacity: '.75',
      }"
    />
    <span
      class="bg-blob bg-blob--2"
      :style="{
        width: '560px', height: '560px',
        bottom: '-240px', right: '-140px',
        background: variant === 'sage'
          ? 'radial-gradient(circle, #e8c9a8 0%, transparent 70%)'
          : 'radial-gradient(circle, #bfd4b3 0%, transparent 70%)',
        opacity: '.7',
      }"
    />
    <span
      class="bg-blob bg-blob--3"
      :style="{
        width: '440px', height: '440px',
        top: '30%', left: '35%',
        background: 'radial-gradient(circle, #eab8ac 0%, transparent 70%)',
        opacity: '.55',
      }"
    />

    <!-- Плавающие точки -->
    <span class="bg-dot" style="top: 18%; left: 12%; animation-delay: 0s;" />
    <span class="bg-dot" style="top: 62%; left: 78%; animation-delay: -3s;" />
    <span class="bg-dot" style="top: 34%; left: 88%; animation-delay: -6s;" />
    <span class="bg-dot" style="top: 76%; left: 22%; animation-delay: -9s;" />
    <span class="bg-dot" style="top: 12%; left: 62%; animation-delay: -2s;" />
    <span class="bg-dot" style="top: 48%; left: 48%; animation-delay: -5s;" />

    <!-- Сетка из точек -->
    <div class="bg-grid" />
  </div>
</template>