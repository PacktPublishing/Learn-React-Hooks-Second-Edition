import { describe, test, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { ThemeContext } from '@/contexts/ThemeContext.js'
import { useTheme } from './theme.js'

function ThemeContextWrapper({ children }) {
  return (
    <ThemeContext.Provider value={{ primaryColor: 'deepskyblue' }}>
      {children}
    </ThemeContext.Provider>
  )
}

describe('Theme Hook', {}, () => {
  test('should return the primaryColor defined by the context', {}, () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeContextWrapper,
    })
    expect(result.current.primaryColor).toBe('deepskyblue')
  })
})
