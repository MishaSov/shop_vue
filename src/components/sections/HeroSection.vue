<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import { useTelegram } from '@/composables/useTelegram'

const { openChannel } = useTelegram()

const stats = [
  { value: '500+',  label: 'брендов' },
  { value: '−90%',  label: 'экономия' },
  { value: '4–6',   label: 'недель доставка' },
]
</script>

<template>
  <section class="hero">
    <div class="hero__glow hero__glow--a" aria-hidden="true"></div>
    <div class="hero__glow hero__glow--b" aria-hidden="true"></div>

    <div class="hero__inner">
      <span class="hero__badge">
        <span class="hero__dot"></span>
        Байер-сервис с 2021 года
      </span>

      <h1 class="hero__title">
        Оригинальные бренды<br>
        из США — <span class="grad">по честным ценам</span>
      </h1>

      <p class="hero__lead">
        Подбираем, оформляем и доставляем покупки из любимых магазинов.
        Экономия до 90% по сравнению с ценами в России.
      </p>

      <div class="hero__actions">
        <BaseButton size="lg" @click="openChannel">
          Перейти в Telegram-канал
        </BaseButton>
        <BaseButton size="lg" variant="outline" href="#how">
          Как это работает
        </BaseButton>
      </div>

      <ul class="hero__stats">
        <li v-for="s in stats" :key="s.label">
          <strong>{{ s.value }}</strong>
          <span>{{ s.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background: var(--g-hero);
  padding: clamp(72px, 11vw, 160px) 0 clamp(64px, 8vw, 120px);
}

.hero__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: .55;
  pointer-events: none;
}
.hero__glow--a {
  width: 520px; height: 520px;
  background: #b6d4ff;
  top: -140px; left: -120px;
}
.hero__glow--b {
  width: 460px; height: 460px;
  background: #d8ceff;
  bottom: -160px; right: -100px;
}

.hero__inner {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(255,255,255,.75);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,.9);
  box-shadow: var(--sh-sm);
  color: var(--c-ink-2);
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 28px;
}
.hero__dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 4px rgba(34,197,94,.18);
}

.hero__title { margin-bottom: 22px; }

.grad {
  background: var(--g-accent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__lead {
  max-width: 640px;
  margin: 0 auto 40px;
  font-size: clamp(16px, 1.4vw, 19px);
  color: var(--c-ink-3);
  line-height: 1.6;
}

.hero__actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 64px;
}

.hero__stats {
  display: flex;
  justify-content: center;
  gap: clamp(24px, 5vw, 72px);
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
}
.hero__stats li {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}
.hero__stats strong {
  font-size: clamp(22px, 2.4vw, 30px);
  font-weight: 800;
  letter-spacing: -0.02em;
  background: var(--g-accent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hero__stats span {
  font-size: 13px;
  color: var(--c-ink-3);
  text-transform: uppercase;
  letter-spacing: .08em;
}
</style>