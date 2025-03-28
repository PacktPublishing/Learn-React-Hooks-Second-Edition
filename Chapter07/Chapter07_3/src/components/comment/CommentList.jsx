import { Comment } from './Comment.jsx'

export function CommentList() {
  const comments = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    content: `Comment #${i}`,
    author: 'test',
  }))

  return (
    <div>
      {comments.map((comment) => (
        <Comment {...comment} key={comment.id} />
      ))}
    </div>
  )
}
