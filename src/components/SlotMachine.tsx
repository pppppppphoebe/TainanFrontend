/**定義流程 */
import { useState, useEffect, useRef } from 'react'
import type { Restaurant, GameState } from '../types'
import { fetchMultipleRestaurants } from '../api'
import LoadingScreen from './LoadingScreen'
import SlotDisplay from './SlotDisplay'
import SpinButton from './SpinButton'
import RestaurantModal from './RestaurantModal'
import { startSpin, decelerateSpin } from './SlotDisplay'

export default function SlotMachine() {
    // 固定顯示 5 筆資料
    const [slots, setSlots] = useState<Restaurant[]>([])
    const [gameState, setGameState] = useState<GameState>('loading')
    const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null)
    const [spinBtnDisable, setSpinBtnDisable] = useState<boolean>(false)

    const slotWheel = useRef<Restaurant[]>([])
    const finalData = useRef<Restaurant[]>([])
    const spinTimer = useRef<number | null>(null)

    // 第一次進畫面初始化
    useEffect(() => {
        const init = async () => {
            try {
                // 固定取 5 筆
                let data = await fetchMultipleRestaurants(5)
                setSlots(data)
                setGameState('waiting')
            } catch {
                setTimeout(init, 60000)
            }
        }
        if (gameState === 'loading') {
            init()
        }
    }, [])

    // 按鈕轉輪事件
    const handleSpin = async () => {
        setSpinBtnDisable(true)
        if (spinTimer.current) clearInterval(spinTimer.current)
        const slotdata = await fetchMultipleRestaurants(15)
        slotWheel.current = slotdata.slice(0,14)
        finalData.current = slotdata.slice(15)
        setGameState('rolling')
        setSpinBtnDisable(false)
        spinTimer.current = startSpin(slotWheel.current, setSlots, 50) 
    }

    // 按鈕停止事件
    const handleStop = async () => {
        setSpinBtnDisable(true)
        if (spinTimer.current) clearInterval(spinTimer.current)
        setGameState('stop_wheel')
        // 固定取 5 筆結果
        //const finalData = await fetchMultipleRestaurants(5) 
        spinTimer.current = await decelerateSpin(finalData.current, setSlots)
        if (spinTimer.current) clearInterval(spinTimer.current)
        setGameState('waiting')
        setSpinBtnDisable(false)
    }

    if (gameState === 'loading') {
        return <LoadingScreen />
    }

    return (
        <div className="app-container">
            <h1 className="app-title">台南餐廳抽選器</h1>

            <SlotDisplay 
                slots={slots} 
                onSelectMiddle={(r) => {
                    if (gameState === 'waiting') {
                        setSelectedRestaurant(r)
                    }
                }} 
            />
            
            <SpinButton
                gameState={gameState}
                onClick={gameState === 'rolling' ? handleStop : handleSpin}
                disabled={spinBtnDisable}
            />

            <RestaurantModal 
                restaurant={selectedRestaurant} 
                onClose={() => setSelectedRestaurant(null)} 
            />
        </div>
    )
}
