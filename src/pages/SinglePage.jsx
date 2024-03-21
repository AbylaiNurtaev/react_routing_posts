import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function SinglePage() {
  async function getPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    setPosts(data.slice(0, 15));
  }
  
  const [posts, setPosts] = useState([])
  const [currentPost, setCurrentPost] = useState()
  const {id} = useParams()


  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const completed = params.get("completed")
  console.log(completed);

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(() => {
    setCurrentPost(posts.find(elem => elem.id === parseInt(id)))
  }, [posts, id])

  return (
    <div>
      <h1>PostPage</h1>
      {currentPost ? <p>{currentPost.title}</p> : <p>Loading...</p>}
    </div>
  )
}

export default SinglePage