export function Login() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor='login-username'>Username: </label>
      <input type='text' name='username' id='login-username' />
      <br />
      <label htmlFor='login-password'>Password: </label>
      <input type='password' name='password' id='login-password' />
      <br />
      <input type='submit' value='Login' />
    </form>
  )
}
