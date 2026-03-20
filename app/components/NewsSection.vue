<template>
  <section class="relative py-16 overflow-hidden">
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
      <div class="flex flex-col md:flex-row items-start gap-6 md:gap-12">
        <!-- Left label -->
        <div class="flex-shrink-0 flex flex-row md:flex-col items-center md:items-start gap-3 pt-2">
          <span
            class="inline-block border border-[#aeaeb2] text-[#606060] px-6 md:px-8 py-2 md:py-3 rounded-full"
            style="font-family: 'Noto Sans TC', sans-serif; font-size: 20px; font-weight: 400;"
          >
            最新消息
          </span>
          <span
            class="text-[#aeaeb2] md:mt-2"
            style="font-family: 'Noto Sans TC', sans-serif; font-size: 20px; font-weight: 400;"
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
              class="news-card rounded-2xl px-7 py-6 w-80 flex-shrink-0 cursor-pointer transition-all hover:-translate-y-1"
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
  { id: 1, date: '2026.03.15', isNew: true, title: '徵才月集點工具正式上線', description: '與職涯中心合作推出數位集點系統，參加徵才月活動即可累積點數兌換精美好禮！' },
  { id: 2, date: '2026.02.20', isNew: true, title: 'Open NCCU 官網全新改版', description: '全新視覺設計搭配互動動畫，帶來更現代化的瀏覽體驗，快來看看我們的新面貌！' },
  { id: 3, date: '2026.01.08', isNew: false, title: '2025 年度回顧：成長與展望', description: '回顧過去一年的成果，Open NCCU 服務累計超過 15,000 次使用，感謝所有政大人的支持。' },
  { id: 4, date: '2025.11.12', isNew: false, title: '「政大吃什麼」新增外送比價功能', description: '不只幫你決定吃什麼，現在還能比較各平台外送價格，幫你省荷包！' },
  { id: 5, date: '2025.09.01', isNew: false, title: '新學期社團博覽會招募新血', description: 'Open NCCU 正在招募新成員！無論你是工程師、設計師還是行銷人才，都歡迎加入我們。' },
]
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

.news-card {
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.75) 0%,
    rgba(255, 255, 255, 0.45) 50%,
    rgba(240, 240, 240, 0.5) 100%
  );
  backdrop-filter: blur(16px) saturate(1.4);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow:
    /* Outer neumorphic shadow (bottom-right) */
    6px 6px 14px rgba(0, 0, 0, 0.06),
    /* Outer highlight (top-left) */
    -4px -4px 10px rgba(255, 255, 255, 0.8),
    /* Inner top-left highlight for emboss */
    inset 1px 1px 2px rgba(255, 255, 255, 0.6),
    /* Inner bottom-right shadow for depth */
    inset -1px -1px 2px rgba(0, 0, 0, 0.03);
}

.news-card:hover {
  box-shadow:
    8px 8px 20px rgba(0, 0, 0, 0.08),
    -4px -4px 12px rgba(255, 255, 255, 0.9),
    inset 1px 1px 3px rgba(255, 255, 255, 0.7),
    inset -1px -1px 3px rgba(0, 0, 0, 0.04);
}
</style>
