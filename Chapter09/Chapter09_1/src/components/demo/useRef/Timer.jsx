import { useRef, useState, useEffect } from 'react'

export function Timer() {
  const intervalRef = useRef(null)
  const [seconds, setSeconds] = useState(0)

  function increaseSeconds() {
    setSeconds((prevSeconds) => prevSeconds + 1)
  }

  useEffect(() => {
    intervalRef.current = setInterval(increaseSeconds, 1000)
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <div>
      <h3>Timer</h3>
      {seconds} seconds
      <button type='button' onClick={() => clearInterval(intervalRef.current)}>
        Cancel
      </button>
    </div>
  )
}
