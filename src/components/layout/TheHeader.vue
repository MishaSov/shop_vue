<script setup>
import { useTelegram } from '@/composables/useTelegram'
const { openChannel } = useTelegram()

const links = [
  { href: '#brands', label: 'Бренды' },
  { href: '#categories', label: 'Категории' },
  { href: '#how', label: 'Как заказать' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacts', label: 'Контакты' },
]
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <a href="#" class="header__logo">Shop<span>US</span></a>
      <nav class="header__nav">
        <a v-for="l in links" :key="l.href" :href="l.href">{{ l.label }}</a>
      </nav>
      <button class="header__cta" @click="openChannel">Telegram</button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky; top: 0; z-index: 50;
  background: rgba(255,255,255,.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #eee;
}
.header__inner {
  max-width: 1200px; margin: 0 auto; padding: 16px 20px;
  display: flex; align-items: center; gap: 24px;
}
.header__logo { font-size: 20px; font-weight: 700; text-decoration: none; color: #111; }
.header__logo span { color: #229ED9; }
.header__nav { display: flex; gap: 20px; margin-left: auto; }
.header__nav a { color: #444; text-decoration: none; font-size: 15px; }
.header__nav a:hover { color: #229ED9; }
.header__cta {
  background: #229ED9; color: #fff; border: none;
  padding: 10px 20px; border-radius: 10px; cursor: pointer; font-weight: 600;
}
@media (max-width: 768px) { .header__nav { display: none; } }
</style>