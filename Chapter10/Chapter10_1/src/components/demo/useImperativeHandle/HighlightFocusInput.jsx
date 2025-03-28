import { useImperativeHandle, useRef, useState } from 'react'

export function HighlightFocusInput({ ref }) {
  const inputRef = useRef(null)
  const [highlight, setHighlight] = useState(false)

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
      setHighlight(true)
      setTimeout(() => setHighlight(false), 1000)
    },
  }))

  return (
    <input
      ref={inputRef}
      type='text'
      style={{ backgroundColor: highlight ? 'yellow' : undefined }}
    />
  )
}
