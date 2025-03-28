import { useState, useEffect } from 'react'
import { useLocalStorage } from '@uidotdev/usehooks'

function getRole(username) {
  if (username === 'admin') return 'admin'
  return 'user'
}

export function Logout() {
  const [username, setUsername] = useLocalStorage('username', null)
  const [role, setRole] = useState('user')

  useEffect(() => {
    setRole(getRole(username))
  }, [username])

  function handleSubmit(e) {
    e.preventDefault()
    setUsername('')
  }

  return (
    <form onSubmit={handleSubmit}>
      Logged in as: <b>{username}</b>
      {role !== 'user' ? ` (role: ${role})` : ''}
      <input type='submit' value='Logout' />
    </form>
  )
}
