export function TodoFilterItem({ name, filterTodos, filter = 'all' }) {
  function handleFilter() {
    filterTodos(name)
  }

  return (
    <button type='button' disabled={filter === name} onClick={handleFilter}>
      {name}
    </button>
  )
}

export function TodoFilter(props) {
  return (
    <div>
      <TodoFilterItem {...props} name='all' />
      <TodoFilterItem {...props} name='active' />
      <TodoFilterItem {...props} name='completed' />
    </div>
  )
}
