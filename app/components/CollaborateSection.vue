<template>
  <section id="collaborate" class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-16">與我們合作</h2>

      <!-- Collaboration cards -->
      <div class="space-y-8">
        <!-- 徵才月 card -->
        <div class="glass-card overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
            <!-- Left content -->
            <div class="p-10">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-2 h-2 rounded-full bg-[#4ECBA5]"></div>
                <div class="w-2 h-2 rounded-full bg-gray-200"></div>
                <div class="w-2 h-2 rounded-full bg-gray-200"></div>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">徵才月</h3>
              <p class="text-gray-500 leading-relaxed text-sm mb-8">
                服務宣傳中，提供 OpenNCCU 合作彈性的「徵才月」合作架構，讓學生社群紀錄和宣傳更好進行，達到學生廣泛家知和高流量達到貴單位的招募目的。
              </p>
              <button class="mint-btn flex items-center gap-2">
                了解更多
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            <!-- Right phone mockup -->
            <div class="bg-gradient-to-br from-mint-50 to-[#4ECBA5]/10 p-8 flex items-center justify-center relative">
              <div class="w-48 h-80 bg-white rounded-[2rem] shadow-xl border-4 border-gray-100 overflow-hidden">
                <div class="mx-auto w-20 h-5 bg-gray-100 rounded-b-2xl"></div>
                <div class="p-3">
                  <!-- App header -->
                  <div class="bg-[#4ECBA5]/15 rounded-xl p-3 mb-3">
                    <div class="text-xs font-bold text-[#4ECBA5] mb-1">OpenNCCU</div>
                    <div class="text-xs text-gray-500">徵才月活動</div>
                  </div>
                  <!-- Colorful card mockup -->
                  <div class="bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300 rounded-xl p-4 mb-3">
                    <div class="text-white text-xs font-bold text-center mb-2">2026 NCCU CAREER MONTH</div>
                    <div class="text-white text-lg font-black text-center">政大徵才月</div>
                    <div class="grid grid-cols-4 gap-1 mt-3">
                      <div v-for="i in 4" :key="i" class="bg-white/20 rounded text-center py-1.5 text-white text-xs font-bold">
                        {{ [15, 20, 50, ''][i-1] }}
                      </div>
                    </div>
                  </div>
                  <!-- Stats row -->
                  <div class="grid grid-cols-4 gap-1">
                    <div v-for="n in [6,7,9,10]" :key="n" class="bg-gray-50 rounded text-center py-2 text-xs font-semibold text-gray-600">{{ n }}</div>
                  </div>
                </div>
              </div>

              <!-- Prev/Next arrows -->
              <button class="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 glass-card rounded-full flex items-center justify-center text-gray-500 hover:text-[#4ECBA5]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
