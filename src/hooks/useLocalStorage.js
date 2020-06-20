import { useState, useEffect } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const windowGlobal = typeof window !== 'undefined' && window
  const [value, setValue] = useState(() => {
    if (windowGlobal) {
      const currentValue = windowGlobal.localStorage.getItem(key)
      return currentValue !== null ? JSON.parse(currentValue) : initialValue
    }
    return initialValue
  })
  useEffect(() => {
    if (windowGlobal) windowGlobal.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value, windowGlobal])
  return [value, setValue]
}
