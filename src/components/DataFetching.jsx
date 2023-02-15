//rfce
import React, { useEffect, useState } from "react"
import axios from "axios"
function DataFetching() {
  // deklarasi hook
  const [post, setPost] = useState({})
  // deklarasi hook untuk id
  const [id, setId] = useState(1)
  //   useEffect
  useEffect(() => {
    // panggil link api dari json placeholder
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      //   handle response success
      .then((res) => {
        console.log(res)
        setPost(res.data)
      })
      //   handle response error
      .catch((err) => {
        console.log(er)
      })
  }, [id])
  return (
    <div>
      {/* pasang setId didalam onChange pada input text */}
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
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
