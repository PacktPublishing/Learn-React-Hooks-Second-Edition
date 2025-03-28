import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '@/api.js'
import { PostList } from './PostList.jsx'

export function PostFeed({ featured = false }) {
  const { data, isLoading } = useQuery({
    queryKey: ['posts', featured],
    queryFn: () => fetchPosts({ featured }),
  })

  if (isLoading) {
    return <div>Loading posts...</div>
  }

  if (!data) {
    return <div>Could not load posts!</div>
  }

  return <PostList posts={data} />
}
