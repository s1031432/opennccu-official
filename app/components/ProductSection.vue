<template>
  <section id="products" class="py-24 relative overflow-hidden">
    <!-- Decorative organic curves -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute w-[2px] bg-[#c8ede0]/60"
        style="height: 300%; top: -50%; left: 55%; transform: rotate(-15deg); transform-origin: top center;"
      />
      <div
        class="absolute w-[2px] bg-[#c8ede0]/40"
        style="height: 250%; top: -30%; left: 50%; transform: rotate(-20deg); transform-origin: top center;"
      />
      <!-- Ellipse dots -->
      <div class="absolute w-[26px] h-[26px] rounded-full bg-[#c8ede0]/60 left-[26%] top-[15%]" />
      <div class="absolute w-[26px] h-[26px] rounded-full bg-[#c8ede0]/60 right-[15%] top-[55%]" />
      <div class="absolute w-[26px] h-[26px] rounded-full bg-[#c8ede0]/60 left-[56%] top-[70%]" />
    </div>

    <div class="max-w-6xl mx-auto px-6 relative">
      <!-- Title -->
      <h2
        class="text-center mb-4"
        style="font-family: 'Noto Sans TC', sans-serif; font-size: 80px; font-weight: 300; color: #606060; letter-spacing: 9.6px;"
      >
        我們打造了⋯
      </h2>

      <!-- Watermark text + phone mockups -->
      <div class="relative mt-16">
        <!-- OPEN NCCU watermark (top right) - neumorphic emboss -->
        <div class="absolute right-0 -top-4 leading-none select-none tracking-wide text-right">
          <span class="watermark-text">OPEN</span>
          <br />
          <span class="watermark-text">NCCU</span>
        </div>
        <!-- WEB APP watermark (bottom left) - neumorphic emboss -->
        <div class="absolute left-0 bottom-16 leading-none select-none tracking-wide">
          <span class="watermark-text">WEB</span>
          <br />
          <span class="watermark-text">APP</span>
        </div>

        <!-- Phone mockups center -->
        <div class="flex justify-center items-end gap-6 h-[520px] relative z-10">
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

          <!-- CTA Circle Button (between phones) -->
          <div class="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 z-30">
            <div class="cta-circle w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
              <Icon icon="gis:arrow" class="text-[#81edb9] w-6 h-6" />
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

        <!-- Glass balls (decorative) -->
        <div class="hidden md:block">
          <!-- Top left glass ball (card preview) -->
          <div class="glass-ball absolute -left-4 top-4 w-[240px] h-[240px]">
            <div class="glass-ball-inner rounded-full w-full h-full flex items-center justify-center overflow-hidden">
              <div class="w-[160px] h-[120px] bg-white/40 backdrop-blur-sm rounded-xl border border-[#77d1a6]/40 p-3 rotate-[11deg] shadow-lg">
                <div class="flex items-center gap-1.5 mb-2">
                  <div class="w-3 h-3 rounded bg-[#4ECBA5]/40"></div>
                  <span class="text-[7px] text-[#4ECBA5] font-bold">Open NCCU</span>
                </div>
                <div class="text-[8px] text-[#787878] font-bold mb-0.5">我是政大人</div>
                <div class="text-[6px] text-[#787878]">XXX 系</div>
                <div class="text-[6px] text-[#616161] mt-1">@iamfrom_nccu</div>
              </div>
            </div>
          </div>

          <!-- Top right glass ball (weather) -->
          <div class="glass-ball absolute -right-4 top-[40%] w-[200px] h-[200px]">
            <div class="glass-ball-inner rounded-full w-full h-full flex items-center justify-center overflow-hidden">
              <div class="rotate-[11deg] text-center">
                <span class="text-3xl">🌧</span>
                <div class="text-xs text-gray-400 mt-1">☁️ 🌤</div>
              </div>
            </div>
          </div>

          <!-- Bottom right glass ball (mahjong) -->
          <div class="glass-ball absolute right-[15%] -bottom-4 w-[200px] h-[200px]">
            <div class="glass-ball-inner rounded-full w-full h-full flex items-center justify-center overflow-hidden">
              <span class="text-4xl rotate-[-14deg]">🀄</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  scrollY: number
}>()
</script>

<style scoped>
.watermark-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 108px;
  font-weight: 700;
  color: #f0f0f0;
  text-shadow:
    4px 4px 8px rgba(0, 0, 0, 0.16),
    -5px -5px 8px white;
  letter-spacing: 9.72px;
}

.cta-circle {
  background: rgba(255, 255, 255, 0.32);
  border: 1px solid #81edb9;
}

.glass-ball {
  filter: drop-shadow(0px 4px 60px rgba(169, 255, 214, 0.3));
}

.glass-ball-inner {
  background: radial-gradient(
    ellipse at 30% 30%,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(200, 237, 224, 0.3) 40%,
    rgba(169, 255, 214, 0.15) 70%,
    rgba(200, 237, 224, 0.05) 100%
  );
  box-shadow:
    0px 4px 250px 0px rgba(169, 255, 214, 0.3),
    31px 30px 200px 0px rgba(112, 175, 144, 0.4),
    inset -10px -10px 30px rgba(255, 255, 255, 0.3),
    inset 5px 5px 20px rgba(200, 237, 224, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

@media (max-width: 768px) {
  .watermark-text {
    font-size: 56px;
  }
}
</style>
