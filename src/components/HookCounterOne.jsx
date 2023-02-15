// rfce
import React, { useEffect, useState } from "react"

function HookCounterOne() {
  // deklarasi hook
  const [count, setCount] = useState(0)
  //   use effect
  //   useEffect digunakan untuk menjalankan efek samping atau efek setelah komponen render.
  useEffect(() => {
    document.title = `You Clicked ${count} Times`
  })
  return (
    <div>
      <h1>Fucntional counter</h1>
      {/* pasang setCount pada button onClick */}
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  )
}

export default HookCounterOne
