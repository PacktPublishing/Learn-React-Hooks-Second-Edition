export function TodoItem({ title, completed, id, toggleTodo, removeTodo }) {
  function handleToggle() {
    toggleTodo(id)
  }

  function handleRemove() {
    removeTodo(id)
  }

  return (
    <div style={{ width: '400px', height: '25px' }}>
      <input type='checkbox' checked={completed} onChange={handleToggle} />
      {title}
      <button type='button' style={{ float: 'right' }} onClick={handleRemove}>
        x
      </button>
    </div>
  )
}
