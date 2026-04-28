/**定義loading畫面*/ 
import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [dots, setDots] = useState('.')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '.'
        return prev + '.'
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loading-screen">
      <div className="loading-icon"></div>
      <div style={{ minWidth: '120px', textAlign: 'left' }}>
        Loading{dots}
      </div>
    </div>
  )
}
