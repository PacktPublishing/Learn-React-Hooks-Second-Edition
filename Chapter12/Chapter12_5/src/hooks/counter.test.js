import { describe, test, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useCounter } from './counter.js'

describe('Counter Hook', {}, () => {
  test('should return 0 by default', {}, () => {
    const { result } = renderHook(() => useCounter())
    expect(result.current.count).toBe(0)
  })

  test('should initially return initial count', {}, () => {
    const { result } = renderHook(() => useCounter(123))
    expect(result.current.count).toBe(123)
  })

  test('should increment counter when increment() is called', {}, () => {
    const { result } = renderHook(() => useCounter(0))
    act(() => result.current.increment())
    expect(result.current.count).toBe(1)
  })

  test('should reset to initial value', {}, () => {
    let initial = 0
    const { result, rerender } = renderHook(() => useCounter(initial))
    initial = 123
    rerender()
    act(() => result.current.reset())
    expect(result.current.count).toBe(123)
  })
})
