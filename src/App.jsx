

import { Routes, Route } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { BlogPage } from './pages/BlogPage'

import Layout from "./components/Layout";
import SinglePage from './pages/SinglePage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posts" element={<BlogPage />} />
          <Route path="/posts/:id" element={<SinglePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  )
}


export default App