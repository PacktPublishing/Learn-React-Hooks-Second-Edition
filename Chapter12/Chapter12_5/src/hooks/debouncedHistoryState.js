import { useState, useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useHistoryState } from '@uidotdev/usehooks'

export function useDebouncedHistoryState(initialState, timeout) {
  const { state, set, undo, redo, clear, canUndo, canRedo } =
    useHistoryState(initialState)

  const [content, setContent] = useState(initialState)

  const debounced = useDebouncedCallback((value) => set(value), timeout)

  useEffect(() => {
    debounced.cancel()
    setContent(state)
  }, [state, debounced])

  function handleContentChange(e) {
    const { value } = e.target
    setContent(value)
    debounced(value)
  }

  return { content, handleContentChange, undo, redo, clear, canUndo, canRedo }
}
