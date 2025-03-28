import React from 'react'

export class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(e) {
    this.setState({ input: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { input } = this.state
    const { addTodo } = this.props
    if (input) {
      addTodo(input)
      this.setState({ input: '' })
    }
  }

  render() {
    const { input } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='enter new task...'
          style={{ width: '350px' }}
          value={input}
          onChange={this.handleInput}
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
}
