<template>
  <section class="py-16 bg-white/50">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-start gap-8">
        <!-- Left label -->
        <div class="flex-shrink-0 w-32">
          <div class="text-xs text-gray-400 font-medium leading-loose">
            <div class="text-gray-800 font-semibold text-sm mb-1">最新消息</div>
            <div class="text-gray-400">新聞稿單</div>
          </div>
        </div>

        <!-- Scrollable news cards -->
        <div class="flex-1 overflow-x-auto pb-4 scrollbar-hide">
          <div class="flex gap-4" style="min-width: max-content;">
            <div
              v-for="news in newsItems"
              :key="news.id"
              class="glass-card px-5 py-4 w-56 flex-shrink-0 cursor-pointer hover:shadow-xl hover:shadow-mint-500/10 transition-all hover:-translate-y-1"
            >
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs text-gray-400">{{ news.date }}</span>
                <span v-if="news.isNew" class="text-xs bg-[#4ECBA5] text-white px-2 py-0.5 rounded-full font-medium">New</span>
              </div>
              <p class="text-sm font-medium text-gray-700 leading-snug line-clamp-3">{{ news.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const newsItems = [
  { id: 1, date: '2024.07.16', isNew: true, title: '新工具！「幫大鳥補課」正式上線' },
  { id: 2, date: '2024.07.16', isNew: true, title: '新工具！「幫大鳥補課」正式上線' },
  { id: 3, date: '2024.07.16', isNew: true, title: '新工具！「幫大鳥補課」正式上線' },
  { id: 4, date: '2024.06.20', isNew: false, title: 'Open NCCU 正式推出 v2.0 全新介面' },
  { id: 5, date: '2024.05.10', isNew: false, title: '政大選課小幫手功能更新上線啦！' },
]
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>
