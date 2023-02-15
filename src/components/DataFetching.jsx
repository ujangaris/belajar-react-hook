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
    <div>
      {/* pasang setId didalam onChange pada input text */}
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      {/* pasang functioin handleClick pada button onClick */}
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <h1>{post.title}</h1>
      {/* tampilkan data dalam bentuk un order list dengan map */}
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default DataFetching
