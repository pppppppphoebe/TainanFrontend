import type { Dispatch, SetStateAction } from 'react';
import type { Restaurant } from '../types'
import SlotItem from './SlotItem'

// ===== 匯出的動畫函式 =====


// 開始轉輪：每隔 speedMS 毫秒更新一次 slots
export function startSpin(
  slotQueue: Restaurant[],
  setSlots: Dispatch<SetStateAction<Restaurant[]>>,
  speedMS: number = 50
) 
{
  let index = 0
  const timer = setInterval(() => {
    const pos = index % slotQueue.length;
    setSlots((prev) => {
      if (prev.length < 5) return prev; // 安全檢查
      return [slotQueue[pos], prev[0], prev[1], prev[2], prev[3]];
    });
    index++;
  }, speedMS);
  return timer;
}

// 減速動畫：越來越慢，最後停在 finalSlot
export async function decelerateSpin(
  finalSlot: Restaurant[],
  setSlots: Dispatch<SetStateAction<Restaurant[]>>
) {
  // 減速步長，數值代表延遲毫秒數
  const speeds = [100, 200, 300, 400, 500, 600, 700]
  
  for (let s = 0; s < Math.min(speeds.length, finalSlot.length); s++) {
    await new Promise(resolve => setTimeout(resolve, speeds[s]))
    setSlots((prev) => {
      // 確保至少有 4 個元素可以偏移
      const base = prev.length >= 4 ? prev.slice(0, 4) : prev
      return [finalSlot[s], ...base]
    })
  }
}
// ===== SlotDisplay 元件 =====

type Props = {
  slots: Restaurant[]
  onSelectMiddle: (restaurant: Restaurant) => void
}

export default function SlotDisplay({ slots, onSelectMiddle }: Props) {
  if (slots.length === 0) return null

  // 自動判斷中間位置：如果是 5 格就是 2，如果是 3 格就是 1
  const middleIndex = Math.floor(slots.length / 2)

  return (
    <div className="slot-machine">
      <div className="slot-lights" />
      <div className="slot-window">
        {slots.map((r, i) => (
          <SlotItem
            key={i}
            restaurant={r}
            isMiddle={i === middleIndex}
            onClick={() => onSelectMiddle(r)}
          />
        ))}
      </div>
      <div className="slot-footer" />
    </div>
  )
}
