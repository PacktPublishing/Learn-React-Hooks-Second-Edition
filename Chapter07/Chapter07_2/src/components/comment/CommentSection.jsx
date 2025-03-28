import { useState } from 'react'
import { CommentList } from './CommentList.jsx'

export function CommentSection() {
  const [showComments, setShowComments] = useState(false)

  function handleClick() {
    setShowComments((prev) => !prev)
  }

  return (
    <div>
      <button onClick={handleClick}>
        {showComments ? 'Hide' : 'Show'} comments
      </button>
      {showComments && <CommentList />}
    </div>
  )
}
