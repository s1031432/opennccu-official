<template>
  <section id="collaborate" class="relative py-24 bg-[#f0f0f0] overflow-hidden">
    <!-- Subtle diagonal decorative lines -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute w-[1px] bg-white/40"
        style="height: 200%; top: -30%; left: 35%; transform: rotate(-32deg); transform-origin: top center;"
      />
      <div
        class="absolute w-[1px] bg-white/30"
        style="height: 200%; top: -20%; left: 55%; transform: rotate(-32deg); transform-origin: top center;"
      />
    </div>

    <div class="relative max-w-6xl mx-auto px-6">
      <!-- Section title -->
      <h2
        class="text-center mb-16"
        style="font-family: 'Noto Sans TC', sans-serif; font-size: 80px; font-weight: 300; color: #606060;"
      >
        與我們合作
      </h2>

      <!-- Collaboration showcase card -->
      <div class="bg-white/50 backdrop-blur-sm border border-white/60 rounded-3xl overflow-hidden shadow-sm mb-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <!-- Left: text content -->
          <div class="lg:col-span-3 p-10 flex flex-col justify-center">
            <h3
              class="text-3xl font-light text-[#606060] mb-5"
              style="font-family: 'Noto Sans TC', sans-serif;"
            >
              徵才月
            </h3>
            <p
              class="text-sm text-[#aeaeb2] leading-relaxed mb-8"
              style="font-family: 'Noto Sans TC', sans-serif;"
            >
              職涯中心與 OpenNCCU 合作推出的「數位集點工具」，將學生的參與紀錄與問卷回饋集中化管理，協助學生隨時掌握積點進度與線上兌獎，獲得更直覺的抽獎參與體驗。
            </p>
            <a
              href="#"
              class="inline-flex items-center gap-2 bg-[#4ECBA5] text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-[#3AB890] transition-colors w-fit"
            >
              了解更多
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>

          <!-- Center: phone mockup -->
          <div class="lg:col-span-4 flex items-center justify-center py-8 relative">
            <div class="w-52 h-[400px] bg-white rounded-[2.5rem] shadow-2xl border-4 border-gray-100 overflow-hidden relative">
              <div class="absolute top-0 left-0 right-0 z-10">
                <div class="mx-auto w-20 h-5 bg-gray-100 rounded-b-2xl"></div>
              </div>
              <div class="h-full bg-gradient-to-b from-white to-gray-50 pt-8 px-3 pb-3">
                <!-- App header -->
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-5 h-5 rounded-md bg-[#4ECBA5]/30"></div>
                  <span class="text-[10px] text-[#4ECBA5] font-bold">Open NCCU</span>
                </div>
                <!-- Points display -->
                <div class="bg-[#4ECBA5]/10 rounded-xl p-3 mb-3">
                  <div class="text-[10px] text-[#606060] mb-1">徵才月禮品兌可兌換數量</div>
                  <div class="flex items-center gap-2">
                    <span class="text-[10px] text-[#4ECBA5] font-bold">目前 3 次</span>
                  </div>
                  <div class="flex gap-2 mt-2">
                    <div v-for="n in [15, 20, 50]" :key="n" class="flex-1 bg-white rounded-lg py-2 text-center text-xs font-bold text-[#606060] shadow-sm">
                      {{ n }}
                    </div>
                  </div>
                </div>
                <!-- Stamp collection area -->
                <div class="bg-gray-50 rounded-xl p-3 mb-3">
                  <div class="text-[9px] text-[#aeaeb2] mb-2">新任集點專區</div>
                  <div class="grid grid-cols-5 gap-1">
                    <div v-for="i in 10" :key="i" class="aspect-square bg-white rounded-md shadow-sm flex items-center justify-center">
                      <span class="text-[8px] text-[#aeaeb2]">{{ i }}</span>
                    </div>
                  </div>
                </div>
                <!-- QR code area -->
                <div class="bg-white rounded-xl p-2 border border-gray-100 flex items-center gap-2">
                  <div class="w-12 h-12 bg-gray-100 rounded-lg"></div>
                  <div class="flex-1">
                    <div class="text-[8px] text-[#aeaeb2]">PassO</div>
                    <div class="text-[8px] text-[#4ECBA5] font-medium">Open NCCU</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: career month card with carousel -->
          <div class="lg:col-span-5 flex items-center justify-center py-8 relative">
            <div class="w-full max-w-sm">
              <!-- Career month card -->
              <div class="rounded-2xl overflow-hidden shadow-lg relative">
                <div class="bg-gradient-to-br from-purple-300 via-pink-200 to-orange-200 p-8">
                  <div class="text-xs text-white/80 font-medium mb-2" style="font-family: 'Montserrat', sans-serif;">
                    2026 NCCU CAREER MONTH
                  </div>
                  <h4
                    class="text-3xl font-black text-white mb-2"
                    style="font-family: 'Noto Sans TC', sans-serif;"
                  >
                    政大徵才月
                  </h4>
                  <div class="text-xs text-white/70" style="font-family: 'Montserrat', sans-serif;">
                    ( in motion, we find direction. )
                  </div>
                  <!-- Stamp card -->
                  <div class="mt-4 bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <div class="text-[10px] text-white/80 mb-2">徵才月系列活動集點點卡</div>
                    <div class="text-[9px] text-white/60 mb-2">EXP Date : 27 Mar 2026</div>
                    <div class="grid grid-cols-5 gap-1.5">
                      <div v-for="i in 10" :key="i" class="aspect-square bg-white/30 rounded-md flex items-center justify-center">
                        <span class="text-[10px] text-white font-bold">{{ i <= 4 ? i : '' }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Carousel arrow -->
            <button class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/60 backdrop-blur-sm border border-white/70 rounded-full flex items-center justify-center text-[#606060] hover:text-[#4ECBA5] shadow-sm transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Stats row -->
      <div class="flex justify-center gap-20 mb-16">
        <div class="text-center">
          <p
            class="text-[#606060] mb-2"
            style="font-family: 'Noto Sans TC', sans-serif; font-size: 28px; font-weight: 300;"
          >
            當日活躍使用者
          </p>
          <p
            class="text-[#4ECBA5]"
            style="font-family: 'Montserrat', sans-serif; font-size: 48px; font-weight: 600;"
          >
            3,500+
          </p>
        </div>
        <div class="text-center">
          <p
            class="text-[#606060] mb-2"
            style="font-family: 'Noto Sans TC', sans-serif; font-size: 28px; font-weight: 300;"
          >
            使用次數
          </p>
          <p
            class="text-[#4ECBA5]"
            style="font-family: 'Montserrat', sans-serif; font-size: 48px; font-weight: 600;"
          >
            15,000+
          </p>
        </div>
      </div>

      <!-- Partners -->
      <div class="text-center">
        <h3
          class="text-[#606060] mb-10"
          style="font-family: 'Noto Sans TC', sans-serif; font-size: 28px; font-weight: 400;"
        >
          合作夥伴
        </h3>
        <div class="flex justify-center items-center gap-8 flex-wrap">
          <div
            v-for="i in 6"
            :key="i"
            class="w-16 h-16 rounded-full bg-[#d9d9d9]/50 border border-white/60 flex items-center justify-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#aeaeb2" stroke-width="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8M12 8v8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
