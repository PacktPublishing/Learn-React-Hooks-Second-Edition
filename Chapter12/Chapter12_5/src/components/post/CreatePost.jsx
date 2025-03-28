import { useActionState } from 'react'
import { useNavigate } from 'react-router'
import { useDebouncedHistoryState } from '@/hooks/debouncedHistoryState.js'
import { useAPICreatePost } from '@/hooks/api.js'
import { useUser } from '@/hooks/user.js'

export function CreatePost() {
  const { username } = useUser()
  const navigate = useNavigate()
  const { content, handleContentChange, undo, redo, clear, canUndo, canRedo } =
    useDebouncedHistoryState('', 200)

  const createPost = useAPICreatePost()

  const [error, submitAction, isPending] = useActionState(
    async (currentState, formData) => {
      const title = formData.get('title')
      const content = formData.get('content')
      const newPost = { title, content, author: username, featured: false }
      try {
        const result = await createPost(newPost)
        clear()
        navigate(`/post/${result.id}`)
      } catch (err) {
        return err
      }
    },
  )

  return (
    <form action={submitAction}>
      <div>
        Author: <b>{username}</b>
      </div>
      <div>
        <label htmlFor='create-title'>Title:</label>
        <input type='text' name='title' id='create-title' />
      </div>
      <div>
        <button type='button' disabled={!canUndo} onClick={undo}>
          Undo
        </button>
        <button type='button' disabled={!canRedo} onClick={redo}>
          Redo
        </button>
        <button type='button' onClick={clear}>
          Clear
        </button>
      </div>
      <textarea name='content' value={content} onChange={handleContentChange} />
      <input type='submit' value='Create' disabled={isPending} />
      {error && <div style={{ color: 'red' }}>{error.toString()}</div>}
    </form>
  )
}
