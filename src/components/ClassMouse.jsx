// rce
import React, { Component } from "react"

class ClassMouse extends Component {
  // constructor
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
    }
  }
  // function logMousePosition
  logMousePosition = (e) => {
    this.setState({ x: e.clientX, y: e.clientY })
  }
  //   componentDidMount
  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePosition)
  }
  // component will mount
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logMousePosition)
  }
  render() {
    return (
      <div>
        <h1>Class Mouse</h1>
        {/* tampilkan korn=dinat mose */}X - {this.state.x} Y - {this.state.y}
      </div>
    )
  }
}

export default ClassMouse
