// rce
import React, { Component } from "react"

class IntervalClassCounter extends Component {
  // constructor
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  //   componentDidMount
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }
  // componentWillUnmount
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  //   function tick
  tick = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    return (
      <div>
        {/* mencetak nilai count */}
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}

export default IntervalClassCounter
