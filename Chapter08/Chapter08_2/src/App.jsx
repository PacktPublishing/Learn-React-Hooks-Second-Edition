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
import { NavBarLink } from './components/NavBarLink.jsx'
import { ThemeContext } from './contexts/ThemeContext.js'
import { UserContext } from './contexts/UserContext.js'
import { Home } from './pages/Home.jsx'
import { ViewPost } from './pages/ViewPost.jsx'

export function App() {
  const [username, setUsername] = useState('')

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={[username, setUsername]}>
        <ThemeContext.Provider value={{ primaryColor: 'black' }}>
          <BrowserRouter>
            <div style={{ padding: 8 }}>
              <NavBarLink to='/'>Home</NavBarLink>
              <hr />
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
                      <Route path='post/:id' element={<ViewPost />} />
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
