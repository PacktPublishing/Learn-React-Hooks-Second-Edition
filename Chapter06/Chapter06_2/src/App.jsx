import { useState, useReducer, useEffect } from 'react'
import { UserBar } from './components/user/UserBar.jsx'
import { CreatePost } from './components/post/CreatePost.jsx'
import { PostList } from './components/post/PostList.jsx'
import { postsReducer } from './reducers.js'
import { ThemeContext } from './contexts/ThemeContext.js'
import { UserContext } from './contexts/UserContext.js'

export function App() {
  const [posts, dispatch] = useReducer(postsReducer, [])
  const [username, setUsername] = useState('')

  useEffect(() => {
    fetch('/api/posts')
      .then((response) => response.json())
      .then((posts) => dispatch({ type: 'FETCH_POSTS', posts }))
  }, [])

  const featuredPosts = posts.filter((post) => post.featured).reverse()
  const regularPosts = posts.filter((post) => !post.featured).reverse()

  return (
    <UserContext.Provider value={[username, setUsername]}>
      <ThemeContext.Provider value={{ primaryColor: 'black' }}>
        <div style={{ padding: 8 }}>
          <UserBar />
          <br />
          {username && <CreatePost dispatch={dispatch} />}
          <hr />
          <ThemeContext.Provider value={{ primaryColor: 'salmon' }}>
            <PostList posts={featuredPosts} />
          </ThemeContext.Provider>
          <PostList posts={regularPosts} />
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}
