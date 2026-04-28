/**slot元件 */
import type { Restaurant } from '../types'

type Props = {
  restaurant: Restaurant
  isMiddle: boolean
  onClick: () => void
}

export default function SlotItem({ restaurant, isMiddle, onClick }: Props) {
  return (
    <div
      className={`slot-item ${isMiddle ? 'slot-item-middle' : ''}`}
      onClick={isMiddle ? onClick : undefined}
    >
      {restaurant.name}
    </div>
  )
}