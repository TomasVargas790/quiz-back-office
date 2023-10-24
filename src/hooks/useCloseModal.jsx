import { useCallback, useEffect } from 'react'
export default function useCloseModal (isActive, setIsActive) {
  const closeOnEscapeKeyDown = useCallback((e) => {
    if ((e.charCode || e.keyCode) === 27) {
      setIsActive(false)
    }
  }, [isActive])

  useEffect(() => {
    console.log(document.body)
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return function cleanup () {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  }, [closeOnEscapeKeyDown])
}
