import { useLocalStorage } from '@uidotdev/usehooks'
import { Login } from './Login.jsx'
import { Logout } from './Logout.jsx'
import { Register } from './Register.jsx'

export function UserBar() {
  const [username] = useLocalStorage('username', null)

  if (username) {
    return <Logout />
  }

  return (
    <>
      <Login />
      <hr />
      <Register />
    </>
  )
}
