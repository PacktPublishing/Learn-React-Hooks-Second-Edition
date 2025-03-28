import { useContext } from 'react'
import { ThemeContext } from '@/contexts/ThemeContext.js'

export function useTheme() {
  return useContext(ThemeContext)
}
