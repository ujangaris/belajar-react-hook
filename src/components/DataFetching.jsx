//rfce
import React, { useEffect, useState } from "react"
import axios from "axios"
function DataFetching() {
  // deklarasi hook
  const [post, setPost] = useState({})
  // deklarasi hook untuk id
  const [id, setId] = useState(1)
  //   deklarasi id untuk button klik
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  //   buat function handleClick
  const handleClick = () => {
    setIdFromButtonClick(id)
  }

  //   useEffect
  useEffect(() => {
    // panggil link api dari json placeholder
    // pada bagian id, ganti dengan hook state idFromButtonClick
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      //   handle response success
      .then((res) => {
        console.log(res)
        setPost(res.data)
      })
      //   handle response error
      .catch((err) => {
        console.log(er)
      })
  }, [idFromButtonClick])
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          {/* pasang setId didalam onChange pada input text */}
          <div className="form-group">
            <label for="exampleInputEmail1" className="mb-2">
              <h1>Masukan ID</h1>
            </label>

            <input
              style={{ width: "400px" }}
              className="form-control"
              type="number"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          {/* pasang functioin handleClick pada button onClick */}
          <form>
            <button
              className="btn btn-primary mt-5"
              type="button"
              onClick={handleClick}
            >
              Fetch Post
            </button>
          </form>
          <h2>{post.title}</h2>
          {/* tampilkan data dalam bentuk un order list dengan map */}
          {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
        </div>
      </div>
    </div>
  )
}

export default DataFetching
