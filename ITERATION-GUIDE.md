# Open NCCU 官網 — 迭代實作指南

> 此文件是給自動迭代 bot (范愷祐) 使用的工作指南。
> 每小時執行一次，每次改進網站使其更接近 Figma 設計稿。

## 工作流程

每次迭代必須執行以下步驟：

### Step 1: 檢視 Figma 設計稿
1. 閱讀 `.figma-ref/DESIGN-SPEC.md` 了解設計規格
2. 查看 `.figma-ref/*.png` 截圖作為視覺參考
3. 如需更新截圖或取得子節點細節，使用 Figma API:
   ```bash
   # 截圖
   curl -s "https://api.figma.com/v1/images/bqOScnFMjkuUzOEVECi3jR?ids=NODE_ID&format=png&scale=2" \
     -H "X-Figma-Token: $FIGMA_TOKEN"

   # 設計資料
   curl -s "https://api.figma.com/v1/files/bqOScnFMjkuUzOEVECi3jR/nodes?ids=NODE_ID&depth=5" \
     -H "X-Figma-Token: $FIGMA_TOKEN"
   ```

### Step 2: 比較現況與設計稿
1. 啟動 dev server: `cd /Users/yt/vibe-workspace/opennccu-official && pnpm dev`
2. 閱讀各 component 的程式碼
3. 對照 Figma 截圖找出差異
4. 選擇本次迭代要改進的 1-3 個區塊

### Step 3: 實作改進
- 專案技術棧: Nuxt 4 + Vue 3 + Tailwind CSS
- 遵循現有程式碼風格和設計系統 (見 tailwind.config.ts, main.css)
- 優先使用 Tailwind 而非行內樣式
- 參考 `.figma-ref/DESIGN-SPEC.md` 中的精確字體大小、顏色、間距

### Step 4: 建置驗證
```bash
cd /Users/yt/vibe-workspace/opennccu-official && pnpm build
```
確保沒有建置錯誤。

### Step 5: Git Commit & Push
```bash
cd /Users/yt/vibe-workspace/opennccu-official
git add -A
git commit -m "v0.X: [描述本次改進內容]"
git push origin main
```

### Step 6: Discord 進度回報
```bash
curl -s -X POST "https://discord.com/api/v10/channels/1484206453677097030/messages" \
  -H "Authorization: Bot $DISCORD_BOT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "embeds": [{
      "title": "📦 Open NCCU 官網 v0.X 迭代完成",
      "description": "本次改進內容的摘要",
      "color": 5164837,
      "fields": [
        {"name": "✅ 完成項目", "value": "- 項目1\n- 項目2"},
        {"name": "🎯 下次目標", "value": "- 目標1\n- 目標2"},
        {"name": "📊 完成度", "value": "XX%"}
      ],
      "footer": {"text": "GitHub: s1031432/opennccu-official"}
    }]
  }'
```

## 迭代優先順序

按照以下順序逐步改進（每次選 1-3 個重點）：

### Phase 1: 基本結構 ✅/❌
- [ ] Hero Section: 移除按鈕、匹配字體大小/顏色、加入裝飾線條
- [ ] NavBar: 匹配字體和樣式
- [ ] Footer: 重新設計為深色底 3-column layout
- [ ] 統一背景色為 #f0f0f0

### Phase 2: 內容區塊
- [ ] News Section: 更新卡片樣式、新增描述文字
- [ ] Product Section: 改進手機 mockup 和裝飾元素
- [ ] Collaborate Section: 匹配設計稿的合作案例版面
- [ ] Stats/Partners: 調整間距和樣式

### Phase 3: 新增區塊
- [ ] About Us Section: "我們是誰？" 時間線 + 照片區
- [ ] Crew Section: "團隊成員" 角色卡片 + 裝飾元素

### Phase 4: 精修
- [ ] 裝飾 SVG 線條（品牌幾何圖形）
- [ ] 玻璃擬態效果調整
- [ ] 響應式設計
- [ ] 動畫和互動效果
- [ ] 子頁面 (Product Detail, Collaboration Detail)

## 重要設計 Token

| 屬性 | 值 |
|------|-----|
| 背景色 | `#f0f0f0` |
| 主色 | `#4ECBA5` |
| 活躍導航色 | `#77e5b0` |
| 標題文字色 | `#606060` |
| 副標文字色 | `#aeaeb2` |
| Footer 背景 | `#3d3d3d` |
| Footer 文字 | `#f0f0f0` / `#ffffff` |
| 中文字體 | Noto Sans TC |
| 英文字體 | Montserrat |
| Footer 字體 | Outfit |
| 標題大小 | 80px weight300 |
| 導航大小 | 24px |
| 內文大小 | 28px weight300 |
| 小字大小 | 24px weight300 |

## 注意事項
- 工作目錄限制在 `/Users/yt/vibe-workspace/opennccu-official/`
- 不要修改 CLAUDE.md 或此指南以外的系統檔案
- 每次迭代結束必須 commit、push、發 Discord 通知
- 版本號從 v0.2 開始遞增 (v0.1 是初始狀態)
