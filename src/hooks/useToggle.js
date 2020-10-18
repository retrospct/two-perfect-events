import { useState } from 'react'

export const useToggle = initial => {
  const [isToggled, setToggled] = useState(initial)
  const toggle = () => setToggled(prevState => !prevState)
  return { isToggled, setToggled, toggle }
}
