function filterReducer(state, action) {
  if (action.type === 'FILTER_TODOS') {
    return action.filter
  }
  return state
}

function todosReducer(state, action) {
  switch (action.type) {
    case 'LOAD_TODOS':
      return action.todos

    case 'ADD_TODO': {
      const newTodo = { id: Date.now(), title: action.title, completed: false }
      return [newTodo, ...state]
    }

    case 'TOGGLE_TODO': {
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    }

    case 'REMOVE_TODO': {
      return state.filter((item) => item.id !== action.id)
    }

    default:
      return state
  }
}

export function appReducer(state, action) {
  return {
    todos: todosReducer(state.todos, action),
    filter: filterReducer(state.filter, action),
  }
}
