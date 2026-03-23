<template>
  <section id="product-service" class="py-16 relative">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section title -->
      <h3
        class="mb-12"
        style="
          font-family: 'Noto Sans TC', sans-serif;
          font-size: 28px;
          font-weight: 300;
          color: #4ecba5;
          letter-spacing: 4px;
        "
      >
        產品 &amp; 服務
      </h3>

      <!-- Product carousel -->
      <div class="relative">
        <!-- Navigation dots -->
        <div class="flex items-center justify-center gap-3 mb-8">
          <button
            v-for="(product, idx) in products"
            :key="product.id"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="
              idx === activeIndex
                ? 'bg-[#4ECBA5] scale-110'
                : 'bg-[#d9d9d9] hover:bg-[#aeaeb2]'
            "
            @click="activeIndex = idx"
          />
        </div>

        <!-- Card container with fixed height to prevent arrow jumping -->
        <div class="overflow-hidden card-container">
          <Transition name="slide" mode="out-in">
            <ProductDetailCard
              :key="products[activeIndex].id"
              :product="products[activeIndex]"
              @back="handleBack"
            />
          </Transition>
        </div>

        <!-- Prev / Next arrows -->
        <button
          v-if="activeIndex > 0"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-[#aeaeb2] hover:text-[#4ECBA5] transition-colors hidden md:flex"
          @click="activeIndex--"
        >
          <Icon icon="mdi:chevron-left" class="w-6 h-6" />
        </button>
        <button
          v-if="activeIndex < products.length - 1"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-[#aeaeb2] hover:text-[#4ECBA5] transition-colors hidden md:flex"
          @click="activeIndex++"
        >
          <Icon icon="mdi:chevron-right" class="w-6 h-6" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { products } from '~/data/products'

const activeIndex = ref(0)

function handleBack() {
  if (activeIndex.value > 0) {
    activeIndex.value--
  }
}
</script>

<style scoped>
.card-container {
  height: 620px;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.35s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
