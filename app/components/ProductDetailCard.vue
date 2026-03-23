<template>
  <div class="product-outer">
    <!-- Main card -->
    <div class="product-card">
      <!-- Left: Dark mockup area -->
      <div class="card-left">
        <img src="/screenshots/phone-bg.png" alt="" class="card-left-bg" />
        <div class="card-left-darken" />
        <!-- Phone -->
        <div class="phone-container">
          <div class="phone-device">
            <img src="/screenshots/phone-app.jpg" alt="App" class="phone-screen" />
          </div>
        </div>
        <!-- Return button -->
        <button class="back-btn" @click="$emit('back')">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#aeaeb2" stroke-width="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <!-- Stat badges -->
        <div class="badges">
          <div v-for="(stat, i) in product.stats" :key="i" class="badge">
            <span class="badge-val">{{ stat.value }}</span>
            <span class="badge-lbl"> {{ stat.label }}</span>
          </div>
        </div>
      </div>
      <!-- Right: White text area -->
      <div class="card-right">
        <div class="card-right-inner">
          <h3 class="title" v-html="formattedTitle" />
          <p class="subtitle">{{ product.subtitle }}</p>
          <p class="desc">{{ product.description }}</p>
          <div class="cta">
            <span class="cta-label">{{ product.ctaText }}</span>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#81edb9" stroke-width="1.5" class="cta-icon">
              <path d="M12 5v14M12 19l-6-6M12 19l6-6" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Feature icons row -->
    <div v-if="product.features.length" class="icons-bar">
      <template v-for="(feat, i) in product.features" :key="i">
        <div v-if="i === 1" class="icon-divider" />
        <div class="icon-item">
          <div class="icon-box">
            <img :src="feat.icon + '?v=2'" :alt="feat.label" />
          </div>
          <span class="icon-label">{{ feat.label }}</span>
        </div>
      </template>
    </div>

    <!-- UR Report buttons -->
    <div v-if="product.id === 'ur-report'" class="ur-row">
      <button v-for="b in urReportButtons" :key="b.label" class="ur-btn">{{ b.label }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Product } from '~/data/products'
import { urReportButtons } from '~/data/products'

const props = defineProps<{ product: Product }>()
defineEmits<{ back: [] }>()

const formattedTitle = computed(() => props.product.title.replace(/\n/g, '<br>'))
</script>

<style scoped>
/* ── Outer wrapper ── */
.product-outer {
  background: #f0f0f0;
  border-radius: 15px;
  box-shadow: 0 0 3px rgba(43,43,43,.15);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  height: 620px;
}

/* ── Main card (phone + text) ── */
.product-card {
  background: #f0f0f0;
  border-radius: 20px;
  box-shadow:
    -5px -5px 15px #fcfcfc,
    6px 6px 18px -14px rgba(135,135,135,.3),
    7px 6px 7px -6px rgba(0,0,0,.08);
  width: 100%;
  display: flex;
  overflow: hidden;
  flex: 1;
  min-height: 0;
}

/* ── Left (mockup) ── */
.card-left {
  position: relative;
  width: 58%;
  min-height: 480px;
  overflow: hidden;
  flex-shrink: 0;
}
.card-left-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-left-darken {
  position: absolute;
  inset: 0;
  background: #000;
  mix-blend-mode: color;
}

