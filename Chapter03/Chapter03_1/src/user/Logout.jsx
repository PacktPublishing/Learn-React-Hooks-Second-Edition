export function Logout({ username }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      Logged in as: <b>{username}</b>
      <input type='submit' value='Logout' />
    </form>
  )
}
