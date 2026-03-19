<template>
  <div class="glass p-6 transition-all duration-300 hover:border-white/20 hover:scale-[1.02]">
    <div v-if="icon" class="text-3xl mb-4">{{ icon }}</div>
    <h3 class="text-xl font-bold mb-2 text-white/90">
      <slot name="title" />
    </h3>
    <p class="text-white/60 leading-relaxed">
      <slot />
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon?: string
}>()
</script>
