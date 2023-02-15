// rfce
import React, { useEffect, useState } from "react"

function HookMouse() {
  // deklarasi hook
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  // function logMousePosition
  const logMousePosition = (e) => {
    console.log("Mousea event")
    setX(e.clientX)
    setY(e.clientY)
  }
  // useEffect
  useEffect(() => {
    console.log("useEffect called")
    window.addEventListener("mousemove", logMousePosition)
  }, [])
  return (
    <div>
      <h1>Hook Mouse</h1>
      {/* tampilkan korn=dinat mose */}
      Hooks X = {x}, Y = {y}
    </div>
  )
}

export default HookMouse
