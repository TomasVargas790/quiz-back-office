import { createContext, useContext, useState } from 'react'

const themeContext = createContext('')

export function ProvideTheme ({ children }) {
  const [theme, setTheme] = useState('')
  return (<themeContext.Provider value={{ theme, setTheme }}>{children}</themeContext.Provider>)
}

export const useTheme = () => {
  return useContext(themeContext)
}
