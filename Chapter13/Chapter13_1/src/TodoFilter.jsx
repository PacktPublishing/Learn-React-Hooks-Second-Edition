import React from 'react'

export class TodoFilterItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleFilter = this.handleFilter.bind(this)
  }

  handleFilter() {
    const { name, filterTodos } = this.props
    filterTodos(name)
  }

  render() {
    const { name, filter = 'all' } = this.props
    return (
      <button
        type='button'
        disabled={filter === name}
        onClick={this.handleFilter}
      >
        {name}
      </button>
    )
  }
}

export class TodoFilter extends React.Component {
  render() {
    return (
      <div>
        <TodoFilterItem {...this.props} name='all' />
        <TodoFilterItem {...this.props} name='active' />
        <TodoFilterItem {...this.props} name='completed' />
      </div>
    )
  }
}
