export function postsReducer(state, action) {
  switch (action.type) {
    case 'CREATE_POST':
      return [action.post, ...state]
    default:
      throw new Error('Unknown action type')
  }
}
