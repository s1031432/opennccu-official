<template>
  <footer class="bg-[#3d3d3d] py-16">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Column 1: Logo & Copyright -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <img src="/logo.png" alt="Open NCCU Logo" class="w-10 h-10 object-contain" />
            <span class="text-xl font-semibold text-[#4ECBA5]" style="font-family: 'Montserrat', sans-serif;">
              Open NCCU
            </span>
          </div>
          <p class="text-sm text-[#f0f0f0] mt-2" style="font-family: 'Outfit', sans-serif;">
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
          <a href="#"
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
  { label: 'Instagram', href: '#', icon: 'mdi:instagram' },
  { label: 'Threads',   href: '#', icon: 'simple-icons:threads' },
  { label: 'Facebook',  href: '#', icon: 'mdi:facebook' },
  { label: 'LinkedIn',  href: '#', icon: 'mdi:linkedin' },
  { label: 'Discord',   href: '#', icon: 'ic:baseline-discord' },
  { label: 'Email',     href: '#', icon: 'mdi:email-outline' },
]

const resources = [
  { label: 'GitHub',        href: '#', icon: 'mdi:github' },
  { label: 'Documentation', href: '#', icon: 'mdi:file-document-outline' },
]
</script>
