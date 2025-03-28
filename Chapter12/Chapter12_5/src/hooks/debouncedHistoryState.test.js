import { describe, test, expect } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'
import { useDebouncedHistoryState } from './debouncedHistoryState.js'

describe('Debounced History State Hook', {}, () => {
  test('should return initial state as content', {}, () => {
    const { result } = renderHook(() => useDebouncedHistoryState('', 10))
    expect(result.current.content).toBe('')
  })

  test('should update content immediately', {}, () => {
    const { result } = renderHook(() => useDebouncedHistoryState('', 10))
    act(() =>
      result.current.handleContentChange({ target: { value: 'new content' } }),
    )
    expect(result.current.content).toBe('new content')
  })

  test('should only update history state after debounce', {}, async () => {
    const { result } = renderHook(() => useDebouncedHistoryState('', 10))
    act(() =>
      result.current.handleContentChange({ target: { value: 'new content' } }),
    )
    expect(result.current.canUndo).toBe(false)
    await waitFor(() => {
      expect(result.current.canUndo).toBe(true)
    })
  })
})
