<template>
  <section class="relative py-6 overflow-hidden">
    <!-- Subtle diagonal decorative lines per Figma -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute w-[1px] bg-white/40"
        style="height: 200%; top: -30%; right: 20%; transform: rotate(-32deg); transform-origin: top center;"
      />
      <div
        class="absolute w-[1px] bg-white/30"
        style="height: 200%; top: -30%; right: 40%; transform: rotate(-32deg); transform-origin: top center;"
      />
      <div
        class="absolute w-[1px] bg-white/20"
        style="height: 200%; top: -30%; right: 60%; transform: rotate(-32deg); transform-origin: top center;"
      />
    </div>

    <div class="relative pl-[80px] pr-0">
      <div class="flex items-center gap-4">
        <!-- Left labels -->
        <div class="flex-shrink-0 flex flex-col items-start w-[217px] gap-2">
          <button
            class="flex items-center justify-center px-8 py-4 rounded-full transition-all"
            :class="activeTab === 'news' ? 'news-badge-pill' : ''"
            @click="activeTab = 'news'"
          >
            <span
              style="font-family: 'Noto Sans TC', sans-serif; font-size: 28px; font-weight: 400;"
              :style="{ color: activeTab === 'news' ? '#606060' : '#aeaeb2' }"
            >最新消息</span>
          </button>
          <button
            class="flex items-center justify-center px-8 py-4 rounded-full transition-all"
            :class="activeTab === 'press' ? 'news-badge-pill' : ''"
            @click="activeTab = 'press'"
          >
            <span
              style="font-family: 'Noto Sans TC', sans-serif; font-size: 28px; font-weight: 400;"
              :style="{ color: activeTab === 'press' ? '#606060' : '#aeaeb2' }"
            >新聞報導</span>
          </button>
        </div>

        <!-- Scrollable news cards -->
        <div class="flex-1 overflow-x-auto pt-4 pb-4 scrollbar-hide">
          <div class="flex gap-4" style="min-width: max-content;">
            <a
              v-for="news in activeItems"
              :key="news.id"
              :href="news.url || '#'"
              :target="news.url ? '_blank' : undefined"
              :rel="news.url ? 'noopener noreferrer' : undefined"
              class="news-card rounded-[20px] w-[485px] h-[190px] flex-shrink-0 cursor-pointer transition-all hover:-translate-y-1 relative block no-underline rotate-[2deg]"
            >
              <!-- Card content -->
              <div class="absolute left-[32px] top-[63px] w-[329px] flex flex-col gap-1">
                <span
                  class="text-[#aeaeb2]"
                  style="font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: 500; letter-spacing: 2.4px;"
                >{{ news.date }}</span>
                <p
                  class="text-[#3e3e3e] font-black"
                  style="font-family: 'Noto Sans TC', sans-serif; font-size: 16px; letter-spacing: 2.4px;"
                >{{ news.title }}</p>
                <p
                  class="text-[#aeaeb2]"
                  style="font-family: 'Noto Sans TC', sans-serif; font-size: 12px; font-weight: 500; letter-spacing: 1.2px;"
                >{{ news.description }}</p>
              </div>
              <!-- New badge -->
              <div v-if="news.isNew" class="absolute right-[80px] top-[20px] flex flex-col items-center">
                <div class="new-badge rounded-[10px] w-[64px] h-[37px] flex items-center justify-center">
                  <span
                    class="text-white"
                    style="font-family: 'Outfit', sans-serif; font-size: 18px; font-weight: 600; letter-spacing: 0.72px;"
                  >New</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeTab = ref<'news' | 'press'>('news')

const newsItems = [
  { id: 1, date: '2026.03.15', isNew: true, title: '徵才月集點工具正式上線', description: '與職涯中心合作推出數位集點系統，參加徵才月活動即可累積點數兌換精美好禮！', url: null },
  { id: 2, date: '2026.02.20', isNew: true, title: 'Open NCCU 官網全新改版', description: '全新視覺設計搭配互動動畫，帶來更現代化的瀏覽體驗，快來看看我們的新面貌！', url: null },
  { id: 3, date: '2026.01.08', isNew: false, title: '2025 年度回顧：成長與展望', description: '回顧過去一年的成果，Open NCCU 服務累計超過 15,000 次使用，感謝所有政大人的支持。', url: null },
  { id: 4, date: '2025.11.12', isNew: false, title: '「政大吃什麼」新增外送比價功能', description: '不只幫你決定吃什麼，現在還能比較各平台外送價格，幫你省荷包！', url: null },
]

const pressItems = [
  { id: 101, date: '2024.08.30', isNew: false, title: '學生自發打造 OPEN NCCU APP　創造政大人專屬的數位體驗', description: '廣電系學生范愷祐領導的 Open NCCU 團隊，開發專為政大學生設計的應用程式，已累積 4,530 名用戶。', url: 'https://www.nccu.edu.tw/p/406-1000-17528,r17.php?Lang=zh-tw' },
  { id: 102, date: '2024.01.01', isNew: false, title: 'Dcard — Open NCCU 相關討論', description: '政大學生在 Dcard 上討論 Open NCCU 的使用心得與功能建議。', url: 'https://www.dcard.tw/f/nccu/p/260990796' },
]

const activeItems = computed(() =>
  activeTab.value === 'news' ? newsItems : pressItems
)
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

.news-badge-pill {
  border: 1.5px solid #cccccc;
  background: transparent;
}

.news-card {
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.7) 20%, rgba(255, 255, 255, 0) 89%);
  border: 3.4px solid rgba(255, 255, 255, 0.8);
  box-shadow: -17px 21px 52px 0px rgba(42, 80, 121, 0.1);
}

.news-card:hover {
  box-shadow: -17px 21px 52px 0px rgba(42, 80, 121, 0.15);
  transform: translateY(-2px);
}

.new-badge {
  background: linear-gradient(162deg, rgb(148, 204, 185) 5%, rgb(63, 164, 182) 95%);
  backdrop-filter: blur(10.5px);
  box-shadow:
    -4px -4px 12px 0px rgba(182, 182, 182, 0.25),
    6px 12px 45px -22px #999,
    7px 6px 7px -6px rgba(0, 0, 0, 0.11);
}
</style>
