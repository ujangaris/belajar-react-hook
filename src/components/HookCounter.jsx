// rfce
import React, { useState } from "react"

function HookCounter() {
  // hook state
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* pada event onClick tombol, fungsi setCount akan dipanggil dengan nilai count + 1, 
    yang akan memperbarui nilai state count dengan nilai baru tersebut. */}
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter
