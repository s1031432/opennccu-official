// ─────────────────────────────────────────────────────────────────────────────
// Team member & role data
//
// 頭像圖片放在 /public/avatars/ 目錄，命名規則：
//   - 檔名用英文小寫，例如 chen-xuan-yu.jpg
//   - 建議尺寸 400x400px，正方形，JPG 或 WebP
//   - avatarUrl 填 "/avatars/chen-xuan-yu.jpg"（相對於 public）
//   - 尚未有照片時填 null，會用 initials + gradient 作為 fallback
// ─────────────────────────────────────────────────────────────────────────────

export interface TeamMember {
  /** 中文姓名 */
  name: string
  /** 職稱，例如 "BE Lead"、"Frontend Engineer" */
  title: string
  /** 英文縮寫（1~2 字），用於頭像 fallback */
  initials: string
  /** 頭像圖片路徑（相對於 public），null 表示尚無照片 */
  avatarUrl: string | null
  /** 漸層 class，用於 fallback 頭像背景，例如 "from-[#7C6EDB] to-[#5B4FC7]" */
  gradientClass: string
}

export interface RoleData {
  id: string
  name: string
  description: string
  icon: 'sparkles' | 'bars' | 'dots'
  color: string
  colorRgb: string
  colorLight: string
  members: TeamMember[]
}

export interface TeamGroup {
  id: string
  name: string
  description: string
  icon: 'sparkles' | 'bars' | 'dots'
  color: string
  colorRgb: string
  colorLight: string
  roles: string[]
}

// ── Gradient palette ────────────────────────────────────────────────────────
// 用於分配 fallback 頭像背景色，會循環使用
const GRADIENTS = [
  'from-[#7C6EDB] to-[#5B4FC7]',  // purple
  'from-[#4ECBA5] to-[#2EA87E]',  // mint
  'from-[#6CB4EE] to-[#4A90D9]',  // blue
  'from-[#FFB366] to-[#E6913D]',  // orange
  'from-[#F2A7C3] to-[#D87BA0]',  // pink
  'from-[#7EDCBA] to-[#4ECBA5]',  // light mint
  'from-[#A8B8D8] to-[#7A8FC4]',  // slate
  'from-[#F5C26B] to-[#E0A644]',  // gold
  'from-[#B8A9D4] to-[#8A7BC0]',  // lavender
  'from-[#FF8A80] to-[#D45050]',  // coral
  'from-[#80DEEA] to-[#4DB6AC]',  // teal
  'from-[#CE93D8] to-[#AB47BC]',  // violet
]

function gradient(index: number): string {
  return GRADIENTS[index % GRADIENTS.length]
}

// ── 團隊群組 ────────────────────────────────────────────────────────────────
export const teamGroups: TeamGroup[] = [
  {
    id: 'product', name: 'Product\nTeam',
    description: '產品團隊，從使用者需求出發，規劃與設計產品功能',
    icon: 'sparkles', color: '#59CC95', colorRgb: '89, 204, 149', colorLight: '#94CCB9',
    roles: ['ui', 'dev'],
  },
  {
    id: 'insight', name: 'Insight\nTeam',
    description: '洞察團隊，透過數據分析與使用者研究驅動產品決策',
    icon: 'bars', color: '#5AABB6', colorRgb: '90, 171, 182', colorLight: '#94CCB9',
    roles: ['ur', 'mkt'],
  },
  {
    id: 'operation', name: 'Operation\nTeam',
    description: '營運團隊，統籌組織運作、專案管理與對外關係',
    icon: 'dots', color: '#7188B4', colorRgb: '113, 136, 180', colorLight: '#9AAFCF',
    roles: ['pm', 'pr'],
  },
]

