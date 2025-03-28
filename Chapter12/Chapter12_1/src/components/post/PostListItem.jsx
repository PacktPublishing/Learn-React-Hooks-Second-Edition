import { useTheme } from '@/hooks/theme.js'
import { Link } from 'react-router'

export function PostListItem({ id, title, author }) {
  const theme = useTheme()

  return (
    <div>
      <h3 style={{ color: theme.primaryColor }}>{title}</h3>
      <div>
        <Link to={`/post/${id}`}>View Post &gt;</Link>
      </div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
    </div>
  )
}
