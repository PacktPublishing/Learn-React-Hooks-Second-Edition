import React from 'react'
import { Header } from './Header.jsx'
import { AddTodo } from './AddTodo.jsx'
import { TodoList } from './TodoList.jsx'
import { TodoFilter } from './TodoFilter.jsx'
import { StateContext } from './StateContext.js'
import { fetchTodos } from './api.js'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todos: [], filteredTodos: [], filter: 'all' }
    this.loadTodos = this.loadTodos.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.filterTodos = this.filterTodos.bind(this)
  }

  componentDidMount() {
    this.loadTodos()
  }

  async loadTodos() {
    const todos = await fetchTodos()
    this.setState({ todos })
    this.filterTodos()
  }

  addTodo(title) {
    const { todos } = this.state
    const newTodo = { id: Date.now(), title, completed: false }
    this.setState({ todos: [newTodo, ...todos] })
    this.filterTodos()
  }

  toggleTodo(id) {
    const { todos } = this.state
    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      }
      return item
    })
    this.setState({ todos: updatedTodos })
    this.filterTodos()
  }

  removeTodo(id) {
    const { todos } = this.state
    const updatedTodos = todos.filter((item) => item.id !== id)
    this.setState({ todos: updatedTodos })
    this.filterTodos()
  }

  applyFilter(todos, filter) {
    switch (filter) {
      case 'active':
        return todos.filter((item) => item.completed === false)
      case 'completed':
        return todos.filter((item) => item.completed === true)
      case 'all':
      default:
        return todos
    }
  }

  filterTodos(filterArg) {
    this.setState(({ todos, filter }) => {
      const newFilter = filterArg ?? filter
      return {
        filter: newFilter,
        filteredTodos: this.applyFilter(todos, newFilter),
      }
    })
  }

  render() {
    const { filter, filteredTodos } = this.state
    return (
      <StateContext.Provider value={filteredTodos}>
        <div style={{ width: '400px' }}>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <hr />
          <TodoList toggleTodo={this.toggleTodo} removeTodo={this.removeTodo} />
          <hr />
          <TodoFilter filter={filter} filterTodos={this.filterTodos} />
        </div>
      </StateContext.Provider>
    )
  }
}
