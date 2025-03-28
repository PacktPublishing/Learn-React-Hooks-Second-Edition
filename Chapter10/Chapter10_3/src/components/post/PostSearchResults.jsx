import { useSuspenseQuery } from '@tanstack/react-query'
import { searchPosts } from '@/api.js'
import { PostList } from './PostList.jsx'

export function PostSearchResults({ query }) {
  const { data } = useSuspenseQuery({
    queryKey: ['posts', query],
    queryFn: () => searchPosts(query),
  })
  return <PostList posts={data} />
}
