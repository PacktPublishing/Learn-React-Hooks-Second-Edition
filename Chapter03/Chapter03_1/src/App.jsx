import { UserBar } from './user/UserBar.jsx'
import { CreatePost } from './post/CreatePost.jsx'
import { PostList } from './post/PostList.jsx'

const username = 'Daniel Bugl'
const posts = [
  {
    title: 'React Hooks',
    content: 'The greatest thing since sliced bread!',
    author: 'Daniel Bugl',
  },
  {
    title: 'Using React Fragments',
    content: 'Keeping the DOM tree clean!',
    author: 'Daniel Bugl',
  },
]

export function App() {
  return (
    <div style={{ padding: 8 }}>
      <UserBar />
      <br />
      <CreatePost username={username} />
      <hr />
      <PostList posts={posts} />
    </div>
  )
}
