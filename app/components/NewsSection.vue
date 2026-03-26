<template>
  <section class="relative pt-6 md:pt-[24px] pb-32 md:pb-[240px] overflow-hidden">
    <!-- Decorative elements removed — now handled by BackgroundCurve -->

    <div class="relative px-4 md:pl-[80px] md:pr-0">
      <div class="flex flex-col md:flex-row md:items-center gap-4">
        <!-- Left labels -->
        <div class="flex-shrink-0 flex flex-row md:flex-col items-start md:w-[271px] gap-[8px]">
          <!-- Figma API: Tab instance 271×191px. Each label area is 217×80px with text centered.
               Indicator pill cr=200, gap between labels = 1581.5-1573.5 = 8px — DO NOT SHRINK below 217×80px -->
          <button
            class="flex items-center justify-center w-[140px] md:w-[217px] h-[50px] md:h-[80px] rounded-[200px] transition-all"
            :class="activeTab === 'news' ? 'news-badge-pill' : ''"
            @click="activeTab = 'news'"
          >
            <span
              class="text-lg md:text-[28px]"
              :style="{
                fontFamily: '\'Noto Sans TC\', sans-serif',
                fontWeight: 400,
                letterSpacing: '1.12px',
                lineHeight: '42px',
                color: activeTab === 'news' ? '#616161' : '#aeaeb2',
              }"
            >最新消息</span>
          </button>
          <button
            class="flex items-center justify-center w-[140px] md:w-[217px] h-[50px] md:h-[80px] rounded-[200px] transition-all"
            :class="activeTab === 'press' ? 'news-badge-pill' : ''"
            @click="activeTab = 'press'"
          >
            <span
              class="text-lg md:text-[28px]"
              :style="{
                fontFamily: '\'Noto Sans TC\', sans-serif',
                fontWeight: 400,
                letterSpacing: '1.12px',
                lineHeight: '42px',
                color: activeTab === 'press' ? '#616161' : '#aeaeb2',
              }"
            >新聞報導</span>
          </button>
        </div>

        <!-- Scrollable news cards -->
        <div class="flex-1 overflow-x-auto pt-4 md:pt-6 pb-4 scrollbar-hide overflow-y-visible">
          <div class="flex gap-4 md:gap-[16px]" style="min-width: max-content;">
            <a
              v-for="news in activeItems"
              :key="news.id"
              :href="news.url || '#'"
              :target="news.url ? '_blank' : undefined"
              :rel="news.url ? 'noopener noreferrer' : undefined"
              class="news-card rounded-[16px] md:rounded-[20px] w-[300px] md:w-[420px] lg:w-[485px] h-[160px] md:h-[190px] flex-shrink-0 cursor-pointer transition-all relative block no-underline"
            >
              <!-- New badge — Figma: Label frame at right=16px, top=16px from card; New badge at 4px padding inside Label = top 20px from card -->
              <div v-if="news.isNew" class="absolute right-3 md:right-[16px] top-3 md:top-[20px]">
                <div class="new-badge rounded-[10px] w-[52px] md:w-[64px] h-[30px] md:h-[37px] flex items-center justify-center">
                  <!-- Figma API: "New" Outfit 18px weight600 ls0.72 — DO NOT SHRINK -->
                  <span
                    class="text-white"
                    style="font-family: 'Outfit', sans-serif; font-size: 18px; font-weight: 600; letter-spacing: 0.72px;"
                  >New</span>
                </div>
              </div>
              <!-- Card content -->
              <div class="absolute left-4 md:left-[32px] top-1/2 -translate-y-1/2 w-[220px] md:w-[300px] lg:w-[329px] flex flex-col gap-1">
                <!-- Figma API: date Outfit 16px w500 #aeaeb2 ls2.4 lh20.16 -->
                <span
                  class="text-[#aeaeb2]"
                  style="font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: 500; letter-spacing: 2.4px; line-height: 20.16px;"
                >{{ news.date }}</span>
                <!-- Figma API: title Noto Sans 16px w900 #3d3d3d ls2.4 lh21.8 -->
                <p
                  class="text-[#3d3d3d] line-clamp-1"
                  style="font-family: 'Noto Sans', 'Noto Sans TC', sans-serif; font-size: 16px; font-weight: 900; letter-spacing: 2.4px; line-height: 21.8px;"
                >{{ news.title }}</p>
                <!-- Figma API: desc Noto Sans TC 12px w500 #aeaeb2 ls1.2 lh14.4 -->
                <p
                  class="text-[#aeaeb2] mt-1 line-clamp-2"
                  style="font-family: 'Noto Sans TC', sans-serif; font-size: 12px; font-weight: 500; letter-spacing: 1.2px; line-height: 14.4px;"
                >{{ news.description }}</p>
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
  { id: 103, date: '2025.09.15', isNew: false, title: 'Open NCCU 累計用戶突破 4,500 人', description: 'Open NCCU 服務累計使用者突破 4,500 人，涵蓋課表查詢、校園美食推薦等多項實用功能。', url: null },
]

const activeItems = computed(() =>
  activeTab.value === 'news' ? newsItems : pressItems
)
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

/* Figma API: Indicator 217×80px, cr=200, gradient fill white→white 1%,
   DROP_SHADOW(3,3,7.5px black 36%) + DROP_SHADOW(-3,-3,3.6px white 90%),
   INNER_SHADOW(1,1,20.6px black 6%) + INNER_SHADOW(-3,-3,9.7px white 100%) — NO spread in Figma */
.news-badge-pill {
  background: linear-gradient(145deg, rgba(255,255,255,1) 1%, rgba(255,255,255,0.01) 100%);
  border-radius: 200px;
  box-shadow:
    3px 3px 7.5px rgba(0, 0, 0, 0.36),
    -3px -3px 3.6px rgba(255, 255, 255, 0.9),
    inset 1px 1px 20.6px rgba(0, 0, 0, 0.06),
    inset -3px -3px 9.7px rgba(255, 255, 255, 1);
}

/* Figma API: Card 485×190 cr=20, gradient fill white→transparent,
   DROP_SHADOW: (-17,21,52px rgba(42,80,121,0.1)) */
.news-card {
  background: linear-gradient(155deg, rgba(255,255,255,1) 0.6%, rgba(255,255,255,0) 100%);
  border: none;
  box-shadow: -16.9px 21.4px 51.9px rgba(42, 80, 121, 0.1);
}

.news-card:hover {
  box-shadow: -16.9px 21.4px 51.9px rgba(42, 80, 121, 0.14);
  transform: rotate(-2deg) translateY(-2px);
}

@media (max-width: 767px) {
  .news-card:hover {
    transform: translateY(-2px);
  }
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
