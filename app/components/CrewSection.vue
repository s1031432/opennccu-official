<template>
  <section class="relative py-24 overflow-hidden min-h-screen">
    <div class="max-w-6xl mx-auto px-6 relative">
      <!-- Top area: title + glass cards -->
      <div class="flex flex-col lg:flex-row items-start gap-12 mb-24">
        <!-- Left side: decorative curve + title -->
        <div class="lg:w-1/2 relative">
          <h2
            class="relative z-10 mb-12 pl-16 pt-16"
            style="font-family: 'Noto Sans TC', sans-serif; font-size: 80px; font-weight: 300; color: #606060;"
          >
            團隊成員
          </h2>
        </div>

        <!-- Right side: stacked glass cards -->
        <div class="lg:w-1/2 flex justify-center items-center pt-8">
          <div class="relative w-[280px] h-[280px]">
            <!-- Card 3 (back) -->
            <div
              class="absolute w-[260px] h-[260px] rounded-2xl border border-white/60 shadow-lg"
              style="background: linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1)); backdrop-filter: blur(12px); top: 0; left: 40px; transform: rotate(8deg);"
            >
              <span
                class="absolute bottom-8 left-8 text-2xl tracking-widest"
                style="font-family: 'Montserrat', sans-serif; font-weight: 300; color: #aeaeb2;"
              >
                OPEN<br />NCCU
              </span>
            </div>
            <!-- Card 2 (middle) -->
            <div
              class="absolute w-[260px] h-[260px] rounded-2xl border border-white/60 shadow-lg"
              style="background: linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.15)); backdrop-filter: blur(12px); top: 10px; left: 20px; transform: rotate(4deg);"
            />
            <!-- Card 1 (front) - glass morphism with gradient -->
            <div
              class="absolute w-[260px] h-[260px] rounded-2xl border border-white/60 shadow-xl overflow-hidden"
              style="background: linear-gradient(135deg, rgba(78,203,165,0.15), rgba(120,180,220,0.1), rgba(255,255,255,0.3)); backdrop-filter: blur(16px); top: 20px; left: 0;"
            >
              <span
                class="absolute bottom-8 left-8 text-2xl tracking-widest"
                style="font-family: 'Montserrat', sans-serif; font-weight: 300; color: #4ECBA5;"
              >
                OPEN<br />NCCU
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Team role cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div
          v-for="role in teamRoles"
          :key="role.name"
          class="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:shadow-lg transition-all"
        >
          <h3
            class="mb-3"
            style="font-family: 'Montserrat', sans-serif; font-size: 48px; font-weight: 300; color: #606060;"
          >
            {{ role.name }}
          </h3>
          <p
            class="leading-relaxed"
            style="font-family: 'Noto Sans TC', sans-serif; font-size: 20px; font-weight: 300; color: #aeaeb2;"
          >
            {{ role.description }}
          </p>
        </div>
      </div>

      <!-- Team members -->
      <div class="mb-20">
        <h3
          class="text-center mb-12"
          style="font-family: 'Noto Sans TC', sans-serif; font-size: 36px; font-weight: 300; color: #aeaeb2;"
        >
          核心成員
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="member in teamMembers"
            :key="member.name"
            class="group text-center"
          >
            <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br overflow-hidden border-2 border-white/60 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all flex items-center justify-center"
              :class="member.gradientClass"
            >
              <span
                class="text-2xl font-bold text-white"
                style="font-family: 'Montserrat', sans-serif;"
              >{{ member.initials }}</span>
            </div>
            <p
              class="font-medium text-[#606060] mb-1"
              style="font-family: 'Noto Sans TC', sans-serif; font-size: 16px;"
            >{{ member.name }}</p>
            <p
              class="text-[#aeaeb2]"
              style="font-family: 'Montserrat', sans-serif; font-size: 13px;"
            >{{ member.role }}</p>
          </div>
        </div>
      </div>

      <!-- JOIN US button placeholder (visual drawn in ScrollTrack SVG) -->
      <div id="join-us-btn" class="w-36 h-36 ml-4"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamRoles = [
  { name: 'LEAD', description: '組織領導者，統籌所有團隊運作與策略方向' },
  { name: 'PM', description: '專案經理，負責專案規劃、進度管理與協調溝通' },
  { name: 'Product Team', description: '產品團隊，從使用者需求出發，規劃與設計產品功能' },
  { name: 'UI', description: '介面設計師，打造美觀且易用的使用者介面' },
  { name: 'BE', description: '後端工程師，建構穩定可靠的系統架構與 API' },
  { name: 'Insight Team', description: '洞察團隊，透過數據分析與使用者研究驅動產品決策' },
  { name: 'MKT', description: '行銷團隊，負責品牌推廣、社群經營與內容產出' },
]

const teamMembers = [
  { name: '黃翊唐', role: 'Founder', initials: 'YT', gradientClass: 'from-[#FFD700] to-[#F5A623]' },
  { name: '范愷祐', role: 'LEAD', initials: 'KY', gradientClass: 'from-[#4ECBA5] to-[#2EA87E]' },
  { name: '林子晴', role: 'PM', initials: 'TQ', gradientClass: 'from-[#6CB4EE] to-[#4A90D9]' },
  { name: '陳柏翰', role: 'BE', initials: 'BH', gradientClass: 'from-[#7C6EDB] to-[#5B4FC7]' },
  { name: '王筱涵', role: 'UI', initials: 'XH', gradientClass: 'from-[#F2A7C3] to-[#D87BA0]' },
  { name: '張宇恆', role: 'BE', initials: 'YH', gradientClass: 'from-[#FFB366] to-[#E6913D]' },
  { name: '李佩璇', role: 'Product', initials: 'PX', gradientClass: 'from-[#7EDCBA] to-[#4ECBA5]' },
  { name: '吳承翰', role: 'Insight', initials: 'CH', gradientClass: 'from-[#A8B8D8] to-[#7A8FC4]' },
  { name: '黃思穎', role: 'MKT', initials: 'SY', gradientClass: 'from-[#F5C26B] to-[#E0A644]' },
]
</script>
