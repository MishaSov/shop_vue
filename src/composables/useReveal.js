import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  let observer = null

  const init = () => {
    const els = document.querySelectorAll('.reveal')
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Показываем, только когда элемент в зоне видимости.
          // Не отключаем observer — теперь анимация обратима.
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
        })
      },
      {
        threshold: 0.15,
        rootMargin: '-40px 0px -40px 0px',
      }
    )
    els.forEach((el) => observer.observe(el))
  }

  onMounted(() => requestAnimationFrame(init))
  onUnmounted(() => observer?.disconnect())
}