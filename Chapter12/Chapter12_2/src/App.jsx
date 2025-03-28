import { BrowserRouter, Routes, Route } from 'react-router'
import { ErrorBoundary } from 'react-error-boundary'
import {
  QueryClientProvider,
  QueryErrorResetBoundary,
} from '@tanstack/react-query'
import { useUser } from './hooks/user.js'
import { FetchErrorNotice } from './FetchErrorNotice.jsx'
import { queryClient } from './api.js'
import { UserBar } from './components/user/UserBar.jsx'
import { CreatePost } from './components/post/CreatePost.jsx'
import { NavBarLink } from './components/NavBarLink.jsx'
import { ThemeContext } from './contexts/ThemeContext.js'
import { Home } from './pages/Home.jsx'
import { ViewPost } from './pages/ViewPost.jsx'
import { Demo } from './pages/Demo.jsx'
import { Search } from './pages/Search.jsx'

export function App() {
  const { isLoggedIn } = useUser()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ primaryColor: 'black' }}>
        <BrowserRouter>
          <div style={{ padding: 8 }}>
            <NavBarLink to='/'>Home</NavBarLink>
            {' | '}
            <NavBarLink to='/search'>Search</NavBarLink>
            {' | '}
            <NavBarLink to='/demo'>Demo</NavBarLink>
            <hr />
            <UserBar />
            <br />
            {isLoggedIn && <CreatePost />}
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
                    <Route path='demo' element={<Demo />} />
                    <Route path='search' element={<Search />} />
                  </Routes>
                </ErrorBoundary>
              )}
            </QueryErrorResetBoundary>
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>
    </QueryClientProvider>
  )
}
