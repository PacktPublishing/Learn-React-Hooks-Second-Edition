export function Logout({ username, setUsername }) {
  function handleSubmit(e) {
    e.preventDefault()
    setUsername('')
  }

  return (
    <form onSubmit={handleSubmit}>
      Logged in as: <b>{username}</b>
      <input type='submit' value='Logout' />
    </form>
  )
}
