<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useTelegram } from '@/composables/useTelegram'

const { openChannel } = useTelegram()

const stats = [
  { value: '500+',  label: 'брендов' },
  { value: '−90%',  label: 'экономия' },
  { value: '4–6',   label: 'недель' },
]

// Параллакс от курсора
const mouse = ref({ x: 0, y: 0 })
const onMove = (e) => {
  const w = window.innerWidth
  const h = window.innerHeight
  mouse.value = {
    x: (e.clientX / w - 0.5) * 20,
    y: (e.clientY / h - 0.5) * 20,
  }
}
onMounted(() => window.addEventListener('mousemove', onMove))
onUnmounted(() => window.removeEventListener('mousemove', onMove))
</script>

<template>
  <section class="hero">
    <!-- Декоративные пятна -->
    <div class="hero__blob hero__blob--1" aria-hidden="true"></div>
    <div class="hero__blob hero__blob--2" aria-hidden="true"></div>
    <div class="hero__blob hero__blob--3" aria-hidden="true"></div>

    <div class="hero__inner">
      <!-- Левая колонка -->
      <div class="hero__copy">
        <span class="hero__badge">
          <span class="hero__dot"></span>
          Байер-сервис с 2021 года
        </span>

        <h1 class="hero__title">
          Оригинальные бренды
          <em>из США</em>
          — по честным ценам
        </h1>

        <p class="hero__lead">
          Подбираем, оформляем и доставляем покупки из любимых магазинов.
          Экономия до 90% по сравнению с ценами в России.
        </p>

        <div class="hero__actions">
          <BaseButton size="lg" @click="openChannel">
            Перейти в Telegram
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

      <!-- Правая колонка — фотоколлаж -->
      <div
        class="hero__gallery"
        :style="{ transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0)` }"
      >
        <div class="hero__photo hero__photo--main">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80&auto=format&fit=crop"
            alt="Модный образ"
            loading="eager"
          />
        </div>
        <div class="hero__photo hero__photo--sm hero__photo--a">
          <img
            src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80&auto=format&fit=crop"
            alt="Сумка"
            loading="lazy"
          />
        </div>
        <div class="hero__photo hero__photo--sm hero__photo--b">
          <img
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=80&auto=format&fit=crop"
            alt="Обувь"
            loading="lazy"
          />
        </div>

        <div class="hero__float hero__float--price">
          <span>Экономия</span>
          <strong>до −90%</strong>
        </div>
        <div class="hero__float hero__float--ship">
          <span class="dot"></span>
          Доставка 4–6 недель
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background: var(--g-warm);
  padding: clamp(56px, 8vw, 110px) 0 clamp(72px, 9vw, 130px);
}

.hero__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(110px);
  opacity: .55;
  pointer-events: none;
}
.hero__blob--1 {
  width: 560px; height: 560px;
  background: #f1d9c7;
  top: -180px; left: -140px;
}
.hero__blob--2 {
  width: 520px; height: 520px;
  background: #e0e7d8;
  bottom: -200px; right: -120px;
}
.hero__blob--3 {
  width: 380px; height: 380px;
  background: #f5dfda;
  top: 40%; left: 40%;
  opacity: .35;
}

.hero__inner {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: clamp(32px, 5vw, 80px);
  align-items: center;
}

/* -------- Копия -------- */
.hero__copy { max-width: 580px; }

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(255,255,255,.7);
  backdrop-filter: blur(10px);
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
  background: #7fa563;
  box-shadow: 0 0 0 4px rgba(127,165,99,.2);
}

.hero__title {
  margin-bottom: 24px;
  font-weight: 500;
}
.hero__title em {
  font-style: italic;
  background: var(--g-accent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  padding-right: .05em;
}

.hero__lead {
  max-width: 480px;
  margin-bottom: 40px;
  font-size: clamp(16px, 1.3vw, 18px);
  color: var(--c-ink-2);
  line-height: 1.65;
}

.hero__actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 56px;
}

.hero__stats {
  display: flex;
  gap: clamp(24px, 4vw, 56px);
  list-style: none;
  padding: 0;
  margin: 0;
}
.hero__stats li {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.hero__stats strong {
  font-family: var(--f-serif);
  font-size: clamp(22px, 2.2vw, 30px);
  font-weight: 500;
  color: var(--c-ink);
  letter-spacing: -0.02em;
}
.hero__stats span {
  font-size: 12px;
  color: var(--c-ink-3);
  text-transform: uppercase;
  letter-spacing: .1em;
}

/* -------- Галерея -------- */
.hero__gallery {
  position: relative;
  aspect-ratio: 1 / 1;
  transition: transform .35s cubic-bezier(.22,1,.36,1);
}

.hero__photo {
  position: absolute;
  overflow: hidden;
  border-radius: var(--r-xl);
  box-shadow: var(--sh-xl);
  background: #fff;
}
.hero__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s cubic-bezier(.22,1,.36,1);
}
.hero__photo:hover img { transform: scale(1.06); }

.hero__photo--main {
  inset: 6% 12% 18% 6%;
  border-radius: var(--r-xl);
}
.hero__photo--sm {
  width: 40%;
  aspect-ratio: 1 / 1;
  border-radius: var(--r-lg);
}
.hero__photo--a {
  top: 0; right: 0;
  transform: rotate(4deg);
}
.hero__photo--b {
  bottom: 0; right: 4%;
  transform: rotate(-3deg);
  width: 44%;
}

/* Плавающие плашки */
.hero__float {
  position: absolute;
  background: rgba(255,255,255,.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,.9);
  border-radius: 16px;
  box-shadow: var(--sh-lg);
  padding: 12px 18px;
  font-size: 13px;
  font-weight: 600;
  animation: float 6s ease-in-out infinite;
}
.hero__float--price {
  bottom: 10%; left: -6%;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.hero__float--price span {
  color: var(--c-ink-3);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
}
.hero__float--price strong {
  font-family: var(--f-serif);
  font-size: 20px;
  font-weight: 500;
  color: var(--c-accent);
  letter-spacing: -0.02em;
}
.hero__float--ship {
  top: 8%; left: 4%;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  animation-delay: 1.2s;
}
.hero__float--ship .dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #7fa563;
  box-shadow: 0 0 0 4px rgba(127,165,99,.2);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-10px); }
}

/* -------- Адаптив -------- */
@media (max-width: 900px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .hero__copy { max-width: 100%; text-align: center; margin: 0 auto; }
  .hero__lead, .hero__title { margin-left: auto; margin-right: auto; }
  .hero__actions { justify-content: center; }
  .hero__stats { justify-content: center; }
  .hero__gallery { max-width: 480px; margin: 0 auto; }
}
</style>