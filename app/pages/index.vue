<template>
  <div>
    <NavBar />
    <HeroSection :scroll-y="scrollY" />
    <NewsSection />
    <ProductSection :scroll-y="scrollY" />
    <CollaborateSection />
    <StatsSection />

    <!-- Footer -->
    <footer class="py-12 bg-gray-50 border-t border-gray-100">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <div class="flex items-center justify-center gap-2 mb-4">
          <img src="/logo.png" alt="Open NCCU Logo" class="w-7 h-7 object-contain" />
          <span class="font-semibold text-gray-600">Open NCCU</span>
        </div>
        <p class="text-sm text-gray-400">政大學生設計，設計給政大學生 · © 2024 Open NCCU</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { scrollY } = useScrollY()
</script>
