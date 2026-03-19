<template>
  <section class="relative py-20 bg-white/50 overflow-hidden">
    <!-- Diagonal decorative lines -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute -top-20 -left-20 w-[600px] h-[600px] opacity-[0.04]"
        style="background: repeating-linear-gradient(135deg, transparent, transparent 40px, #94a3b8 40px, #94a3b8 41px);">
      </div>
      <div class="absolute -bottom-20 -right-20 w-[500px] h-[500px] opacity-[0.04]"
        style="background: repeating-linear-gradient(135deg, transparent, transparent 40px, #94a3b8 40px, #94a3b8 41px);">
      </div>
    </div>

    <div class="relative max-w-6xl mx-auto px-6">
      <div class="flex items-start gap-12">
        <!-- Left label -->
        <div class="flex-shrink-0 flex flex-col items-start gap-3">
          <span class="inline-block border-2 border-gray-800 text-gray-800 text-base font-semibold px-6 py-2 rounded-full">
            最新消息
          </span>
          <span class="text-gray-400 text-sm mt-1">新聞報導</span>
        </div>

        <!-- Scrollable news cards -->
        <div class="flex-1 overflow-x-auto pb-4 scrollbar-hide">
          <div class="flex gap-6" style="min-width: max-content;">
            <div
              v-for="news in newsItems"
              :key="news.id"
              class="bg-white rounded-2xl px-7 py-6 w-72 flex-shrink-0 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-gray-200/60 transition-all hover:-translate-y-1"
            >
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-medium text-[#4ECBA5]">{{ news.date }}</span>
                <span
                  v-if="news.isNew"
                  class="text-xs bg-[#4ECBA5] text-white px-2.5 py-0.5 rounded-full font-medium"
                >New</span>
              </div>
              <p class="text-base font-bold text-gray-800 leading-snug mb-3">{{ news.title }}</p>
              <p class="text-sm text-gray-400 leading-relaxed line-clamp-2">{{ news.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const newsItems = [
  { id: 1, date: '2024.07.10', isNew: true, title: '新工具！「政大吃什麼」正式上線', description: '還在煩惱每天的餐食選擇的你絕對不能錯過這個新工具！' },
  { id: 2, date: '2024.07.10', isNew: true, title: '新工具！「政大吃什麼」正式上線', description: '還在煩惱每天的餐食選擇的你絕對不能錯過這個新工具！' },
  { id: 3, date: '2024.07.10', isNew: true, title: '新工具！「政大吃什麼」正式上線', description: '還在煩惱每天的餐食選擇的你絕對不能錯過這個新工具！' },
]
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>
