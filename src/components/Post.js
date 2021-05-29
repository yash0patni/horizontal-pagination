import React from 'react'
import classes from './Post.module.css'

const Post = ({ post }) => {
  return (
    <div className={classes.post}>
      <p>{post.id}</p>
      <p>{post.title}</p>
    </div>
  )
}

export default Post
