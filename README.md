# 🎰 台南美食拉霸機 (Tainan Food Slot Machine)

這是一個專為台南美食愛好者設計的隨機餐廳選擇器。透過酷炫的拉霸機動畫，解決「今天吃什麼」的世紀難題！

## 🚀 專案特色

- **酷炫賽博霓虹風格**：採用深夜賽博感視覺設計，搭配流動的霓虹燈管效果與經典閃爍圓點燈。
- **流暢的拉霸動畫**：實作了快速捲動與平滑減速停輪邏輯，模擬真實拉霸機的體感。
- **React 邏輯響應式**：
  - 支援 **Fluid Scaling (流暢縮放)**，利用 CSS `clamp` 技術確保在手機（如 iPhone 12/13/14）與電腦螢幕上都能完美顯示。
  - 具備高度自適應能力，確保 5 格顯示視窗在不同解析度下均不卡邊、不溢出。
- **餐廳詳細資訊**：抽中餐廳後可點擊中間區域彈出詳細資訊（地址、營業時間、評分），並整合 **Google Maps 導航連結**。
- **高效能狀態管理**：使用 `useRef` 精準控制動畫定時器，避免不必要的重新渲染與定時器重疊問題。

## 🛠️ 技術棧

- **前端框架**：React 18 (TypeScript)
- **構建工具**：Vite
- **樣式處理**：Vanilla CSS (Modern CSS: Flexbox, Grid, Clamp, Keyframes)
- **API 串接**：Fetch API (串接後端隨機餐廳資料庫)

## 📂 專案結構

```text
src/
├── api.ts              # API 串接邏輯 (fetchRandomRestaurant)
├── components/
│   ├── SlotMachine.tsx     # 核心邏輯控制器 (State & Timer 管理)
│   ├── SlotDisplay.tsx     # 拉霸機顯示視窗與動畫邏輯
│   ├── SlotItem.tsx        # 單個餐廳卡片元件
│   ├── SpinButton.tsx      # 狀態控制按鈕
│   ├── RestaurantModal.tsx # 餐廳詳細資訊彈窗
│   └── LoadingScreen.tsx   # 初次載入畫面
├── types.ts            # TypeScript 型別定義 (Restaurant, GameState)
├── App.tsx             # 應用程式入口
└── App.css             # 核心視覺設計 (賽博霓虹風格)
```

## 🚥 快速開始

### 安裝依賴
```bash
npm install
```

### 啟動開發伺服器
```bash
npm run dev
```

### 構建專案
```bash
npm run build
```

---

**享受在台南美食中穿梭的樂趣吧！🍜**
