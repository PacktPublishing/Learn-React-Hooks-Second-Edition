import { useContext } from 'react'
import { UserContext } from '@/contexts/UserContext.js'

export function CreateComment({ addComment }) {
  const [username] = useContext(UserContext)

  async function submitAction(formData) {
    const content = formData.get('content')
    const comment = {
      author: username,
      content,
    }
    await addComment(comment)
  }

  return (
    <form action={submitAction}>
      <input type='text' name='content' />
      <i> ~ {username}</i>
      <input type='submit' value='Create' />
    </form>
  )
}
