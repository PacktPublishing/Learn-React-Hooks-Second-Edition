import { Fragment } from 'react'
import { PostListItem } from './PostListItem.jsx'

export function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((post, index) => (
        <Fragment key={`post-${index}`}>
          <PostListItem {...post} />
          <hr />
        </Fragment>
      ))}
    </div>
  )
}
