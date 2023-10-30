'use client'
import Header from '@/components/Header'

export default function ThemeLayout ({ children }) {
  return (
        <>
            <Header></Header>
            {children}
        </>
  )
}
