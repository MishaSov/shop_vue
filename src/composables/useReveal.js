import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  let observer = null

  const init = () => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!els.length || typeof IntersectionObserver === 'undefined') return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '-40px 0px -40px 0px' }
    )
    els.forEach((el) => observer.observe(el))
  }

  onMounted(() => requestAnimationFrame(init))
  onUnmounted(() => observer?.disconnect())
}