<template>
  <Teleport to="body">
    <Transition name="popup">
      <div
        v-if="role"
        class="popup-overlay"
        @click.self="emit('close')"
      >
        <div class="popup-glass">
          <!-- Close button -->
          <button
            class="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-[#aeaeb2] hover:text-[#606060] hover:bg-white/50 transition-all z-10"
            @click="emit('close')"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <!-- Title -->
          <h3
            class="popup-title"
            style="font-family: 'Montserrat', sans-serif; font-size: 36px; font-weight: 400; color: #606060;"
          >
            現任 {{ role.name }}
          </h3>

          <!-- Content area -->
          <div class="popup-content">
            <!-- Left: avatar cluster (scattered circles like Figma) -->
            <div class="avatar-cluster">
              <button
                v-for="(member, i) in role.members"
                :key="i"
                class="avatar-item"
                :style="avatarPosition(i, role.members.length)"
                @click="selectedIndex = i"
              >
                <div
                  class="avatar-circle bg-gradient-to-br transition-all"
                  :class="[
                    member.gradientClass,
                    selectedIndex === i
                      ? 'ring-3 ring-[#4ECBA5] shadow-xl scale-110'
                      : 'ring-2 ring-white/60 shadow-md hover:scale-105'
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
                    class="text-lg md:text-xl font-bold text-white"
                    style="font-family: 'Montserrat', sans-serif;"
                  >{{ member.initials }}</span>
                </div>
              </button>
            </div>

            <!-- Right: member details -->
            <div v-if="selectedMember" class="member-details">
              <h4
                class="mb-4"
                style="font-family: 'Noto Sans TC', sans-serif; font-size: 32px; font-weight: 500; color: #606060;"
              >
                {{ selectedMember.title }} {{ selectedMember.name }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { TeamMember } from '~/data/crew'

const props = defineProps<{
  role: {
    name: string
    members: TeamMember[]
  }
}>()

const emit = defineEmits<{
  close: []
}>()

const selectedIndex = ref(0)
const selectedMember = computed(() => props.role.members[selectedIndex.value])

// Scattered circle positions — deterministic but organic-looking
// Uses a seeded pseudo-random approach so positions are stable
function avatarPosition(index: number, total: number): CSSProperties {
  // Golden angle distribution for organic scatter
  const goldenAngle = 137.508
  const angle = index * goldenAngle * (Math.PI / 180)
  // Radius grows with sqrt for even area distribution
  const maxR = total > 6 ? 38 : 35
  const r = maxR * Math.sqrt((index + 0.5) / total)
  const cx = 50 + r * Math.cos(angle)
  const cy = 50 + r * Math.sin(angle)
  return {
    left: `${Math.max(0, Math.min(80, cx))}%`,
    top: `${Math.max(0, Math.min(80, cy))}%`,
  }
}

// Reset selection when role changes
watch(() => props.role, () => {
  selectedIndex.value = 0
})

// Body scroll lock + escape key
if (import.meta.client) {
  onMounted(() => {
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeydown)
  })
  onUnmounted(() => {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', onKeydown)
  })
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
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
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 24px;
}

.popup-glass {
  position: relative;
  max-width: 1032px;
  width: 100%;
  min-height: 500px;
  max-height: 90vh;
  border-radius: 50px;
  background: rgba(240, 240, 240, 0.88);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow:
    0 16px 64px rgba(0, 0, 0, 0.1),
    0 4px 16px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  padding: 48px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.popup-title {
  margin-bottom: 16px;
}

.popup-content {
  display: flex;
  flex: 1;
  gap: 24px;
  min-height: 0;
}

.avatar-cluster {
  position: relative;
  flex-shrink: 0;
  width: 420px;
  min-height: 380px;
}

.avatar-item {
  position: absolute;
  width: 80px;
  height: 80px;
  transition: transform 0.2s ease;
}

.avatar-circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.member-details {
  flex: 1;
  min-width: 0;
  padding-top: 16px;
}

.detail-text {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #606060;
  line-height: 1.6;
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

.popup-enter-from .popup-glass,
.popup-leave-to .popup-glass {
  transform: scale(0.95);
  opacity: 0;
}

.popup-enter-active .popup-glass,
.popup-leave-active .popup-glass {
  transition: all 0.3s ease;
}

/* Mobile bottom sheet */
@media (max-width: 767px) {
  .popup-overlay {
    align-items: flex-end;
    padding: 0;
  }

  .popup-glass {
    max-height: 85vh;
    border-radius: 24px 24px 0 0;
    padding: 24px;
  }

  .popup-content {
    flex-direction: column;
  }

  .avatar-cluster {
    width: 100%;
    min-height: 200px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
  }

  .avatar-item {
    position: relative;
    width: 80px;
    height: 80px;
  }
}
</style>
