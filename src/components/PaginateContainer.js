import React, { useState, useEffect } from 'react'
import classes from './PaginateContainer.module.css'
import PostList from './PostList'

const PaginateContainer = ({ posts }) => {
  const [postPerPage, setPostPerPage] = useState(4)
  const [currentPage, setCurrentPage] = useState(1)

  const lastIndex = postPerPage * currentPage
  const firstIndex = lastIndex - postPerPage

  const totalPost = posts.length
  const lastPage = Math.ceil(totalPost / postPerPage)
  // console.log(totalPost, lastPage)
  // console.log(window.screen)

  const currentPosts = posts.slice(firstIndex, lastIndex)

  useEffect(() => {
    const width = window.screen.width
    if (width <= 600) {
      setPostPerPage(1)
    } else if (width <= 1200) {
      setPostPerPage(2)
    } else if (width <= 1800) {
      setPostPerPage(4)
    }
  }, [])

  return (
    <>
      <div className={classes.container}>
        {currentPage > 1 && (
          <button
            className={[classes.btn, classes.prev].join(' ')}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            {'<'}
          </button>
        )}
        <PostList posts={currentPosts} />
        {currentPage < lastPage && (
          <button
            className={[classes.btn, classes.next].join(' ')}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {'>'}
          </button>
        )}
      </div>
    </>
  )
}

export default PaginateContainer
