export function postsReducer(state, action) {
  switch (action.type) {
    case 'CREATE_POST':
      return [action.post, ...state]
    case 'FETCH_POSTS':
      return action.posts
    default:
      throw new Error('Unknown action type')
  }
}
