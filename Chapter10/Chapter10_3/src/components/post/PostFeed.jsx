import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchPosts } from '@/api.js'
import { PostList } from './PostList.jsx'

export function PostFeed({ featured = false }) {
  const { data } = useSuspenseQuery({
    queryKey: ['posts', featured],
    queryFn: () => fetchPosts({ featured }),
  })

  return <PostList posts={data} />
}