.phone-container {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 40px 24px 60px;
}
.phone-device {
  width: 280px;
  max-height: 100%;
  aspect-ratio: 9/19.5;
  background: #f0f0f0;
  border-radius: 36px;
  overflow: hidden;
  transform: rotate(-18deg) skewX(15deg) scaleY(.97);
  box-shadow: 0 8px 40px rgba(0,0,0,.3);
}
.phone-screen {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.back-btn {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(240,240,240,.6);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  transition: background .2s;
}
.back-btn:hover { background: rgba(240,240,240,.9); }

/* ── Badges ── */
.badges {
  position: absolute;
  left: 16px;
  bottom: 16%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 5;
}
.badge {
  background: linear-gradient(175deg, #fff 22%, rgba(255,255,255,0) 105%);
  border: 2px solid rgba(255,255,255,.65);
  border-radius: 200px;
  padding: 6px 20px;
  box-shadow: -17px 21px 52px rgba(42,80,121,.1);
  white-space: nowrap;
  backdrop-filter: blur(4px);
}
.badge-val, .badge-lbl {
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 1.28px;
  background: linear-gradient(175deg, #94ccb9 5%, #3fa4b6 95%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.badge-val { font-family: 'Outfit', sans-serif; }
.badge-lbl { font-family: 'Noto Sans TC', sans-serif; }

/* ── Right (text) ── */
.card-right {
  flex: 1;
  background: rgba(255,255,255,.75);
  position: relative;
}
.card-right-inner {
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.title {
  font-family: 'Montserrat', 'Noto Sans TC', sans-serif;
  font-weight: 300;
  font-size: 44px;
  color: #616161;
  text-align: right;
  letter-spacing: 6px;
  line-height: 1.15;
}
.subtitle {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #616161;
  text-align: right;
  letter-spacing: 1.28px;
  margin-top: 12px;
}
.desc {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: #616161;
  text-align: justify;
  letter-spacing: 1.12px;
  line-height: 1.8;
  margin-top: 20px;
  flex: 1;
}
.cta {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  margin-top: auto;
  padding-top: 16px;
}
.cta-label {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 14px;
  color: #81edb9;
  letter-spacing: .8px;
}
.cta-icon { flex-shrink: 0; }

/* ── Icon bar ── */
.icons-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px 20px;
  flex-wrap: wrap;
}
.icon-divider {
  width: 2px;
  height: 70px;
  background: #f0f0f0;
  border-radius: 2px;
  box-shadow: 2px 2px 4px rgba(255,255,255,.6);
  position: relative;
}
.icon-divider::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset .4px .4px .6px .4px rgba(0,0,0,.1);
}
.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  width: 80px;
  cursor: pointer;
}
.icon-box {
  width: 64px;
  height: 64px;
  background: #f0f0f0;
  border-radius: 13px;
  box-shadow:
    0 0 3px rgba(43,43,43,.15),
    inset 1px 1px 2px rgba(0,0,0,.1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  overflow: hidden;
  transition: box-shadow .2s;
}
.icon-item:hover .icon-box {
  box-shadow:
    0 0 3px rgba(43,43,43,.15),
    inset 1px 1px 2px rgba(0,0,0,.1),
    0 0 0 2px rgba(78,203,165,.3);
}
.icon-box img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.icon-label {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 300;
  font-size: 11px;
  color: #aeaeb2;
  text-align: center;
  letter-spacing: .8px;
  line-height: 1.4;
  min-height: 32px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

/* ── UR buttons ── */
.ur-row {
  display: flex;
  gap: 20px;
}
.ur-btn {
  background: #f0f0f0;
  border-radius: 10px;
  box-shadow:
    -5px -5px 15px #fcfcfc,
    6px 6px 18px -14px rgba(135,135,135,.3),
    7px 6px 7px -6px rgba(0,0,0,.08);
  padding: 14px 36px;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #616161;
  cursor: pointer;
  transition: transform .2s;
}
.ur-btn:hover { transform: translateY(-2px); }

/* ── Mobile ── */
@media (max-width: 768px) {
  .product-card {
    flex-direction: column;
    min-height: auto;
  }
  .card-left {
    width: 100%;
    min-height: 320px;
  }
  .phone-device { width: 180px; }
  .title { font-size: 28px; letter-spacing: 3px; }
  .desc { font-size: 14px; }
  .icons-bar { gap: 10px; }
  .icon-box { width: 52px; height: 52px; }
  .icon-item { width: 65px; }
}
</style>
