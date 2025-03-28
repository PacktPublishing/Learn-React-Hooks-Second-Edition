import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchPost } from '@/api.js'
import { useTheme } from '@/hooks/theme.js'
import { CommentSection } from '@/components/comment/CommentSection.jsx'
import { CopyLink } from './CopyLink.jsx'

export function Post({ id }) {
  const theme = useTheme()
  const { data } = useSuspenseQuery({
    queryKey: ['post', id],
    queryFn: async () => await fetchPost({ id }),
  })
  const { title, content, author } = data

  return (
    <div>
      <h3 style={{ color: theme.primaryColor }}>
        {title} <CopyLink url={window.location.href} />
      </h3>
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
