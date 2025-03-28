import { useContext } from 'react'
import { StateContext } from './StateContext.js'
import { TodoItem } from './TodoItem.jsx'

export function TodoList(props) {
  const items = useContext(StateContext)
  return items.map((item) => <TodoItem {...item} {...props} key={item.id} />)
}
