// rfce
import React, { useEffect, useState } from "react"

function HookCounterOne() {
  // deklarasi hook name dan count
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  //   use effect
  //   useEffect digunakan untuk menjalankan efek samping atau efek setelah komponen render.
  useEffect(() => {
    console.log("useEffect- updating document title")
    document.title = `You Clicked ${count} Times`
  }, [count])
  return (
    <div>
      <h1>Fucntional counter</h1>
      {/* pasang onChange pada inputan */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* pasang setCount pada button onClick */}
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  )
}

export default HookCounterOne