// ── 角色與成員 ──────────────────────────────────────────────────────────────
export const roleCards: RoleData[] = [
  {
    id: 'ui', name: 'UI',
    description: '介面設計師，打造美觀且易用的使用者介面',
    icon: 'sparkles', color: '#59CC95', colorRgb: '89, 204, 149', colorLight: '#94CCB9',
    members: [
      { name: '王筱涵', title: 'UI Lead', initials: 'XH', avatarUrl: null, gradientClass: gradient(4) },
    ],
  },
  {
    id: 'dev', name: 'DEV',
    description: '工程師團隊，建構穩定可靠的系統架構與數位服務',
    icon: 'sparkles', color: '#59CC95', colorRgb: '89, 204, 149', colorLight: '#94CCB9',
    members: [
      { name: '陳宣羽', title: 'DEV Lead',           initials: 'XY', avatarUrl: null, gradientClass: gradient(0) },
      { name: '江宗樺', title: 'Engineer',          initials: 'ZH', avatarUrl: null, gradientClass: gradient(1) },
      { name: '張淮竣', title: 'Engineer',          initials: 'HJ', avatarUrl: null, gradientClass: gradient(2) },
      { name: '吳欣穎', title: 'Engineer',          initials: 'XY', avatarUrl: null, gradientClass: gradient(3) },
      { name: '蘇胤翔', title: 'Engineer',          initials: 'YX', avatarUrl: null, gradientClass: gradient(4) },
      { name: '黃翊唐', title: 'Engineer',          initials: 'YT', avatarUrl: null, gradientClass: gradient(5) },
      { name: '蔡安德', title: 'Engineer',          initials: 'AD', avatarUrl: null, gradientClass: gradient(6) },
      { name: '陳乃嘉', title: 'Engineer',          initials: 'NJ', avatarUrl: null, gradientClass: gradient(7) },
      { name: '楊玉琦', title: 'Engineer',          initials: 'YQ', avatarUrl: null, gradientClass: gradient(8) },
      { name: '陳亮吟', title: 'Engineer',          initials: 'LY', avatarUrl: null, gradientClass: gradient(9) },
      { name: '張馨尹', title: 'Engineer',          initials: 'XY', avatarUrl: null, gradientClass: gradient(10) },
      { name: '吳武峰', title: 'Engineer',          initials: 'WF', avatarUrl: null, gradientClass: gradient(11) },
    ],
  },
  {
    id: 'ur', name: 'UR',
    description: '使用者研究員，深入了解使用者需求與行為洞察',
    icon: 'bars', color: '#5AABB6', colorRgb: '90, 171, 182', colorLight: '#94CCB9',
    members: [
      { name: '吳承翰', title: 'UR Lead', initials: 'CH', avatarUrl: null, gradientClass: gradient(6) },
    ],
  },
  {
    id: 'mkt', name: 'MKT',
    description: '行銷團隊，負責品牌推廣、社群經營與內容產出',
    icon: 'bars', color: '#5AABB6', colorRgb: '90, 171, 182', colorLight: '#94CCB9',
    members: [
      { name: '黃思穎', title: 'MKT Lead', initials: 'SY', avatarUrl: null, gradientClass: gradient(7) },
    ],
  },
  {
    id: 'pm', name: 'PM',
    description: '專案經理，負責專案規劃、進度管理與協調溝通',
    icon: 'dots', color: '#7188B4', colorRgb: '113, 136, 180', colorLight: '#9AAFCF',
    members: [
      { name: '林子晴', title: 'PM Lead', initials: 'TQ', avatarUrl: null, gradientClass: gradient(2) },
    ],
  },
  {
    id: 'pr', name: 'PR',
    description: '公關團隊，維護組織形象與對外關係溝通',
    icon: 'dots', color: '#7188B4', colorRgb: '113, 136, 180', colorLight: '#9AAFCF',
    members: [
      { name: '成員 B', title: 'PR Lead', initials: 'B', avatarUrl: null, gradientClass: gradient(8) },
    ],
  },
]

// ── Founder ─────────────────────────────────────────────────────────────────
export const founderMembers: TeamMember[] = [
  { name: '黃翊唐', title: 'Founder', initials: 'YT', avatarUrl: null, gradientClass: 'from-[#FFD700] to-[#F5A623]' },
  { name: '范愷祐', title: 'Founder', initials: 'KY', avatarUrl: null, gradientClass: 'from-[#4ECBA5] to-[#2EA87E]' },
]
