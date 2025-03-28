import { useState, useEffect } from 'react'

function getRole(username) {
  if (username === 'admin') return 'admin'
  return 'user'
}

export function Logout({ username, setUsername }) {
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
