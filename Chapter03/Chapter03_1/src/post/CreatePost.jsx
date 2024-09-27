import { PropTypes } from 'prop-types'

export function CreatePost({ username }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        Author: <b>{username}</b>
      </div>
      <div>
        <label htmlFor='create-title'>Title:</label>
        <input type='text' name='create-title' id='create-title' />
      </div>
      <textarea />
      <input type='submit' value='Create' />
    </form>
  )
}

CreatePost.propTypes = {
  username: PropTypes.string.isRequired,
}