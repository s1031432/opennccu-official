<template>
  <section class="relative py-16 bg-[#f0f0f0] overflow-hidden">
    <!-- Subtle diagonal decorative lines -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute w-[1px] bg-white/50"
        style="height: 200%; top: -30%; right: 25%; transform: rotate(-32deg); transform-origin: top center;"
      />
      <div
        class="absolute w-[1px] bg-white/40"
        style="height: 200%; top: -30%; right: 40%; transform: rotate(-32deg); transform-origin: top center;"
      />
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <div class="flex items-start gap-12">
        <!-- Left label -->
        <div class="flex-shrink-0 flex flex-col items-start gap-3 pt-2">
          <span
            class="inline-block border border-[#aeaeb2] text-[#606060] px-8 py-3 rounded-full"
            style="font-family: 'Noto Sans TC', sans-serif; font-size: 28px; font-weight: 400;"
          >
            最新消息
          </span>
          <span
            class="text-[#aeaeb2] mt-2"
            style="font-family: 'Noto Sans TC', sans-serif; font-size: 28px; font-weight: 400;"
          >
            新聞報導
          </span>
        </div>

        <!-- Scrollable news cards -->
        <div class="flex-1 overflow-x-auto pb-4 scrollbar-hide">
          <div class="flex gap-6" style="min-width: max-content;">
            <div
              v-for="news in newsItems"
              :key="news.id"
              class="bg-white rounded-2xl px-7 py-6 w-80 flex-shrink-0 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-gray-200/60 transition-all hover:-translate-y-1"
            >
              <div class="flex items-start justify-between mb-4">
                <span
                  class="text-sm font-medium text-[#aeaeb2]"
                  style="font-family: 'Montserrat', sans-serif;"
                >{{ news.date }}</span>
                <span
                  v-if="news.isNew"
                  class="text-xs bg-[#5AAFA0] text-white px-3 py-1 rounded-lg font-medium"
                >New</span>
              </div>
              <p
                class="text-base font-bold text-[#606060] leading-snug mb-3"
                style="font-family: 'Noto Sans TC', sans-serif;"
              >{{ news.title }}</p>
              <p
                class="text-sm text-[#aeaeb2] leading-relaxed line-clamp-2"
                style="font-family: 'Noto Sans TC', sans-serif;"
              >{{ news.description }}</p>
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
  { id: 4, date: '2024.07.10', isNew: true, title: '新工具！「政大吃什麼」正式上線', description: '還在煩惱每天的餐食選擇的你絕對不能錯過這個新工具！' },
]
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>
