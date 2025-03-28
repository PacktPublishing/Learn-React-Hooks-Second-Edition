import { useRef } from 'react'
import { HighlightFocusInput } from './HighlightFocusInput.jsx'

export function HighlightFocus() {
  const inputRef = useRef(null)

  return (
    <div>
      <h3>HighlightFocus</h3>
      <button onClick={() => inputRef.current.focus()}>focus it</button>
      <HighlightFocusInput ref={inputRef} />
    </div>
  )
}
