<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTelegram } from '@/composables/useTelegram'

const { openChannel } = useTelegram()

const links = [
  { href: '#brands',     label: 'Бренды' },
  { href: '#categories', label: 'Категории' },
  { href: '#how',        label: 'Как заказать' },
  { href: '#faq',        label: 'FAQ' },
  { href: '#contacts',   label: 'Контакты' },
]

const scrolled = ref(false)
const onScroll = () => (scrolled.value = window.scrollY > 12)
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <div class="header__inner">
      <a href="#" class="logo">
        Shop<span>US</span>
      </a>

      <nav class="nav">
        <a v-for="l in links" :key="l.href" :href="l.href" class="nav__link">
          {{ l.label }}
        </a>
      </nav>

      <button class="cta" @click="openChannel">
        Telegram
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background .25s ease, box-shadow .25s ease,
              border-color .25s ease, backdrop-filter .25s ease;
  border-bottom: 1px solid transparent;
}
.header--scrolled {
  background: rgba(255,255,255,.75);
  backdrop-filter: saturate(180%) blur(14px);
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  border-bottom-color: var(--c-line);
  box-shadow: 0 1px 0 rgba(13,18,32,.02);
}

.header__inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 32px;
}

.logo {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.02em;
}
.logo span {
  background: var(--g-accent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.nav {
  display: flex;
  gap: 28px;
  margin-left: auto;
}
.nav__link {
  font-size: 15px;
  font-weight: 500;
  color: var(--c-ink-2);
  position: relative;
  padding: 6px 0;
  transition: color .18s ease;
}
.nav__link::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 2px;
  background: var(--g-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .22s ease;
  border-radius: 2px;
}
.nav__link:hover { color: var(--c-ink); }
.nav__link:hover::after { transform: scaleX(1); }

.cta {
  padding: 10px 22px;
  border-radius: 999px;
  border: none;
  background: var(--c-ink);
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: transform .2s ease, background .2s ease, box-shadow .2s ease;
  box-shadow: 0 8px 20px rgba(43,38,34,.16);
}
.cta:hover {
  transform: translateY(-2px);
  background: #1a1614;
  box-shadow: 0 14px 30px rgba(43,38,34,.24);
}

.nav__link::after { background: var(--c-accent); }

@media (max-width: 860px) {
  .nav { display: none; }
  .header__inner { justify-content: space-between; }
}
</style>