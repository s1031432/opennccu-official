<template>
  <!-- Figma API: Footer fill #3e3e3e (exact r=61.6/255) — DO NOT use #3d3d3d -->
  <footer id="contact" class="relative z-20 bg-[#3e3e3e]">
    <!-- Figma API: Footer 1920×250, paddingTop=72 paddingBottom=72 paddingLeft=64 paddingRight=64 — DO NOT shrink padding -->
    <!-- Figma API: HORIZONTAL layout with content centered (primaryAxisAlignItems=CENTER). Total content ~1250px centered in 1792px inner width -->
    <div class="px-6 md:px-[64px] py-[72px]">
      <!-- Figma API: top-level gap=224 between Copyright block and column groups — DO NOT shrink -->
      <div class="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-[224px] justify-center">
        <!-- Logo & Copyright -->
        <div class="flex flex-col gap-2 shrink-0">
          <!-- Figma API: logo vector 232×43px — DO NOT enlarge -->
          <img src="/assets/logo-with-title.svg" alt="Open NCCU" class="h-[43px] w-auto object-contain object-left" />
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
                <!-- Figma API: icon frames are 30x30px — DO NOT SHRINK -->
                <Icon :icon="s.icon" width="30" height="30" />
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
                <!-- Figma API: icon frames are 30x30px — DO NOT SHRINK -->
                <Icon :icon="r.icon" width="30" height="30" />
              </a>
            </div>
          </div>

          <!-- Report -->
          <div class="flex flex-col gap-5">
            <!-- Figma API: 20px weight400 Outfit #ffffff — DO NOT SHRINK -->
            <h4 style="font-family: 'Outfit', sans-serif; font-size: 20px; font-weight: 400; color: #ffffff;">
              REPORT
            </h4>
            <!-- Figma API: formBtn 135×30px, cornerRadius=24, white fill, neumorphic shadows — DO NOT change to outlined -->
            <a href="https://forms.gle/Un57LxddqjVBgr8j7" target="_blank" rel="noopener noreferrer" class="report-btn inline-flex items-center justify-center gap-1 rounded-[24px] transition-all whitespace-nowrap bg-white hover:bg-gray-100" style="width: 135px; height: 30px;">
              <!-- Figma API: 14px weight700 Noto Sans TC #3e3e3e — matches footer bg -->
              <span style="font-family: 'Noto Sans TC', sans-serif; font-size: 14px; font-weight: 700; color: #3e3e3e;">
                問題回報表單
              </span>
              <!-- Figma API: arrow icon frame 20×20px, vector 15.3×15.3px stroke #3e3e3e — inside 135×30 button -->
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
/* Figma API: formBtn neumorphic shadows — DROP_SHADOW(0,0,17px,black 10%) + DROP_SHADOW(0,0,5.2px,gray 70%) + INNER_SHADOW(0,-1.3px,6.5px,gray 20%) */
.report-btn {
  box-shadow:
    0 0 17px rgba(0, 0, 0, 0.1),
    0 0 5.2px rgba(218, 218, 218, 0.7),
    inset 0 -1.3px 6.5px rgba(209, 209, 209, 0.2);
}
</style>
