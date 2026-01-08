import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import { themeState } from '../atoms/themeAtom'

export default function useTheme() {
  const [theme, setTheme] = useRecoilState(themeState)

  useEffect(() => {
    // Apply theme class to document
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return {
    theme,
    toggleTheme
  }
}