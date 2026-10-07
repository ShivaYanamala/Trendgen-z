import { useEffect, useState, type ReactNode } from 'react'
import type { Theme } from '../types/product'
import { ThemeContext } from './ThemeState'

function getSavedTheme(): Theme {
  try {
    return localStorage.getItem('trendgen-z-theme') === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getSavedTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('trendgen-z-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((current) => current === 'light' ? 'dark' : 'light')

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
