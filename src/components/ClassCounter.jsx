// rec
import React, { Component } from "react"

class ClassCounter extends Component {
  // buat contructor
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  // function incrments dari counter
  incrementCount = () => {
    this.setState({
      // menambahkan nilai state + 1
      count: this.state.count + 1,
    })
  }
  render() {
    return (
      <div>
        {/* pasang function incrementCount pada buton onClick */}
        {/* ini adalah elemen tombol HTML yang menampilkan nilai count dari state dan memanggil metode incrementCount ketika tombol diklik. */}
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter
