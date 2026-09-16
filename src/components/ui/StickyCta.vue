<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTelegram } from '@/composables/useTelegram'
import { useHaptic } from '@/composables/useHaptic'

const { openChannel } = useTelegram()
const { tap } = useHaptic()

const visible = ref(false)
const onScroll = () => (visible.value = window.scrollY > 600)

const handleClick = () => {
  tap(12)
  openChannel()
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition name="sticky">
    <button v-if="visible" class="sticky-cta" @click="handleClick">
      <span class="sticky-cta__icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
        </svg>
      </span>
      <span class="sticky-cta__text">
        Заказать в Telegram
        <small>отвечаем за 5 минут</small>
      </span>
      <span class="sticky-cta__arrow">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </button>
  </Transition>
</template>

<style scoped>
.sticky-cta {
  position: fixed;
  left: 16px;
  right: 16px;
  bottom: calc(16px + env(safe-area-inset-bottom, 0px));
  z-index: 90;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 18px 12px 12px;
  border: none;
  border-radius: 999px;
  background: var(--c-ink);
  color: #fff;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
  box-shadow: 0 18px 44px rgba(43,38,34,.35);
  animation: ctaPulse 3s ease-in-out infinite;
  will-change: transform, box-shadow;
}

.sticky-cta:active {
  transform: scale(.97);
}

@keyframes ctaPulse {
  0%, 100% { box-shadow: 0 18px 44px rgba(43,38,34,.35); }
  50%      { box-shadow: 0 18px 60px rgba(199,154,123,.55); }
}

.sticky-cta__icon {
  width: 42px; height: 42px;
  display: grid; place-items: center;
  border-radius: 50%;
  background: var(--g-accent);
  flex: 0 0 auto;
  color: #fff;
}

.sticky-cta__text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  font-weight: 600;
  font-size: 15px;
  flex: 1;
}

.sticky-cta__text small {
  font-weight: 400;
  font-size: 12px;
  opacity: .65;
  margin-top: 2px;
}

.sticky-cta__arrow {
  opacity: .6;
  transition: transform .25s ease;
}
.sticky-cta:hover .sticky-cta__arrow { transform: translateX(4px); }

/* Появление снизу */
.sticky-enter-active, .sticky-leave-active {
  transition: transform .4s cubic-bezier(.22,1,.36,1), opacity .3s ease;
}
.sticky-enter-from, .sticky-leave-to {
  transform: translateY(140%);
  opacity: 0;
}

/* Только для мобильных и планшетов */
@media (min-width: 900px) {
  .sticky-cta { display: none; }
}
</style>