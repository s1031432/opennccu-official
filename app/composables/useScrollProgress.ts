/**
 * Composable for section-scoped scroll progress with spring physics.
 * Returns a smoothed 0~1 progress based on how far through the section the user has scrolled.
 */
export function useScrollProgress(containerRef: Ref<HTMLElement | null>) {
  const smoothProgress = ref(0)

  let targetProgress = 0
  let smoothVelocity = 0
  let animating = false
  let rafId = 0

  const SPRING_STIFFNESS = 0.06
  const SPRING_DAMPING = 0.8
  const MIN_DELTA = 0.0001

  // Cache section measurements (recalculated on resize)
  let sectionTop = 0
  let sectionHeight = 0
  let viewportHeight = 0

  function measure() {
    const el = containerRef.value
    if (!el) return
    // Use offsetTop to get document-relative position
    // Walk up offsetParent chain to get absolute offset
    let top = 0
    let current: HTMLElement | null = el
    while (current) {
      top += current.offsetTop
      current = current.offsetParent as HTMLElement | null
    }
    sectionTop = top
    sectionHeight = el.offsetHeight
    viewportHeight = window.innerHeight
  }

  function updateProgress() {
    if (sectionHeight <= viewportHeight) return

    const scrollY = window.scrollY
    const runway = sectionHeight - viewportHeight
    const scrolled = scrollY - sectionTop

    targetProgress = Math.max(0, Math.min(1, scrolled / runway))
    startAnimation()
  }

  function startAnimation() {
    if (animating) return
    animating = true
    tickAnimation()
  }

  function tickAnimation() {
    const diff = targetProgress - smoothProgress.value
    smoothVelocity += diff * SPRING_STIFFNESS
    smoothVelocity *= SPRING_DAMPING
    smoothProgress.value = Math.max(0, Math.min(1, smoothProgress.value + smoothVelocity))

    if ((smoothProgress.value <= 0 && smoothVelocity < 0) ||
        (smoothProgress.value >= 1 && smoothVelocity > 0)) {
      smoothVelocity = 0
    }

    if (Math.abs(diff) > MIN_DELTA || Math.abs(smoothVelocity) > MIN_DELTA) {
      rafId = requestAnimationFrame(tickAnimation)
    } else {
      smoothProgress.value = Math.round(targetProgress * 1000) / 1000
      animating = false
    }
  }

  if (import.meta.client) {
    onMounted(() => {
      measure()
      window.addEventListener('scroll', updateProgress, { passive: true })
      window.addEventListener('resize', measure, { passive: true })
      updateProgress()
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', measure)
      cancelAnimationFrame(rafId)
    })
  }

  return { smoothProgress }
}
