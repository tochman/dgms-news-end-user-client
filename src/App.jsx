import React from 'react'
import Articles from './Components/Articles.jsx'
import { Routes, Route } from 'react-router-dom'
import Article from './Components/Article.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/article/Deep%20Work" element={<Article/>} />
      </Routes>
    </div>
  )
}
export default App
