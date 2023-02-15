// rec
import React, { Component } from "react"

class ClassCounterOne extends Component {
  // buat constructor
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      name: "",
    }
  }
  //   buat component did mount , methiod ini dipanggil setelah komponen berhasil dirender di browser untuk pertama kalinya.
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
  }
  //   buat component did update , Method "componentDidUpdate(prevProps, prevState)" dipanggil setiap kali ada perubahan pada state count di komponen tersebut.
  componentDidUpdate(prevProps, prevState) {
    // kondisi untuk handle form input name
    if (prevState.count !== this.state.count) {
      console.log("Updating document title")
      document.title = `Clicked ${this.state.count} times`
    }
  }
  render() {
    return (
      <div>
        <h1>Class Counter One</h1>
        {/* pasang onChange pada inputan */}
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value })
          }}
        />
        {/* panggil setState pada button onClick */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click {this.state.count}
        </button>
      </div>
    )
  }
}

export default ClassCounterOne
