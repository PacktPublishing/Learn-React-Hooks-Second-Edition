import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { ErrorBoundary } from 'react-error-boundary'
import {
  QueryClientProvider,
  QueryErrorResetBoundary,
} from '@tanstack/react-query'
import { FetchErrorNotice } from './FetchErrorNotice.jsx'
import { queryClient } from './api.js'
import { UserBar } from './components/user/UserBar.jsx'
import { CreatePost } from './components/post/CreatePost.jsx'
import { ThemeContext } from './contexts/ThemeContext.js'
import { UserContext } from './contexts/UserContext.js'
import { Home } from './pages/Home.jsx'

export function App() {
  const [username, setUsername] = useState('')

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={[username, setUsername]}>
        <ThemeContext.Provider value={{ primaryColor: 'black' }}>
          <BrowserRouter>
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
                    <Routes>
                      <Route index element={<Home />} />
                    </Routes>
                  </ErrorBoundary>
                )}
              </QueryErrorResetBoundary>
            </div>
          </BrowserRouter>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </QueryClientProvider>
  )
}
