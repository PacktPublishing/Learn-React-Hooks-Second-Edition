import { useState } from 'react'

export function InitialWidthMeasure() {
  const [width, setWidth] = useState(0)

  function measureRef(node) {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width)
    }
  }

  return (
    <div>
      <h3>InitialWidthMeasure</h3>
      <div ref={measureRef}>I was initially {Math.round(width)}px wide</div>
    </div>
  )
}
