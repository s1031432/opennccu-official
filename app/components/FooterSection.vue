<template>
  <footer id="contact" class="relative z-20 bg-[#3d3d3d]">
    <!-- Figma: compact footer ~80-100px height, not tall 72px vertical padding -->
    <div class="max-w-7xl mx-auto px-16 py-7">
      <!-- Figma: columns have ~80-120px gaps, NOT 224px — DO NOT WIDEN -->
      <div class="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-[100px] justify-center">
        <!-- Logo & Copyright -->
        <div class="flex flex-col gap-2 shrink-0">
          <img src="/assets/logo-with-title.svg" alt="Open NCCU" class="h-[47px] w-auto object-contain object-left" />
          <!-- Figma API: 14px weight400 Outfit #f0f0f0 — DO NOT darken -->
          <p style="font-family: 'Outfit', sans-serif; font-size: 14px; color: #f0f0f0;">
            &copy; 2026 Copyright. All Right Reserved.
          </p>
        </div>

        <!-- Right side groups -->
        <div class="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-[120px]">
          <!-- Community -->
          <div class="flex flex-col gap-5">
            <!-- Figma API: 20px weight400 Outfit #ffffff, no letter-spacing — DO NOT SHRINK below 20px -->
            <h4 style="font-family: 'Outfit', sans-serif; font-size: 20px; font-weight: 400; color: #ffffff;">
              COMMUNITY
            </h4>
            <div class="flex items-center gap-5">
              <a v-for="s in social" :key="s.label" :href="s.href"
                target="_blank" rel="noopener noreferrer"
                class="text-white hover:text-[#4ECBA5] transition-colors"
                :aria-label="s.label">
                <Icon :icon="s.icon" width="22" height="22" />
              </a>
            </div>
          </div>

          <!-- Resource -->
          <div class="flex flex-col gap-5">
            <!-- Figma API: 20px weight400 Outfit #ffffff — DO NOT SHRINK -->
            <h4 style="font-family: 'Outfit', sans-serif; font-size: 20px; font-weight: 400; color: #ffffff;">
              RESOURCE
            </h4>
            <div class="flex items-center gap-5">
              <a v-for="r in resources" :key="r.label" :href="r.href"
                target="_blank" rel="noopener noreferrer"
                class="text-white hover:text-[#4ECBA5] transition-colors"
                :aria-label="r.label">
                <Icon :icon="r.icon" width="22" height="22" />
              </a>
            </div>
          </div>

          <!-- Report -->
          <div class="flex flex-col gap-5">
            <!-- Figma API: 20px weight400 Outfit #ffffff — DO NOT SHRINK -->
            <h4 style="font-family: 'Outfit', sans-serif; font-size: 20px; font-weight: 400; color: #ffffff;">
              REPORT
            </h4>
            <!-- Figma: WHITE-FILLED pill button with dark text (verified from footer.png) — DO NOT change to outlined -->
            <a href="https://forms.gle/Un57LxddqjVBgr8j7" target="_blank" rel="noopener noreferrer" class="report-btn inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 transition-all whitespace-nowrap bg-white hover:bg-gray-100">
              <!-- Figma API: 14px weight700 Noto Sans TC #3d3d3d -->
              <span style="font-family: 'Noto Sans TC', sans-serif; font-size: 14px; font-weight: 700; color: #3d3d3d;">
                問題回報表單
              </span>
              <Icon icon="tabler:arrow-up" width="16" height="16" class="text-[#3d3d3d] rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const social = [
  { label: 'Instagram', href: 'https://instagram.com/open.nccu', icon: 'mdi:instagram' },
  { label: 'Threads',   href: 'https://www.threads.com/@open.nccu', icon: 'mingcute:threads-line' },
  { label: 'Facebook',  href: 'https://www.facebook.com/open.nccu/', icon: 'ic:baseline-facebook' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/opennccu', icon: 'mdi:linkedin' },
  { label: 'Discord',   href: 'https://discord.com/invite/epArwHVmpk', icon: 'ic:baseline-discord' },
  { label: 'Email',     href: 'mailto:admin@opennccu.com', icon: 'material-symbols:mail-rounded' },
]

const resources = [
  { label: 'GitHub', href: 'https://github.com/opennccu', icon: 'mdi:github' },
  { label: 'News', href: 'https://docs.opennccu.com', icon: 'fluent:news-20-filled' },
]
</script>

<style scoped>
.report-btn {
  box-shadow: none;
}
</style>
