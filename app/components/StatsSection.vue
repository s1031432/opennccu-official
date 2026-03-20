<template>
  <section class="py-20 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Stats -->
      <div class="grid grid-cols-2 gap-8 max-w-lg mx-auto text-center mb-20">
        <div>
          <div class="text-4xl font-black text-[#4ECBA5] mb-2">3,500+</div>
          <div class="text-sm text-gray-500">當日活躍使用者</div>
        </div>
        <div>
          <div class="text-4xl font-black text-[#4ECBA5] mb-2">15,000+</div>
          <div class="text-sm text-gray-500">使用次數</div>
        </div>
      </div>

      <!-- Partners -->
      <div id="partners">
        <h3 class="text-xl font-semibold text-center text-gray-600 mb-10">合作夥伴</h3>
        <div class="flex justify-center items-center gap-8 flex-wrap">
          <div
            v-for="partner in partners"
            :key="partner.label"
            class="w-14 h-14 glass-card rounded-2xl flex items-center justify-center text-gray-400 hover:text-[#4ECBA5] hover:shadow-lg transition-all cursor-pointer"
            :title="partner.label"
          >
            <Icon :icon="partner.icon" width="26" height="26" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const partners = [
  { label: '位置服務', icon: 'mdi:map-marker-outline' },
  { label: '連結服務', icon: 'mdi:link-variant' },
  { label: '文件服務', icon: 'mdi:file-document-outline' },
  { label: '程式服務', icon: 'mdi:code-braces' },
  { label: '字體服務', icon: 'mdi:format-font' },
  { label: '其他服務', icon: 'mdi:dots-hexagon' },
]
</script>
