<template>
  <footer id="contact" class="relative z-20 bg-[#3d3d3d]/95 backdrop-blur-sm pt-16 pb-8">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Contact CTA -->
      <div class="text-center mb-16">
        <h2
          class="mb-4"
          style="font-family: 'Noto Sans TC', sans-serif; font-size: 36px; font-weight: 300; color: #ffffff;"
        >
          想與我們聯絡？
        </h2>
        <p
          class="mb-8 max-w-lg mx-auto"
          style="font-family: 'Noto Sans TC', sans-serif; font-size: 16px; font-weight: 300; color: rgba(255,255,255,0.6);"
        >
          無論是合作提案、功能建議，或是想加入我們的團隊，都歡迎透過以下方式聯繫！
        </p>
        <a
          href="mailto:opennccu@gmail.com"
          class="inline-flex items-center gap-2 bg-[#4ECBA5] text-white rounded-full px-8 py-3 text-base font-medium hover:bg-[#3AB890] transition-colors"
          style="font-family: 'Noto Sans TC', sans-serif;"
        >
          <Icon icon="mdi:email-outline" width="20" height="20" />
          寄信給我們
        </a>
      </div>

      <div class="w-full h-[1px] bg-white/10 mb-12"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Column 1: Logo & Copyright -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <img src="/logo.png" alt="Open NCCU Logo" class="w-10 h-10 object-contain" />
            <span class="text-xl font-semibold text-[#4ECBA5]" style="font-family: 'Montserrat', sans-serif;">
              Open NCCU
            </span>
          </div>
          <p class="text-sm text-white/50 mt-2" style="font-family: 'Noto Sans TC', sans-serif;">
            政大學生設計，設計給政大學生
          </p>
          <p class="text-sm text-[#f0f0f0] mt-1" style="font-family: 'Outfit', sans-serif;">
            &copy; 2026 Copyright. All Right Reserved.
          </p>
        </div>

        <!-- Column 2: Community -->
        <div>
          <h4 class="text-lg font-medium text-white mb-5 tracking-wide" style="font-family: 'Outfit', sans-serif;">
            COMMUNITY
          </h4>
          <div class="flex items-center gap-5 flex-wrap">
            <a v-for="s in social" :key="s.label" :href="s.href"
              target="_blank" rel="noopener noreferrer"
              class="text-white/70 hover:text-[#4ECBA5] transition-colors"
              :aria-label="s.label">
              <Icon :icon="s.icon" width="22" height="22" />
            </a>
          </div>
        </div>

        <!-- Column 3: Resource -->
        <div>
          <h4 class="text-lg font-medium text-white mb-5 tracking-wide" style="font-family: 'Outfit', sans-serif;">
            RESOURCE
          </h4>
          <div class="flex items-center gap-5">
            <a v-for="r in resources" :key="r.label" :href="r.href"
              target="_blank" rel="noopener noreferrer"
              class="text-white/70 hover:text-[#4ECBA5] transition-colors"
              :aria-label="r.label">
              <Icon :icon="r.icon" width="22" height="22" />
            </a>
          </div>
        </div>

        <!-- Column 4: Report -->
        <div>
          <h4 class="text-lg font-medium text-white mb-5 tracking-wide" style="font-family: 'Outfit', sans-serif;">
            REPORT
          </h4>
          <a href="mailto:opennccu@gmail.com"
            class="inline-flex items-center gap-2 border border-white/40 text-white/80 text-sm px-5 py-2.5 rounded-full hover:bg-white/10 hover:border-[#4ECBA5] hover:text-[#4ECBA5] transition-all"
            style="font-family: 'Noto Sans TC', sans-serif;">
            問題回報表單
            <Icon icon="lucide:arrow-up-right" width="14" height="14" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const social = [
  { label: 'Instagram', href: 'https://www.instagram.com/open_nccu/', icon: 'mdi:instagram' },
  { label: 'Threads',   href: 'https://www.threads.net/@open_nccu', icon: 'simple-icons:threads' },
  { label: 'Facebook',  href: 'https://www.facebook.com/opennccu', icon: 'mdi:facebook' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/opennccu', icon: 'mdi:linkedin' },
  { label: 'Discord',   href: 'https://discord.gg/opennccu', icon: 'ic:baseline-discord' },
  { label: 'Email',     href: 'mailto:opennccu@gmail.com', icon: 'mdi:email-outline' },
]

const resources = [
  { label: 'GitHub',        href: 'https://github.com/opennccu', icon: 'mdi:github' },
  { label: 'Documentation', href: 'https://docs.opennccu.com', icon: 'mdi:file-document-outline' },
]
</script>
