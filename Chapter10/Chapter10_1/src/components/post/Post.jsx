import { useContext } from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchPost } from '@/api.js'
import { ThemeContext } from '@/contexts/ThemeContext.js'
import { CommentSection } from '@/components/comment/CommentSection.jsx'

export function Post({ id }) {
  const theme = useContext(ThemeContext)
  const { data } = useSuspenseQuery({
    queryKey: ['post', id],
    queryFn: async () => await fetchPost({ id }),
  })
  const { title, content, author } = data

  return (
    <div>
      <h3 style={{ color: theme.primaryColor }}>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
      <br />
      <br />
      <CommentSection />
    </div>
  )
}
