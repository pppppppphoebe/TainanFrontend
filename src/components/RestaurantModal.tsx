/**定義餐廳詳細資訊界面 */
import type { Restaurant } from '../types'

type Props = {
    restaurant: Restaurant | null
    onClose: () => void
}

export default function RestaurantModal({ restaurant, onClose }: Props) {
    if (!restaurant) return null

    return (
        <>
        <div className="modal-overlay" onClick={onClose} />
        <div className="modal-content">
            <h2>{restaurant.name}</h2>
            <div><strong>📍 地址：</strong>{restaurant.address}</div>
            {restaurant.openingHours && <div><strong>🕐 營業時間：</strong>{restaurant.openingHours}</div>}
            {restaurant.rating && <div><strong>⭐ 評分：
                </strong>{restaurant.rating}（{restaurant.reviewCount} 則評論）</div>}
            
            <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.name + ' ' + restaurant.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="google-maps-btn"
            >
                📍 在 Google 地圖中開啟
            </a>

            <button className="modal-close-btn" onClick={onClose}>關閉</button>
        </div>
        </>
    )
}