import { useId } from 'react'

export function AriaInput() {
  const inputId = useId()

  return (
    <div>
      <h3>AriaInput</h3>
      <label htmlFor={inputId}>
        <input id={inputId} type='checkbox' /> I agree to the Terms and
        Conditions.
      </label>
    </div>
  )
}
