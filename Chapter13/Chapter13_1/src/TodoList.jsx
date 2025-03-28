import React from 'react'
import { TodoItem } from './TodoItem.jsx'
import { StateContext } from './StateContext.js'

export class TodoList extends React.Component {
  static contextType = StateContext

  render() {
    const items = this.context
    return items.map((item) => (
      <TodoItem {...item} {...this.props} key={item.id} />
    ))
  }
}
