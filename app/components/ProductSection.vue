<template>
  <section id="products" class="py-24 relative overflow-hidden bg-[#f0f0f0]">
    <div class="max-w-6xl mx-auto px-6 relative">
      <!-- Title -->
      <h2
        class="text-center mb-4"
        style="font-family: 'Noto Sans TC', sans-serif; font-size: 80px; font-weight: 300; color: #606060;"
      >
        我們打造了⋯
      </h2>

      <!-- Watermark text -->
      <div class="relative mt-16">
        <!-- OPEN NCCU watermark (top right) -->
        <div
          class="absolute right-0 -top-4 leading-none select-none tracking-tight text-right"
          style="font-family: 'Montserrat', sans-serif; font-size: 108px; font-weight: 700; color: #e8e8e8;"
        >
          OPEN<br />NCCU
        </div>
        <!-- WEB APP watermark (bottom left) -->
        <div
          class="absolute left-0 bottom-4 leading-none select-none tracking-tight"
          style="font-family: 'Montserrat', sans-serif; font-size: 108px; font-weight: 700; color: #e8e8e8;"
        >
          WEB<br />APP
        </div>

        <!-- Phone mockups center -->
        <div class="flex justify-center items-end gap-6 h-[520px] relative z-10">

          <!-- Floating marbles around phones -->
          <div class="absolute left-16 top-8 z-20"
            :style="{ transform: `translateY(${-scrollY * 0.06}px) rotate(${scrollY * 0.4}deg)` }">
            <MarbleBall :size="65" :rotation="scrollY * 0.6" variant="sage" />
          </div>

          <div class="absolute left-36 bottom-20 z-20"
            :style="{ transform: `translateY(${scrollY * 0.04}px)` }">
            <!-- Weather marble -->
            <div class="w-20 h-20 rounded-full bg-white/60 backdrop-blur-sm border border-white/70 flex flex-col items-center justify-center shadow-xl">
              <span class="text-2xl">⛅</span>
              <span class="text-xs text-[#4ECBA5] font-bold mt-0.5">20°</span>
            </div>
          </div>

          <div class="absolute right-12 top-16 z-20"
            :style="{ transform: `translateY(${-scrollY * 0.08}px)` }">
            <MarbleBall :size="80" :rotation="scrollY * -0.7" variant="teal" />
          </div>

          <div class="absolute right-32 bottom-16 z-20"
            :style="{ transform: `translateY(${scrollY * 0.05}px)` }">
            <MarbleBall :size="50" :rotation="scrollY * 0.9" variant="mint" />
          </div>

          <!-- Phone 1 (back, slightly tilted) -->
          <div class="relative z-10" :style="{ transform: `translateY(${-scrollY * 0.02}px) rotate(-6deg)` }">
            <div class="w-52 h-[420px] bg-white rounded-[2.5rem] shadow-2xl border-4 border-gray-200 overflow-hidden relative">
              <div class="absolute top-0 left-0 right-0 z-10">
                <div class="mx-auto w-24 h-6 bg-gray-200 rounded-b-2xl"></div>
              </div>
              <div class="h-full bg-gradient-to-b from-gray-50 to-white pt-8 px-3 pb-3">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-5 h-5 rounded-md bg-[#4ECBA5]/30"></div>
                  <span class="text-[10px] text-[#4ECBA5] font-bold">Open NCCU</span>
                </div>
                <div class="h-4 bg-gray-100 rounded mb-1 w-3/4"></div>
                <div class="h-3 bg-gray-100 rounded mb-3 w-1/2"></div>
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
            <div class="w-56 h-[460px] bg-white rounded-[2.5rem] shadow-2xl border-4 border-gray-200 overflow-hidden relative">
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
        <div class="flex justify-center mt-10">
          <div class="bg-white/40 backdrop-blur-sm border border-white/50 rounded-full px-6 py-2 flex items-center gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aeaeb2" stroke-width="2">
              <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3"/>
            </svg>
            <span class="text-xs text-[#aeaeb2]">左右滑動探索更多</span>
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
