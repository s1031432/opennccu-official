<template>
  <Teleport to="body">
    <Transition name="popup">
      <div
        v-if="members"
        class="popup-overlay"
        @click.self="$emit('close')"
      >
        <div class="founder-popup-glass">
          <!-- Close button -->
          <button
            class="absolute top-8 right-8 w-10 h-10 rounded-full flex items-center justify-center text-[#aeaeb2] hover:text-[#616161] hover:bg-white/50 transition-all z-10"
            @click="$emit('close')"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <!-- Title -->
          <h3
            class="text-center mb-6"
            style="font-family: 'Montserrat', sans-serif; font-size: 36px; font-weight: 400; color: #616161;"
          >
            Founder Team
          </h3>

          <div class="flex flex-col items-center gap-6 flex-1">
            <!-- Avatar cluster -->
            <div class="flex gap-4 items-center justify-center flex-wrap">
              <button
                v-for="(member, i) in members"
                :key="i"
                class="transition-transform"
                :class="selectedIndex === i ? 'scale-110' : 'hover:scale-105'"
                @click="selectedIndex = i"
              >
                <div
                  class="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center bg-gradient-to-br border-3 transition-all"
                  :class="[
                    member.gradientClass,
                    selectedIndex === i
                      ? 'border-[#4ECBA5] shadow-xl'
                      : 'border-white/60 shadow-md'
                  ]"
                >
                  <img
                    v-if="member.avatarUrl"
                    :src="member.avatarUrl"
                    :alt="member.name"
                    class="w-full h-full rounded-full object-cover"
                  >
                  <span
                    v-else
                    class="text-3xl md:text-4xl font-bold text-white"
                    style="font-family: 'Montserrat', sans-serif;"
                  >{{ member.initials }}</span>
                </div>
              </button>
            </div>

            <!-- Selected member details -->
            <div v-if="selectedMember" class="text-center max-w-md">
              <h4
                class="mb-3"
                style="font-family: 'Montserrat', sans-serif; font-size: 32px; font-weight: 500; color: #616161;"
              >
                Founder {{ selectedMember.name }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { TeamMember } from '~/data/crew'

const props = defineProps<{
  members: TeamMember[]
}>()

defineEmits<{
  close: []
}>()

const selectedIndex = ref(0)
const selectedMember = computed(() => props.members[selectedIndex.value])

// Body scroll lock
if (import.meta.client) {
  onMounted(() => {
    document.body.style.overflow = 'hidden'
  })
  onUnmounted(() => {
    document.body.style.overflow = ''
  })
}
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding: 24px;
}

.founder-popup-glass {
  position: relative;
  width: 700px;
  max-width: 95vw;
  max-height: 700px;
  aspect-ratio: 1;
  border-radius: 1000px;
  background: rgba(240, 240, 240, 0.92);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow:
    0 16px 64px rgba(0, 0, 0, 0.12),
    0 4px 16px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Popup transitions */
.popup-enter-active,
.popup-leave-active {
  transition: all 0.3s ease;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}

.popup-enter-from .founder-popup-glass,
.popup-leave-to .founder-popup-glass {
  transform: scale(0.9);
  opacity: 0;
}

/* Mobile: make it rectangular */
@media (max-width: 767px) {
  .popup-overlay {
    align-items: flex-end;
    padding: 0;
  }

  .founder-popup-glass {
    aspect-ratio: auto;
    max-height: 85vh;
    border-radius: 24px 24px 0 0;
    padding: 24px;
    width: 100%;
  }
}
</style>
