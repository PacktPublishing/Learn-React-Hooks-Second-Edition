import { useReducer, useEffect, useMemo } from 'react'
import { Header } from './Header.jsx'
import { AddTodo } from './AddTodo.jsx'
import { TodoList } from './TodoList.jsx'
import { TodoFilter } from './TodoFilter.jsx'
import { StateContext } from './StateContext.js'
import { fetchTodos } from './api.js'
import { appReducer } from './reducers.js'

export function App() {
  const [state, dispatch] = useReducer(appReducer, { todos: [], filter: 'all' })
  const { todos, filter } = state

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((item) => item.completed === false)
      case 'completed':
        return todos.filter((item) => item.completed === true)
      case 'all':
      default:
        return todos
    }
  }, [todos, filter])

  useEffect(() => {
    async function loadTodos() {
      const todos = await fetchTodos()
      dispatch({ type: 'LOAD_TODOS', todos })
    }
    void loadTodos()
  }, [])

  function addTodo(title) {
    dispatch({ type: 'ADD_TODO', title })
  }

  function toggleTodo(id) {
    dispatch({ type: 'TOGGLE_TODO', id })
  }

  function removeTodo(id) {
    dispatch({ type: 'REMOVE_TODO', id })
  }

  function filterTodos(filter) {
    dispatch({ type: 'FILTER_TODOS', filter })
  }

  return (
    <StateContext.Provider value={filteredTodos}>
      <div style={{ width: '400px' }}>
        <Header />
        <AddTodo addTodo={addTodo} />
        <hr />
        <TodoList toggleTodo={toggleTodo} removeTodo={removeTodo} />
        <hr />
        <TodoFilter filter={filter} filterTodos={filterTodos} />
      </div>
    </StateContext.Provider>
  )
}
