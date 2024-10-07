import { PropTypes } from 'prop-types'
import { useState } from 'react'

export function Register({ onRegister }) {
  const [invalidRepeat, setInvalidRepeat] = useState(false)

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
    onRegister(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='register-username'>Username: </label>
      <input type='text' name='username' id='register-username' required />
      <br />
      <label htmlFor='register-password'>Password: </label>
      <input type='password' name='password' id='register-password' required />
      <br />
      <label htmlFor='register-password-repeat'>Repeat password: </label>
      <input
        type='password'
        name='password-repeat'
        id='register-password-repeat'
        required
      />
      <br />
      {invalidRepeat && (
        <div style={{ color: 'red' }}>Passwords must match.</div>
      )}
      <input type='submit' value='Register' />
    </form>
  )
}

Register.propTypes = {
  onRegister: PropTypes.func.isRequired,
}