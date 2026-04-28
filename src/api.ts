import type{ Restaurant }  from './types'

// 改成你的 Render API 網址
const API_URL = 'https://tainanbackend.onrender.com'

// 跟後端要一筆隨機餐廳
export async function fetchRandomRestaurant(): Promise<Restaurant> {
  try {
    const res = await fetch(`${API_URL}/api/restaurants/random`)
    if (!res.ok) throw new Error('API 錯誤')
    return await res.json()
  } catch (error) {
    console.error('取得餐廳失敗:', error)
    throw error
  }
}

// 一次要很多筆隨機餐廳
// export async function fetchMultipleRestaurants(count: number): Promise<Restaurant[]> {
//   const promises = Array.from({ length: count }, () => fetchRandomRestaurant())
//   return Promise.all(promises)
// }
// 一次要很多筆隨機餐廳
export async function fetchMultipleRestaurants(count: number): Promise<Restaurant[]> {
  try {
    const res = await fetch(`${API_URL}/api/restaurants/random?count=${count}`)
    if (!res.ok) throw new Error('API 錯誤')
    return await res.json()
  } catch (error) {
    console.error('取得餐廳失敗:', error)
    throw error
  }
}