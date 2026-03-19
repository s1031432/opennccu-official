<template>
  <section id="products" class="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4ECBA5]/5 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-6xl mx-auto px-6 relative">
      <!-- Title -->
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-4">我們打造了<span class="text-[#4ECBA5]">…</span></h2>

      <!-- Watermark text -->
      <div class="relative mt-20">
        <!-- WEB APP text -->
        <div class="absolute left-0 top-1/2 -translate-y-1/2 text-[80px] font-black text-gray-100 leading-none select-none tracking-tighter">
          WEB<br/>APP
        </div>
        <!-- OPEN NCCU text -->
        <div class="absolute right-0 top-1/2 -translate-y-1/2 text-[60px] font-black text-gray-100 leading-none text-right select-none tracking-tighter">
          OPEN<br/>NCCU
        </div>

        <!-- Phone mockups center -->
        <div class="flex justify-center items-end gap-6 h-[480px] relative z-10">

          <!-- Floating marbles around phones -->
          <div class="absolute left-20 top-10 z-20"
            :style="{ transform: `translateY(${-scrollY * 0.06}px) rotate(${scrollY * 0.4}deg)` }">
            <MarbleBall :size="65" :rotation="scrollY * 0.6" variant="sage" />
          </div>

          <div class="absolute left-40 bottom-16 z-20"
            :style="{ transform: `translateY(${scrollY * 0.04}px)` }">
            <!-- Weather marble - special card style -->
            <div class="w-20 h-20 rounded-full glass-card flex flex-col items-center justify-center shadow-xl">
              <span class="text-2xl">⛅</span>
              <span class="text-xs text-[#4ECBA5] font-bold mt-0.5">20°</span>
            </div>
          </div>

          <div class="absolute right-16 top-20 z-20"
            :style="{ transform: `translateY(${-scrollY * 0.08}px)` }">
            <MarbleBall :size="80" :rotation="scrollY * -0.7" variant="teal" />
          </div>

          <div class="absolute right-36 bottom-12 z-20"
            :style="{ transform: `translateY(${scrollY * 0.05}px)` }">
            <MarbleBall :size="50" :rotation="scrollY * 0.9" variant="mint" />
          </div>

          <!-- Phone 1 (back, slightly tilted) -->
          <div class="relative z-10" :style="{ transform: `translateY(${-scrollY * 0.02}px) rotate(-6deg)` }">
            <div class="w-48 h-96 bg-white rounded-[2.5rem] shadow-2xl border-4 border-gray-200 overflow-hidden relative">
              <!-- Phone notch -->
              <div class="absolute top-0 left-0 right-0 z-10">
                <div class="mx-auto w-24 h-6 bg-gray-200 rounded-b-2xl"></div>
              </div>
              <!-- Phone screen content -->
              <div class="h-full bg-gradient-to-b from-gray-50 to-white pt-8 px-3 pb-3">
                <div class="h-8 bg-[#4ECBA5]/20 rounded-lg mb-2"></div>
                <div class="h-4 bg-gray-100 rounded mb-1 w-3/4"></div>
                <div class="h-4 bg-gray-100 rounded mb-3 w-1/2"></div>
                <div class="space-y-2">
                  <div v-for="i in 6" :key="i" class="h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center px-3 gap-2">
                    <div class="w-6 h-6 rounded-full bg-[#4ECBA5]/30"></div>
                    <div class="flex-1">
                      <div class="h-2 bg-gray-200 rounded w-3/4 mb-1"></div>
                      <div class="h-1.5 bg-gray-100 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Phone 2 (front, slightly tilted other way) -->
          <div class="relative z-20" :style="{ transform: `translateY(${scrollY * 0.015}px) rotate(4deg)` }">
            <div class="w-52 h-[420px] bg-white rounded-[2.5rem] shadow-2xl border-4 border-gray-200 overflow-hidden relative">
              <div class="absolute top-0 left-0 right-0 z-10">
                <div class="mx-auto w-24 h-6 bg-gray-200 rounded-b-2xl"></div>
              </div>
              <div class="h-full bg-gradient-to-b from-[#4ECBA5]/10 to-white pt-8 px-3 pb-3">
                <!-- Weather widget -->
                <div class="bg-gradient-to-br from-[#4ECBA5] to-[#2EA87E] rounded-2xl p-4 mb-3 text-white">
                  <div class="flex items-end justify-between">
                    <div>
                      <div class="text-3xl font-bold">20°</div>
                      <div class="text-xs opacity-80 mt-1">政治大學</div>
                    </div>
                    <span class="text-3xl">🌤</span>
                  </div>
                </div>
                <!-- Course cards -->
                <div class="space-y-2">
                  <div v-for="i in 4" :key="i" class="h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center px-3 gap-2">
                    <div class="w-2 h-8 rounded-full" :class="['bg-[#4ECBA5]', 'bg-blue-300', 'bg-purple-300', 'bg-amber-300'][i-1]"></div>
                    <div class="flex-1">
                      <div class="h-2.5 bg-gray-200 rounded w-3/4 mb-1.5"></div>
                      <div class="h-1.5 bg-gray-100 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Drag indicator -->
        <div class="flex justify-center mt-12">
          <div class="glass-card px-6 py-2 flex items-center gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ECBA5" stroke-width="2">
              <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3"/>
            </svg>
            <span class="text-xs text-gray-400">左右滑動探索更多</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  scrollY: number
}>()
</script>
