import { useState } from 'react'

export function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount)

  function increment() {
    setCount((count) => count + 1)
  }

  function reset() {
    setCount(initialCount)
  }

  return { count, increment, reset }
}
