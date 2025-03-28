import { useActionState } from 'react'
import { useNavigate } from 'react-router'
import { useLocalStorage, useHistoryState } from '@uidotdev/usehooks'
import { useMutation } from '@tanstack/react-query'
import { createPost, queryClient } from '@/api.js'

export function CreatePost() {
  const [username] = useLocalStorage('username', null)
  const navigate = useNavigate()
  const { state, set, undo, redo, clear, canUndo, canRedo } =
    useHistoryState('')

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    },
  })

  const [error, submitAction, isPending] = useActionState(
    async (currentState, formData) => {
      const title = formData.get('title')
      const content = formData.get('content')
      const newPost = { title, content, author: username, featured: false }
      try {
        const result = await createPostMutation.mutateAsync(newPost)
        clear()
        navigate(`/post/${result.id}`)
      } catch (err) {
        return err
      }
    },
  )

  function handleContentChange(e) {
    const { value } = e.target
    set(value)
  }

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
      <textarea name='content' value={state} onChange={handleContentChange} />
      <input type='submit' value='Create' disabled={isPending} />
      {error && <div style={{ color: 'red' }}>{error.toString()}</div>}
    </form>
  )
}
