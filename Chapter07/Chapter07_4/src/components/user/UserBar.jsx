import { useContext } from 'react'
import { UserContext } from '@/contexts/UserContext.js'
import { Login } from './Login.jsx'
import { Logout } from './Logout.jsx'
import { Register } from './Register.jsx'

export function UserBar() {
  const [username] = useContext(UserContext)

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
