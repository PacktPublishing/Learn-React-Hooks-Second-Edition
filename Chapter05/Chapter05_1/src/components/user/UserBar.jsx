import { Login } from './Login.jsx'
import { Logout } from './Logout.jsx'
import { Register } from './Register.jsx'

export function UserBar({ username, setUsername }) {
  if (username) {
    return <Logout username={username} setUsername={setUsername} />
  }

  return (
    <>
      <Login setUsername={setUsername} />
      <hr />
      <Register setUsername={setUsername} />
    </>
  )
}
