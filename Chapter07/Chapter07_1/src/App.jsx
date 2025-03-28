import { useState, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import {
  QueryClientProvider,
  QueryErrorResetBoundary,
} from '@tanstack/react-query'
import { FetchErrorNotice } from './FetchErrorNotice.jsx'
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
            <QueryErrorResetBoundary>
              {({ reset }) => (
                <ErrorBoundary
                  onReset={reset}
                  fallbackRender={FetchErrorNotice}
                >
                  <Suspense fallback={<strong>Loading posts...</strong>}>
                    <ThemeContext.Provider value={{ primaryColor: 'salmon' }}>
                      <PostFeed featured />
                    </ThemeContext.Provider>
                    <PostFeed />
                  </Suspense>
                </ErrorBoundary>
              )}
            </QueryErrorResetBoundary>
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </QueryClientProvider>
  )
}
