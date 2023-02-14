// rfce
import React, { useState } from "react"

function HookCounterTwo() {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)
  //   function increment
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      // "prevCount" adalah nilai state sebelumnya,
      // kemudian nilai tersebut akan ditambahkan 1 dan menjadi nilai state yang baru.
      setCount((prevCount) => prevCount + 1)
    }
  }
  return (
    <div>
      <h1>Functional Counter </h1>
      {/* pasang  setCount pada buton onClick */}
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decement
      </button>
      {/* pasang function incrementFive pada buton onClick */}
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo
