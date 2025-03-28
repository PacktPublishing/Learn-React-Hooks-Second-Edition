import { useState } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api.js'
import { UserBar } from './components/user/UserBar.jsx'
import { CreatePost } from './components/post/CreatePost.jsx'
import { PostFeed } from './components/post/PostFeed.jsx'
import { ThemeContext } from './contexts/ThemeContext.js'
import { UserContext } from './contexts/UserContext.js'

export function App() {
  const [username, setUsername] = useState('')

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={[username, setUsername]}>
        <ThemeContext.Provider value={{ primaryColor: 'black' }}>
          <div style={{ padding: 8 }}>
            <UserBar />
            <br />
            {username && <CreatePost />}
            <hr />
            <ThemeContext.Provider value={{ primaryColor: 'salmon' }}>
              <PostFeed featured />
            </ThemeContext.Provider>
            <PostFeed />
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </QueryClientProvider>
  )
}
