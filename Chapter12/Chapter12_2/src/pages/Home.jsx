import { Suspense } from 'react'
import { PostFeed } from '@/components/post/PostFeed.jsx'
import { ThemeContext } from '@/contexts/ThemeContext.js'

export function Home() {
  return (
    <Suspense fallback={<strong>Loading posts...</strong>}>
      <ThemeContext.Provider value={{ primaryColor: 'salmon' }}>
        <PostFeed featured />
      </ThemeContext.Provider>
      <PostFeed />
    </Suspense>
  )
}
