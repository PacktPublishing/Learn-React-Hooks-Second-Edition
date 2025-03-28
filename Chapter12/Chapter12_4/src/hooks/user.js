import { useLocalStorage } from '@uidotdev/usehooks'

export function useUser() {
  const [username, setUsername] = useLocalStorage('username', null)
  const isLoggedIn = username !== null

  function register(username) {
    setUsername(username)
  }

  function login(username) {
    setUsername(username)
  }

  function logout() {
    setUsername(null)
  }

  return { username, isLoggedIn, register, login, logout }
}
