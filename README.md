# 股票資訊查詢系統

這是一個基於 Next.js 開發的股票資訊查詢系統，提供台灣上市櫃公司的基本資訊、月營收數據和圖表展示功能。

## 預覽

您可以訪問 https://stark-tech-test-gray.vercel.app/stock 查看系統的實際運行效果。

## 功能特點

- 股票基本資訊查詢
- 月營收數據展示
- 互動式圖表分析

## 使用工具

- Next.js 15.2.5
- React 19
- Material-UI 7
- Highcharts
- TypeScript
- Tailwind CSS

## 系統需求

- Node.js 18.17 或更高版本
- npm 或 yarn 套件管理器

## 安裝步驟

1. 複製專案

```bash
git clone https://github.com/dida0701/stark-tech-test.git
cd stark-tech-test
```

2. 安裝依賴套件

```bash
npm install
# 或
yarn install
```

3. 設定環境變數

複製 `.env.example` 檔案：

```bash
cp .env.example .env
```

然後編輯 `.env` 填入您的金鑰資訊。

4. 啟動開發伺服器

```bash
npm run dev
# 或
yarn dev
```

5. 開啟瀏覽器訪問 http://localhost:3000

## 開發指令

- `npm run dev` - 啟動開發伺服器 (使用 Turbopack)
- `npm run build` - 建置生產版本
- `npm run start` - 啟動生產伺服器
- `npm run lint` - 執行程式碼檢查

## 環境變數

專案使用以下環境變數：

| 變數名稱                    | 描述                   | 必須 |
| --------------------------- | ---------------------- | ---- |
| NEXT_PUBLIC_STOCK_API_TOKEN | FinMind API 的認證金鑰 | 是   |

在部署時，請確保已在伺服器或托管平台上設置這些環境變數。

### 如何獲取 API 金鑰

1. 前往 [FinMind 官方網站](https://finmindtrade.com/)
2. 註冊並登入帳號
3. 在個人設定中申請 API 金鑰
4. 複製金鑰到環境變數檔案中

## 專案結構

```
stark-tech-test/
├── src/
│   ├── api/          # API 相關程式碼
│   ├── app/          # Next.js 應用程式頁面
│   │   └── stock/    # 股票資訊頁面
│   ├── components/   # React 元件
│   ├── features/     # 功能模組
│   └── theme.ts      # 主題設定
├── public/           # 靜態資源
└── .vscode/          # 編輯器設定
```

## 部署

### 線上 Demo

本專案已部署到 Vercel 平台，您可以通過以下連結訪問：
https://stark-tech-test-gray.vercel.app/stock

### Vercel 部署

1. 將專案推送到 GitHub 倉庫
2. 在 Vercel 平台導入專案
3. 設定環境變數（在 Vercel 專案設定中添加 NEXT_PUBLIC_STOCK_API_TOKEN）
4. 部署完成後，Vercel 會自動提供部署網址

### 本地部署

1. 建置專案

```bash
npm run build
```

2. 啟動生產伺服器

```bash
npm run start
```

## 注意事項

- 請確保 API 服務正常運作
- 建議使用最新版本的瀏覽器
- 開發時請遵循專案的程式碼規範
- 請勿將含有 API 金鑰的 `.env` 檔案提交至版本控制系統
