import { useState, useEffect } from 'react'
import { useUser } from '@/hooks/user.js'

function getRole(username) {
  if (username === 'admin') return 'admin'
  return 'user'
}

export function Logout() {
  const { username, logout } = useUser()
  const [role, setRole] = useState('user')

  useEffect(() => {
    setRole(getRole(username))
  }, [username])

  function handleSubmit(e) {
    e.preventDefault()
    logout()
  }

  return (
    <form onSubmit={handleSubmit}>
      Logged in as: <b>{username}</b>
      {role !== 'user' ? ` (role: ${role})` : ''}
      <input type='submit' value='Logout' />
    </form>
  )
}
