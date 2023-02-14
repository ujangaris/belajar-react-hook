import React, { Component } from "react"

class ClassCounterTwo extends Component {
  // constructor
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Class Counter </h1>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounterTwo
