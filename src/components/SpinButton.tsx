/**定義按鈕事件 */
import type { GameState } from '../types'

type Props = {
    gameState: GameState
    onClick: () => void
    disabled: boolean
}

export default function SpinButton({ gameState, onClick , disabled}: Props) {
    const label = gameState === 'rolling' ? 'STOP' : 'START'
    //const disabled = gameState === 'stop_wheel'
    return (
        <button className="spin-button" onClick={onClick} disabled={disabled}>
        {label}
        </button>
    )
}