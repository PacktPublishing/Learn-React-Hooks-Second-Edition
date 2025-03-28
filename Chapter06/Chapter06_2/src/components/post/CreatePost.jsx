import { useContext } from 'react'
import { UserContext } from '@/contexts/UserContext.js'

export function CreatePost({ dispatch }) {
  const [username] = useContext(UserContext)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const title = form.elements.title.value
    const content = form.elements.content.value
    const newPost = { title, content, author: username, featured: false }

    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost),
    })

    if (!response.ok) {
      throw new Error('Unable to create post')
    }

    dispatch({ type: 'CREATE_POST', post: newPost })
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Author: <b>{username}</b>
      </div>
      <div>
        <label htmlFor='create-title'>Title:</label>
        <input type='text' name='title' id='create-title' />
      </div>
      <textarea name='content' />
      <input type='submit' value='Create' />
    </form>
  )
}
