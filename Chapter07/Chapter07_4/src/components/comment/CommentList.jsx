import { useContext, useState, useOptimistic } from 'react'
import { UserContext } from '@/contexts/UserContext.js'
import { CreateComment } from './CreateComment.jsx'
import { Comment } from './Comment.jsx'

export function CommentList() {
  const [username] = useContext(UserContext)
  const [comments, setComments] = useState([])
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, comment) => [
      ...state,
      {
        ...comment,
        sending: true,
        id: Date.now(),
      },
    ],
  )

  async function addComment(comment) {
    addOptimisticComment(comment)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setComments((prev) => [...prev, comment])
  }

  return (
    <div>
      {optimisticComments.map((comment) => (
        <Comment {...comment} key={comment.id} />
      ))}
      {optimisticComments.length === 0 && <i>No comments</i>}
      {username && <CreateComment addComment={addComment} />}
    </div>
  )
}
