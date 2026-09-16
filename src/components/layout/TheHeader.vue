<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useTelegram } from '@/composables/useTelegram'
import { useHaptic } from '@/composables/useHaptic'

const { openChannel } = useTelegram()
const { tap } = useHaptic()

const links = [
  { href: '#about', label: 'О нас' },
  { href: '#benefits', label: 'Преимущества' },
  { href: '#brands', label: 'Бренды' },
  { href: '#categories', label: 'Категории' },
  { href: '#how', label: 'Как заказать' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacts', label: 'Контакты' },
]

const scrolled = ref(false)
const menuOpen = ref(false)

const onScroll = () => (scrolled.value = window.scrollY > 12)

const toggleMenu = () => {
  tap(8)
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => (menuOpen.value = false)

const onKey = (e) => {
  if (e.key === 'Escape') closeMenu()
}

// Блокируем скролл при открытом меню
watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <!-- Затемнение всего сайта (телепорт в body, чтобы z-index работал глобально) -->
  <Teleport to="body">
    <Transition name="overlay">
      <div v-if="menuOpen" class="overlay" @click="closeMenu" />
    </Transition>
  </Teleport>

  <header class="header" :class="{ 'header--scrolled': scrolled, 'header--open': menuOpen }">
    <div class="header__inner">
      <a href="#" class="logo" @click="closeMenu">
        <em>M.K</em> <span>select</span>
      </a>

      <!-- Десктоп-навигация -->
      <nav class="nav">
        <a v-for="l in links" :key="l.href" :href="l.href" class="nav__link">
          {{ l.label }}
        </a>
      </nav>

      <!-- Десктоп-CTA (Telegram) -->
      <button class="cta cta--desktop" @click="openChannel">
        Telegram
      </button>

      <!-- Бургер (мобилка) -->
      <button
        class="burger"
        :class="{ 'burger--active': menuOpen }"
        @click="toggleMenu"
        :aria-label="menuOpen ? 'Закрыть меню' : 'Открыть меню'"
        :aria-expanded="menuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Мобильное меню -->
    <Transition name="menu">
      <nav v-if="menuOpen" class="menu" aria-label="Мобильная навигация">
        <a
          v-for="(l, i) in links"
          :key="l.href"
          :href="l.href"
          class="menu__link"
          :style="{ transitionDelay: `${0.05 + i * 0.04}s` }"
          @click="closeMenu"
        >
          {{ l.label }}
        </a>
      </nav>
    </Transition>
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
  background: rgba(255, 255, 255, .75);
  backdrop-filter: saturate(180%) blur(14px);
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  border-bottom-color: var(--c-line);
  box-shadow: 0 1px 0 rgba(13, 18, 32, .02);
}

.header--open {
  background: rgba(255, 255, 255, .95);
  backdrop-filter: saturate(180%) blur(14px);
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  border-bottom-color: var(--c-line);
}

.header__inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
  z-index: 2;
}

.logo {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.01em;
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
}

.logo em {
  font-family: var(--f-serif);
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  letter-spacing: -0.02em;
  color: var(--c-ink);
}

.logo span {
  background: var(--g-accent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 600;
}

/* ===== Десктопная навигация ===== */
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
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: var(--c-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .22s ease;
  border-radius: 2px;
}

.nav__link:hover {
  color: var(--c-ink);
}

.nav__link:hover::after {
  transform: scaleX(1);
}

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
  box-shadow: 0 8px 20px rgba(43, 38, 34, .16);
}

.cta:hover {
  transform: translateY(-2px);
  background: #1a1614;
  box-shadow: 0 14px 30px rgba(43, 38, 34, .24);
}

/* ===== Бургер ===== */
.burger {
  display: none;
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  margin-left: auto;
  border-radius: 12px;
  transition: background .2s ease;
  z-index: 3;
}

.burger:hover {
  background: rgba(43, 38, 34, .05);
}

.burger span {
  position: absolute;
  left: 12px;
  right: 12px;
  height: 2px;
  background: var(--c-ink);
  border-radius: 2px;
  transition: transform .3s cubic-bezier(.22, 1, .36, 1),
    opacity .2s ease,
    top .3s cubic-bezier(.22, 1, .36, 1);
}

.burger span:nth-child(1) { top: 15px; }
.burger span:nth-child(2) { top: 21px; }
.burger span:nth-child(3) { top: 27px; }

.burger--active span:nth-child(1) {
  top: 21px;
  transform: rotate(45deg);
}
.burger--active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.burger--active span:nth-child(3) {
  top: 21px;
  transform: rotate(-45deg);
}

/* ===== Затемнение всего сайта под меню ===== */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(43, 38, 34, .45);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  z-index: 98;
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity .3s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* ===== Мобильное меню ===== */
.menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, .98);
  backdrop-filter: saturate(180%) blur(16px);
  -webkit-backdrop-filter: saturate(180%) blur(16px);
  border-bottom: 1px solid var(--c-line);
  padding: 12px 24px 28px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 40px rgba(43, 38, 34, .12);
  z-index: 2;
}

.menu__link {
  padding: 16px 4px;
  font-size: 17px;
  font-weight: 500;
  color: var(--c-ink-2);
  border-bottom: 1px solid var(--c-line);
  transition: color .18s ease, padding-left .22s ease,
    opacity .35s ease, transform .35s ease;
}

.menu__link:last-child {
  border-bottom: none;
}

.menu__link:hover,
.menu__link:active {
  color: var(--c-accent);
  padding-left: 10px;
}

/* Анимация появления меню */
.menu-enter-active,
.menu-leave-active {
  transition: opacity .25s ease, transform .3s cubic-bezier(.22, 1, .36, 1);
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

.menu-enter-from .menu__link,
.menu-leave-to .menu__link {
  opacity: 0;
  transform: translateX(-8px);
}
.menu-enter-active .menu__link {
  opacity: 1;
  transform: translateX(0);
}

/* ===== Адаптив ===== */
@media (max-width: 860px) {
  .nav,
  .cta--desktop {
    display: none;
  }
  .burger {
    display: block;
  }
  .header__inner {
    gap: 16px;
  }
}
</style>