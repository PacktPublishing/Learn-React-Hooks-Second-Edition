import { describe, test, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useUser } from './user.js'

describe('User Hook', {}, () => {
  test('should not be logged in by default', {}, () => {
    const { result } = renderHook(() => useUser())
    expect(result.current.isLoggedIn).toBe(false)
    expect(result.current.username).toBe(null)
  })

  test('should be logged in after registering', {}, () => {
    const { result } = renderHook(() => useUser())
    act(() => result.current.register('testuser'))
    expect(result.current.isLoggedIn).toBe(true)
    expect(result.current.username).toBe('testuser')
  })

  test('should be logged in after logging in', {}, () => {
    const { result } = renderHook(() => useUser())
    act(() => result.current.login('testuser'))
    expect(result.current.isLoggedIn).toBe(true)
    expect(result.current.username).toBe('testuser')
  })

  test('should be logged out after logout', {}, () => {
    const { result } = renderHook(() => useUser())
    act(() => result.current.login('testuser'))
    act(() => result.current.logout())
    expect(result.current.isLoggedIn).toBe(false)
    expect(result.current.username).toBe(null)
  })
})
