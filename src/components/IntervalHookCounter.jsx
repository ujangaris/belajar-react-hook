// rfce
import React, { useEffect, useState } from "react"

function IntervalHookCounter() {
  // deklarasi hook
  const [count, setCount] = useState(0)
  // deklarasikan fungsi tick
  const tick = () => {
    setCount((prevCount) => prevCount + 1)
  }
  // buat useEffect
  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div>
      {/* cetak count */}
      <h1>{count}</h1>
    </div>
  )
}

export default IntervalHookCounter
