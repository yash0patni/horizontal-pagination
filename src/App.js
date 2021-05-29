import React, { useState } from 'react'
import PaginateContainer from './components/PaginateContainer.js'
import data from './data/data.js'
import './App.css'

const App = () => {
  // console.log(data)
  const [posts] = useState(data)
  return <PaginateContainer posts={posts} />
}

export default App
