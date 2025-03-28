import { useRef, useEffect } from 'react'
import { CustomInput } from './CustomInput.jsx'

export function AutoFocus() {
  const inputRef = useRef(null)

  useEffect(() => inputRef.current.focus(), [])

  return (
    <div>
      <h3>AutoFocus</h3>
      <CustomInput ref={inputRef} />
    </div>
  )
}
