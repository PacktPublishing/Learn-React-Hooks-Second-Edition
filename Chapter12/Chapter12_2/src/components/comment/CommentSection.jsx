import { useState, useTransition } from 'react'
import { CommentList } from './CommentList.jsx'

export function CommentSection() {
  const [showComments, setShowComments] = useState(false)
  const [isPending, startTransition] = useTransition()

  function handleClick() {
    startTransition(() => {
      setShowComments((prev) => !prev)
    })
  }

  return (
    <div>
      <button onClick={handleClick} disabled={isPending}>
        {showComments ? 'Hide' : 'Show'} comments
      </button>
      {showComments && <CommentList />}
    </div>
  )
}
