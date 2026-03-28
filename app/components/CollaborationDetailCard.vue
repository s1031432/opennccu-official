<template>
  <div class="collab-detail">
    <!-- Return button -->
    <button class="return-btn" @click="$emit('back')">
      <img src="/icons/products/return-btn.svg" alt="返回" class="w-full h-full" />
    </button>

    <!-- Title (top right) -->
    <h3 class="collab-title">徵才月集點卡</h3>

    <!-- UI image area (3 panels) -->
    <div class="ui-panels">
      <div class="panel panel-side" />
      <div class="panel panel-center" />
      <div class="panel panel-side" />
    </div>

    <!-- Intro section (neumorphic card) -->
    <div class="intro-card">
      <div class="intro-content">
        <!-- 介紹 -->
        <div class="intro-block">
          <h4 class="intro-heading">介紹</h4>
          <p class="intro-text">
            徵才月為政大每年三月舉辦，包括企業說明會、徵才博覽會、企業參訪、系列講座等一系列徵才活動。為了優化過往分散式問卷集點的繁雜流程，職涯中心與 OpenNCCU 合作推出「數位集點工具」，將學生的參與紀錄與問卷回饋集中化管理，協助學生隨時掌握積點進度與線上兌獎，獲得更直覺的抽獎參與體驗，同時也為活動主辦方提供精準的查證工具，確保後續兌獎程序的公正性與作業效率。
          </p>
        </div>

        <!-- Language -->
        <div class="lang-block">
          <h4 class="lang-heading">Language</h4>
          <p class="lang-text">HTML、CSS、JavaScript</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  back: []
}>()
</script>

<style scoped>
.collab-detail {
  background: #f0f0f0;
  position: relative;
  padding: 60px 80px 60px;
  min-height: 600px;
}

.return-btn {
  position: absolute;
  left: 80px;
  top: 70px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 10;
  transition: opacity 0.2s;
}

.return-btn:hover {
  opacity: 0.7;
}

.collab-title {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 300;
  font-size: 52px;
  color: #606060;
  text-align: right;
  letter-spacing: 9.6px;
  line-height: 1.2;
  margin-bottom: 48px;
}

/* UI panels area */
.ui-panels {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin: 0 auto 48px;
  max-width: 800px;
  height: 380px;
  position: relative;
}

.panel {
  border-radius: 20px;
  flex-shrink: 0;
}

.panel-side {
  background: #ebe8e8;
  width: 280px;
  height: 320px;
}

.panel-center {
  background: #e4e4e4;
  width: 300px;
  height: 380px;
  z-index: 1;
  margin: 0 -20px;
}

/* Intro card */
.intro-card {
  background: #f0f0f0;
  border-radius: 25px;
  box-shadow:
    -10px -11px 16px 1px rgba(252, 252, 252, 0.7),
    9px 14px 24px -10px rgba(0, 0, 0, 0.25);
  padding: 48px;
  max-width: 900px;
  margin: 0 auto;
}

.intro-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.intro-block {
  font-family: 'Noto Sans TC', sans-serif;
}

.intro-heading {
  font-weight: 300;
  font-size: 22px;
  color: #606060;
  letter-spacing: 1.28px;
  margin-bottom: 16px;
  line-height: 1.5;
}

.intro-text {
  font-weight: 300;
  font-size: 16px;
  color: #606060;
  letter-spacing: 0.96px;
  line-height: 1.5;
}

.lang-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.lang-heading {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 22px;
  color: #606060;
  letter-spacing: 1.28px;
  line-height: 1.5;
}

.lang-text {
  font-family: 'Montserrat', 'Noto Sans TC', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #aeaeb2;
  letter-spacing: 0.96px;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .collab-detail {
    padding: 40px 24px;
  }

  .return-btn {
    left: 24px;
    top: 40px;
  }

  .collab-title {
    font-size: 36px;
    letter-spacing: 4px;
  }

  .ui-panels {
    height: 240px;
  }

  .panel-side {
    width: 160px;
    height: 200px;
  }

  .panel-center {
    width: 180px;
    height: 240px;
  }

  .intro-card {
    padding: 24px;
  }
}
</style>
