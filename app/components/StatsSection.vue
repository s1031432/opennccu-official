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
        <div class="flex justify-center items-center gap-10 flex-wrap">
          <div v-for="partner in partners" :key="partner.label"
            class="w-14 h-14 glass-card rounded-2xl flex items-center justify-center text-gray-400 hover:text-[#4ECBA5] hover:shadow-lg transition-all cursor-pointer"
            :title="partner.label">
            <component :is="'svg'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" v-html="partner.icon"></component>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const partners = [
  {
    label: '位置服務',
    icon: '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>',
  },
  {
    label: '連結服務',
    icon: '<path d="M8 12h8M12 8l4 4-4 4"/><circle cx="12" cy="12" r="10"/>',
  },
  {
    label: '文件服務',
    icon: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/>',
  },
  {
    label: '程式服務',
    icon: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  },
  {
    label: '字體服務',
    icon: '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>',
  },
  {
    label: '其他服務',
    icon: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  },
]
</script>
