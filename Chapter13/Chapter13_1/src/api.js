const mockItems = [
  { id: 1, title: 'Finish React Hooks book', completed: true },
  { id: 2, title: 'Promote the book', completed: false },
]

export function fetchTodos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockItems), 100)
  })
}
