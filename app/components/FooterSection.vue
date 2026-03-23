<template>
  <footer id="contact" class="relative z-20 bg-[#3d3d3d] py-10">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
        <!-- Column 1: Logo & Copyright -->
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <img src="/logo.png" alt="Open NCCU Logo" class="w-10 h-10 object-contain" />
            <span style="font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 600; color: #4ECBA5;">
              Open NCCU
            </span>
          </div>
          <p style="font-family: 'Outfit', sans-serif; font-size: 14px; color: #f0f0f0; margin-top: 8px;">
            &copy; 2026 Copyright. All Right Reserved.
          </p>
        </div>

        <!-- Column 2: Community -->
        <div>
          <h4 style="font-family: 'Outfit', sans-serif; font-size: 20px; font-weight: 500; color: #ffffff; margin-bottom: 16px; letter-spacing: 0.05em;">
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
          <h4 style="font-family: 'Outfit', sans-serif; font-size: 20px; font-weight: 500; color: #ffffff; margin-bottom: 16px; letter-spacing: 0.05em;">
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
          <h4 style="font-family: 'Outfit', sans-serif; font-size: 20px; font-weight: 500; color: #ffffff; margin-bottom: 16px; letter-spacing: 0.05em;">
            REPORT
          </h4>
          <a href="mailto:opennccu@gmail.com"
            class="inline-flex items-center gap-2 border border-white/40 text-white/80 rounded-full hover:bg-white/10 hover:border-[#4ECBA5] hover:text-[#4ECBA5] transition-all"
            style="font-family: 'Noto Sans TC', sans-serif; font-size: 14px; padding: 8px 20px;">
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
