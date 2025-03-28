import { useState } from 'react'

export function App() {
  const [name, setName] = useState('')

  function handleChange(evt) {
    setName(evt.target.value)
  }

  return (
    <div>
      <h1>My name is: {name}</h1>
      <input type='text' value={name} onChange={handleChange} />
    </div>
  )
}
