import { useState, useEffect } from 'react'
import { useUser } from '@/hooks/user.js'

export function Register() {
  const { register } = useUser()
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [invalidRepeat, setInvalidRepeat] = useState(false)

  useEffect(() => {
    if (password !== repeatPassword) {
      setInvalidRepeat(true)
    } else {
      setInvalidRepeat(false)
    }
  }, [password, repeatPassword, setInvalidRepeat])

  function handleSubmit(e) {
    e.preventDefault()
    if (
      e.target.elements.password.value !==
      e.target.elements['password-repeat'].value
    ) {
      setInvalidRepeat(true)
      return
    }
    setInvalidRepeat(false)
    const username = e.target.elements.username.value
    register(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='register-username'>Username: </label>
      <input type='text' name='username' id='register-username' required />
      <br />
      <label htmlFor='register-password'>Password: </label>
      <input
        type='password'
        name='password'
        id='register-password'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label htmlFor='register-password-repeat'>Repeat password: </label>
      <input
        type='password'
        name='password-repeat'
        id='register-password-repeat'
        required
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <br />
      {invalidRepeat && (
        <div style={{ color: 'red' }}>Passwords must match.</div>
      )}
      <input type='submit' value='Register' />
    </form>
  )
}
