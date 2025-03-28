import { Fragment } from 'react'
import { Post } from './Post.jsx'

export function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((post, index) => (
        <Fragment key={`post-${index}`}>
          <Post {...post} />
          <hr />
        </Fragment>
      ))}
    </div>
  )
}
