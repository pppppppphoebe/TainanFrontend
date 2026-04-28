// 餐廳資料型別
export type Restaurant = {
  id: number
  name: string
  address: string
  openingHours: string | null
  rating: number | null
  reviewCount: number
}

// 遊戲狀態
export type GameState = 'loading' | 'waiting' | 'rolling' | 'stop_wheel'