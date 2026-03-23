<template>
  <footer id="contact" class="relative z-20 bg-[#3d3d3d]">
    <div class="max-w-7xl mx-auto px-16 py-[72px]">
      <div class="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-[224px] justify-center">
        <!-- Logo & Copyright -->
        <div class="flex flex-col gap-2 shrink-0">
          <img src="/assets/logo-white.png" alt="Open NCCU" class="h-[47px] w-auto object-contain object-left" />
          <p style="font-family: 'Outfit', sans-serif; font-size: 14px; color: #f0f0f0;">
            &copy; 2026 Copyright. All Right Reserved.
          </p>
        </div>

        <!-- Right side groups -->
        <div class="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-[120px]">
          <!-- Community -->
          <div class="flex flex-col gap-5">
            <h4 style="font-family: 'Outfit', sans-serif; font-size: 20px; font-weight: 400; color: #ffffff;">
              COMMUNITY
            </h4>
            <div class="flex items-center gap-5">
              <a v-for="s in social" :key="s.label" :href="s.href"
                target="_blank" rel="noopener noreferrer"
                class="text-white hover:text-[#4ECBA5] transition-colors"
                :aria-label="s.label">
                <Icon :icon="s.icon" width="30" height="30" />
              </a>
            </div>
          </div>

          <!-- Resource -->
          <div class="flex flex-col gap-5">
            <h4 style="font-family: 'Outfit', sans-serif; font-size: 20px; font-weight: 400; color: #ffffff;">
              RESOURCE
            </h4>
            <div class="flex items-center gap-5">
              <a v-for="r in resources" :key="r.label" :href="r.href"
                target="_blank" rel="noopener noreferrer"
                class="text-white hover:text-[#4ECBA5] transition-colors"
                :aria-label="r.label">
                <Icon :icon="r.icon" width="30" height="30" />
              </a>
            </div>
          </div>

          <!-- Report -->
          <div class="flex flex-col gap-5">
            <h4 style="font-family: 'Outfit', sans-serif; font-size: 20px; font-weight: 400; color: #ffffff;">
              REPORT
            </h4>
            <a href="mailto:opennccu@gmail.com" class="report-btn inline-flex items-center gap-1 bg-white rounded-full px-4 py-1.5 hover:shadow-lg transition-all">
              <span style="font-family: 'Noto Sans TC', sans-serif; font-size: 14px; font-weight: 700; color: #3e3e3e;">
                問題回報表單
              </span>
              <Icon icon="tabler:arrow-up" width="20" height="20" class="text-[#3e3e3e] rotate-45" />
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
  { label: 'Instagram', href: 'https://www.instagram.com/open_nccu/', icon: 'mdi:instagram' },
  { label: 'Threads',   href: 'https://www.threads.net/@open_nccu', icon: 'mingcute:threads-line' },
  { label: 'Facebook',  href: 'https://www.facebook.com/opennccu', icon: 'ic:baseline-facebook' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/opennccu', icon: 'mdi:linkedin' },
  { label: 'Discord',   href: 'https://discord.gg/opennccu', icon: 'ic:baseline-discord' },
  { label: 'Email',     href: 'mailto:opennccu@gmail.com', icon: 'material-symbols:mail-rounded' },
]

const resources = [
  { label: 'GitHub',        href: 'https://github.com/opennccu', icon: 'mdi:github' },
  { label: 'News', href: 'https://docs.opennccu.com', icon: 'fluent:news-20-filled' },
]
</script>

<style scoped>
.report-btn {
  box-shadow:
    0px 0px 5.2px 0px rgba(218, 218, 218, 0.7),
    0px 0px 17px 0px rgba(0, 0, 0, 0.1),
    inset 0px -1.3px 6.5px 0px rgba(209, 209, 209, 0.2);
}
</style>
