import { useState } from 'react'

export function AddTodo({ addTodo }) {
  const [input, setInput] = useState('')

  function handleInput(e) {
    setInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (input) {
      addTodo(input)
      setInput('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='enter new task...'
        style={{ width: '350px' }}
        value={input}
        onChange={handleInput}
      />
      <input
        type='submit'
        style={{ float: 'right' }}
        value='add'
        disabled={!input}
      />
    </form>
  )
}
