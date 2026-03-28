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
        <!-- Figma ReturnBtn 44537:23349: 80x80, arrow_icon 40x40 -->
        <button class="back-btn" @click="$emit('back')">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#aeaeb2" stroke-width="2">
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
            <!-- Figma solar:arrow-up-linear 44537:23362: 120x120 frame, 60x80 vector -->
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" class="cta-icon">
              <path d="M60 95V25M60 25L30 55M60 25L90 55" stroke="#81edb9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity="0.71"/>
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
/* ── Outer wrapper — Figma 44537:23344: cr=15, pad=20, gap=16, DROP_SHADOW + INNER_SHADOW ── */
.product-outer {
  background: #f0f0f0;
  border-radius: 15px;
  box-shadow:
    0 0 3px rgba(43,43,43,.15),
    inset 2px 2px 2px rgba(255,255,255,.25);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  height: auto;
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

/* ── Left (mockup) — Figma: mockup w=1276 in 1758 frame = 72.6%, overlaps right panel by 240px ── */
.card-left {
  position: relative;
  width: 72.6%;
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

/* Figma ReturnBtn 44537:23349: 80x80, Ellipse56 neumorphic */
.back-btn {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  transition: background .2s;
  box-shadow:
    -5px -5px 15px rgba(252,252,252,1),
    6px 6px 18px -14px rgba(135,135,135,.3),
    7px 6px 7px -6px rgba(0,0,0,.08);
}
.back-btn:hover { background: rgba(240,240,240,.95); }

/* ── Badges — Figma: Label1 at x=52,y=730 from mockup origin; Label2 at x=122,y=837 ── */
.badges {
  position: absolute;
  left: 52px;
  bottom: 10%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 5;
}
/* Figma Label 44537:23364: cr=200, GLASS effect, DROP_SHADOW(-17,21,52px) */
.badge {
  background: linear-gradient(175deg, #fff 22%, rgba(255,255,255,0) 105%);
  border: 2px solid rgba(255,255,255,.65);
  border-radius: 200px;
  padding: 14px 40px;
  box-shadow: -17px 21px 52px rgba(42,80,121,.1);
  white-space: nowrap;
  backdrop-filter: blur(4px) saturate(180%);
}
/* Figma Label 44537:23366: 32px/w700/ls1.28/lh48 gradient text */
.badge-val, .badge-lbl {
  font-weight: 700;
  font-size: 32px;
  letter-spacing: 1.28px;
  line-height: 48px;
  background: linear-gradient(175deg, #94ccb9 5%, #3fa4b6 95%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.badge-val { font-family: 'Outfit', sans-serif; }
.badge-lbl { font-family: 'Noto Sans TC', sans-serif; }

/* ── Right (text) — Figma Rectangle 156373: w=722 at x=1036 in 1758 frame, overlaps mockup by 240px ── */
/* 722/1758 = 41.1% width. Position: (1758-722)/1758 = 58.9% from left, achieved via margin-left: -13.6% (72.6%-58.9%=13.7% overlap) */
.card-right {
  width: 41.1%;
  flex-shrink: 0;
  background: #ffffff;
  position: relative;
  margin-left: -13.7%;
  z-index: 2;
}
.card-right-inner {
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
/* DO NOT SHRINK below 80px — Figma 44537:23355: 80px/w300/ls9.6/lh97.5 */
/* Figma API: text fill rgba(0.3791666) = #616161 — different from section titles (#606060) */
.title {
  font-family: 'Montserrat', 'Noto Sans TC', sans-serif;
  font-weight: 300;
  font-size: 80px;
  color: #616161;
  text-align: right;
  letter-spacing: 9.6px;
  line-height: 97.5px;
}
/* Figma 44537:23357: 32px/w300/ls1.28/lh48 */
/* Figma API: text fill rgba(0.3791666) = #616161 */
.subtitle {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 300;
  font-size: 32px;
  color: #616161;
  text-align: right;
  letter-spacing: 1.28px;
  line-height: 48px;
  margin-top: 16px;
}
/* Figma 44537:23359: 28px/w300/ls1.12/lh50 */
/* Figma API: text fill rgba(0.3791666) = #616161 */
.desc {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 300;
  font-size: 28px;
  color: #616161;
  text-align: justify;
  letter-spacing: 1.12px;
  line-height: 50px;
  margin-top: 48px;
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
/* Figma 44537:23361: 20px/w400/ls0.8/lh30 color=#81edb9 */
.cta-label {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #81edb9;
  letter-spacing: 0.8px;
  line-height: 30px;
}
.cta-icon { flex-shrink: 0; }

/* ── Icon bar — Figma FuncSection 44537:23370: w=1482, cr=20, pad=28/32, bg=#f0f0f0 ── */
/* Figma API: FuncSection itemSpacing=4 (outer), inner Frame 48095628 itemSpacing=32 */
.icons-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 28px 32px;
  background: #f0f0f0;
  border-radius: 20px;
  width: 100%;
  max-width: 1482px;
  margin: 0 auto;
}
/* Figma Divider 44537:23377: 2x163px, neumorphic groove */
.icon-divider {
  width: 2px;
  height: 163px;
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
  box-shadow:
    inset 0 0 0.6px rgba(0,0,0,.1),
    inset 1px 1px 2px rgba(135,135,135,.3);
}
/* Figma FuncBtn 44537:23372: 145x163, gap=8 */
.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  width: 145px;
  cursor: pointer;
}
/* Figma Icon 44537:23379: 125x125, cr=15, neumorphic */
.icon-box {
  width: 125px;
  height: 125px;
  background: #f0f0f0;
  border-radius: 15px;
  box-shadow:
    0 0 3px rgba(43,43,43,.15),
    inset 2px 2px 2px rgba(255,255,255,.25);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow: hidden;
  transition: box-shadow .2s;
}
.icon-item:hover .icon-box {
  box-shadow:
    0 0 3.5px rgba(43,43,43,.20),
    inset 1px 1px 6px rgba(255,255,255,.20),
    0 0 0 2px rgba(78,203,165,.3);
}
.icon-box img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
/* Figma API: label fill rgba(0.682,0.682,0.698) = #aeaeb2. English labels use Outfit, Chinese use Noto Sans TC */
/* Using Outfit with Noto Sans TC fallback to cover both per Figma API node data */
.icon-label {
  font-family: 'Outfit', 'Noto Sans TC', sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #aeaeb2;
  text-align: center;
  letter-spacing: 0.8px;
  line-height: 30px;
  min-height: 30px;
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
  color: #606060;
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
  .title { font-size: clamp(28px, 6vw, 48px); letter-spacing: 4px; line-height: 1.2; }
  .subtitle { font-size: 20px; line-height: 30px; }
  .desc { font-size: 18px; line-height: 32px; }
  .icons-bar { gap: 12px; padding: 16px; flex-wrap: wrap; }
  .icon-box { width: 72px; height: 72px; padding: 12px; }
  .icon-item { width: 90px; }
  .icon-label { font-size: 14px; }
  .icon-divider { height: 90px; }
  .badge-val, .badge-lbl { font-size: 20px; line-height: 30px; }
  .back-btn { width: 52px; height: 52px; }
  .cta-icon { width: 60px !important; height: 60px !important; }
}
</style>
