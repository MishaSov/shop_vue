<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import { useTelegram } from '@/composables/useTelegram'

const { openChannel } = useTelegram()
</script>

<template>
  <section class="hero">
    <div class="hero__inner">
      <h1>Оригинальные бренды из США<br>по честным ценам</h1>
      <p>Байер-сервис с полным сопровождением: от выбора до доставки.
        Экономия до 90% по сравнению с магазинами в РФ.</p>
      <BaseButton @click="openChannel">Перейти в Telegram-канал →</BaseButton>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 80vh;
  display: grid;
  place-items: center;
  text-align: center;
  background: linear-gradient(135deg, #f0f7ff 0%, #fff 100%);
  padding: 60px 20px;
}
.hero__inner { max-width: 780px; }
.hero h1 { font-size: clamp(28px, 5vw, 52px); line-height: 1.15; margin: 0 0 20px; }
.hero p { font-size: 18px; color: #555; margin: 0 0 32px; }
</style>