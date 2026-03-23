// ─────────────────────────────────────────────────────────────────────────────
// Product & Service data for the "產品 & 服務" section
// Icons stored in /public/icons/products/
// ─────────────────────────────────────────────────────────────────────────────

export interface ProductFeature {
  /** Icon image path (relative to /public) */
  icon: string
  /** Feature label */
  label: string
}

export interface ProductStat {
  value: string
  label: string
}

export interface Product {
  id: string
  title: string
  subtitle: string
  description: string
  stats: ProductStat[]
  features: ProductFeature[]
  ctaText: string
}

export const products: Product[] = [
  {
    id: 'web-app',
    title: 'Open NCCU\nWeb APP',
    subtitle: '一站式政大數位服務入口',
    description:
      'Open NCCU Web App 專為政大人量身打造，我們深入研究學生從入學到畢業的各類數位痛點，提供一站式整合的多元數位服務，以優化政大生的校園數位體驗，讓科技真正服務於每位政大人的日常。',
    stats: [
      { value: '80,000+', label: '造訪人次' },
      { value: '4,500+', label: '活躍使用者' },
    ],
    features: [
      { icon: '/icons/products/web-app.png', label: 'Web App' },
      { icon: '/icons/products/map.png', label: '小地圖' },
      { icon: '/icons/products/mahjong-tiles.png', label: '南棟還是北棟' },
      { icon: '/icons/products/calendar.png', label: '學生共編行事曆' },
      { icon: '/icons/products/stores.png', label: '特約商家' },
      { icon: '/icons/products/gpa-calc.png', label: 'GPA 計算機' },
      { icon: '/icons/products/mahjong-tiles.png', label: '新生專區' },
      { icon: '/icons/products/link.png', label: '限時連結' },
    ],
    ctaText: '點選功能開始體驗',
  },
  {
    id: 'course-system',
    title: 'Open NCCU\n排課系統',
    subtitle: '政大人必備的高效排課系統',
    description:
      'Open NCCU 排課系統致力於解決政大官方選課流程碎片化的問題，為政大生設計與開發的非政大官方排課平台。我們將課程介紹、評價、課表模擬和考古題整合於單一介面，大幅縮短查課與決策的往返時間，並提供一鍵貼上至政大官方選課平台的功能。透過這些整合性服務，成功協助使用者將平均選課時間大幅縮短至 1 小時內，實現「一鍵同步官方選課」的流暢選課體驗！',
    stats: [
      { value: '80,000+', label: '造訪人次' },
      { value: '4,500+', label: '活躍使用者' },
      { value: '6,600+', label: '批量選課匯出次數' },
    ],
    features: [
      { icon: '/icons/products/course-system.svg', label: '排課系統' },
      { icon: '/icons/products/func-search.png', label: '功能查詢' },
      { icon: '/icons/products/batch-select.png', label: '批量選課' },
      { icon: '/icons/products/placeholder.svg', label: '排志願' },
      { icon: '/icons/products/exam-exchange.png', label: '考古題' },
      { icon: '/icons/products/placeholder.svg', label: '視覺化課表' },
    ],
    ctaText: '點選功能開始體驗',
  },
  {
    id: 'ur-report',
    title: 'UR研究報告',
    subtitle: '次標',
    description:
      '說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字',
    stats: [],
    features: [],
    ctaText: '點選查看報告內容',
  },
  {
    id: 'open-kit',
    title: 'Open Kit',
    subtitle: 'iOS 版的整合性校園生活小工具',
    description:
      'Open NCCU iOS App 是專為 iOS 使用者打造的「校園生活小工具整合」！我們將 Web App 部分高頻率使用、即時、適合原生互動的功能整合至 iOS 原生環境中，以提供使用者 iOS 原生通知與桌面小工具的便利選項，作為 Open NCCU Web App 的延伸產品。',
    stats: [],
    features: [
      { icon: '/icons/products/open-kit.svg', label: 'Open Kit' },
      { icon: '/icons/products/placeholder.svg', label: '政大圖書館人流' },
      { icon: '/icons/products/placeholder.svg', label: '天氣 Widget' },
      { icon: '/icons/products/placeholder.svg', label: '推播通知' },
    ],
    ctaText: '點選功能開始體驗',
  },
  {
    id: 'what-to-eat',
    title: '大學吃什麼',
    subtitle: '終結選擇困難的校園美食指南',
    description:
      '專為台灣各大專院校學生設計的美食評價與決策平台，透過整合校園周邊的餐飲數據，並整合美食篩選、推薦、共享美食清單和隨機抽選功能，協助使用者在短時間獲取最符合當下需求的美味選擇！',
    stats: [],
    features: [
      { icon: '/icons/products/what-to-eat.svg', label: '大學吃什麼' },
      { icon: '/icons/products/placeholder.svg', label: '共享清單' },
      { icon: '/icons/products/placeholder.svg', label: '餐廳篩選' },
      { icon: '/icons/products/placeholder.svg', label: '隨機抽選' },
    ],
    ctaText: '點選功能開始體驗',
  },
]

/** UR研究報告 has special button-style features instead of icon grid */
export const urReportButtons = [
  { label: '場地租借系統' },
  { label: '學生趨勢報告' },
]
