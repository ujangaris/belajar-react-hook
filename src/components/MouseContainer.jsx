// rfce
import React, { useState } from "react"
import HookMouse from "./HookMouse"

function MouseContainer() {
  // deklarasikan hook
  const [display, setDisplay] = useState(true)
  return (
    <div>
      {/* button setDisplay  dengan kondisi*/}
      <button onClick={() => setDisplay(!display)}>Toogle display</button>
      {display && <HookMouse />}
    </div>
  )
}

export default MouseContainer
