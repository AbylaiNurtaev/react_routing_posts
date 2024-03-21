import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function BlogPage() {
  async function getPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    setPosts(data.slice(0, 15));
  }
  useEffect(() => {
    getPosts()
  }, [])

  const [posts, setPosts] = useState([])
  return (
    <div>
      <h1>BlogPage</h1>
      {posts.map((elem, index) => {
        return(
          <div key={index}>
          <Link to={'/posts/'+elem.id+'?completed='+elem.completed}>{elem.title}</Link>
          </div>
        )
      })}
    </div>
  )
}

export { BlogPage }