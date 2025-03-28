import { useState, useReducer } from 'react'
import { UserBar } from './user/UserBar.jsx'
import { CreatePost } from './post/CreatePost.jsx'
import { PostList } from './post/PostList.jsx'
import { postsReducer } from './reducers.js'

const defaultPosts = [
  {
    title: 'React Hooks',
    content: 'The greatest thing since sliced bread!',
    author: 'Daniel Bugl',
  },
  {
    title: 'Using React Fragments',
    content: 'Keeping the DOM tree clean!',
    author: 'Daniel Bugl',
  },
]

export function App() {
  const [posts, dispatch] = useReducer(postsReducer, defaultPosts)
  const [username, setUsername] = useState('')

  return (
    <div style={{ padding: 8 }}>
      <UserBar username={username} setUsername={setUsername} />
      <br />
      {username && <CreatePost username={username} dispatch={dispatch} />}
      <hr />
      <PostList posts={posts} />
    </div>
  )
}
