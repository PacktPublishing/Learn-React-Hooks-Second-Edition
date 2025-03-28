import { useState, Suspense, useDeferredValue } from 'react'
import { PostSearchResults } from './PostSearchResults.jsx'

export function PostSearch() {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <Suspense fallback={<h4>loading...</h4>}>
        <PostSearchResults query={deferredQuery} />
      </Suspense>
    </div>
  )
}
