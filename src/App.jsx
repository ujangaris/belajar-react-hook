import "./App.css"
import ClassCounter from "./components/ClassCounter"
import ClassCounterOne from "./components/ClassCounterOne"
import ClassCounterTwo from "./components/ClassCounterTwo"
import ClassMouse from "./components/ClassMouse"
import HooCounterThree from "./components/HooCounterThree"
import HookCounter from "./components/HookCounter"
import HookCounterFour from "./components/HookCounterFour"
import HookCounterOne from "./components/HookCounterOne"
import HookCounterTwo from "./components/HookCounterTwo"
import HookMouse from "./components/HookMouse"
import MouseContainer from "./components/MouseContainer"
import IntervalClassCounter from "./components/IntervalClassCounter"
import IntervalHookCounter from "./components/IntervalHookCounter"

function App() {
  return (
    <div className="App">
      <IntervalClassCounter />
      <IntervalHookCounter />
    </div>
  )
}

export default App
