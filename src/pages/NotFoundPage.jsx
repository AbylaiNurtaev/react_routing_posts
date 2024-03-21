import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div>
      <h1>NotFoundPage</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

export {NotFoundPage}