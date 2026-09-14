import { onMounted, onUnmounted } from 'vue'

/**
 * Навешивает .is-visible на все .reveal-элементы при попадании в viewport.
 * Работает через один общий IntersectionObserver (эффективно).
 */
export function useReveal() {
  let observer = null

  const init = () => {
    const els = document.querySelectorAll('.reveal')
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    els.forEach((el) => observer.observe(el))
  }

  onMounted(() => {
    // Ждём монтирования всех секций
    requestAnimationFrame(init)
  })

  onUnmounted(() => observer?.disconnect())
}