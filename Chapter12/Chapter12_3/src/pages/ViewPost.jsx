import { Suspense } from 'react'
import { useParams } from 'react-router'
import { Post } from '@/components/post/Post.jsx'

export function ViewPost() {
  const { id } = useParams()
  return (
    <Suspense fallback={<strong>Loading post...</strong>}>
      <Post id={id} />
    </Suspense>
  )
}
