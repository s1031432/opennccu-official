export function useScrollY() {
  const scrollY = ref(0)

  if (import.meta.client) {
    const onScroll = () => {
      scrollY.value = window.scrollY
    }
    onMounted(() => {
      window.addEventListener('scroll', onScroll, { passive: true })
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll)
    })
  }

  return { scrollY }
}
