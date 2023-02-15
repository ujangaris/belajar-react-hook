//rfce
import React, { useEffect, useState } from "react"
import axios from "axios"
function DataFetching() {
  // deklarasi hook
  const [posts, setPosts] = useState([])

  //   useEffect
  useEffect(() => {
    // panggil link api dari json placeholder
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      //   handle response success
      .then((res) => {
        console.log(res)
        setPosts(res.data)
      })
      //   handle response error
      .catch((err) => {
        console.log(er)
      })
  }, [])
  return (
    <div>
      {/* tampilkan data dalam bentuk un order list dengan map */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default DataFetching
