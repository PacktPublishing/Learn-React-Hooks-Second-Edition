import { useLocalStorage } from '@uidotdev/usehooks'

export function Login() {
  const [, setUsername] = useLocalStorage('username', null)

  function handleSubmit(e) {
    e.preventDefault()
    const username = e.target.elements.username.value
    setUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='login-username'>Username: </label>
      <input type='text' name='username' id='login-username' required />
      <br />
      <label htmlFor='login-password'>Password: </label>
      <input type='password' name='password' id='login-password' required />
      <br />
      <input type='submit' value='Login' />
    </form>
  )
}
