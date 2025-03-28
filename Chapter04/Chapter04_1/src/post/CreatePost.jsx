export function CreatePost({ username, dispatch }) {
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const title = form.elements.title.value
    const content = form.elements.content.value
    const newPost = { title, content, author: username }
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
