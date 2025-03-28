import { useAPISearchPosts } from '@/hooks/api.js'
import { PostList } from './PostList.jsx'

export function PostSearchResults({ query }) {
  const posts = useAPISearchPosts({ query })
  return <PostList posts={posts} />
}
