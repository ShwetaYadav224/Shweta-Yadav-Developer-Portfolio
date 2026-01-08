import { atom } from 'recoil'

type Theme = 'light' | 'dark'

export const themeState = atom<Theme>({
  key: 'themeState',
  default: 'light',
  effects: [
    ({ setSelf, onSet }) => {
      if (typeof window === 'undefined') return

      const savedValue = localStorage.getItem('theme') as Theme | null
      
      if (savedValue) {
        setSelf(savedValue)
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setSelf('dark')
      }

      onSet((newValue, isReset) => {
        if (isReset) {
          localStorage.removeItem('theme')
        } else {
          localStorage.setItem('theme', newValue)
        }
      })
    }
  ],
})