/**
 * Вибро-отклик при тапах. Работает на Android и (частично) iOS.
 */
export function useHaptic() {
  const tap = (ms = 10) => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try { navigator.vibrate(ms) } catch { /* silent */ }
    }
  }
  return { tap }
}