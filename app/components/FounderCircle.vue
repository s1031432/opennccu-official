<template>
  <div class="founder-circle" @click="$emit('click')">
    <!-- Curved text using SVG -->
    <svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
      <defs>
        <path id="topArc" d="M 30,100 A 70,70 0 0,1 170,100" fill="none" />
        <path id="bottomArc" d="M 170,100 A 70,70 0 0,1 30,100" fill="none" />
      </defs>
      <text
        style="font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 400; letter-spacing: 3px;"
        fill="#4ECBA5"
      >
        <textPath href="#topArc" startOffset="50%" text-anchor="middle">
          Founder Team
        </textPath>
      </text>
      <text
        style="font-family: 'Noto Sans TC', sans-serif; font-size: 12px; font-weight: 300; letter-spacing: 2px;"
        fill="#4ECBA5"
      >
        <textPath href="#bottomArc" startOffset="50%" text-anchor="middle">
          點擊了解更多
        </textPath>
      </text>
    </svg>

    <!-- Ghost icon center -->
    <div class="absolute inset-0 flex items-center justify-center">
      <Icon icon="solar:ghost-bold" class="text-white/80" :width="56" :height="56" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineEmits<{
  click: []
}>()
</script>

<style scoped>
.founder-circle {
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: rgba(200, 200, 200, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform;
}

.founder-circle:hover {
  transform: scale(1.05);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}
</style>
