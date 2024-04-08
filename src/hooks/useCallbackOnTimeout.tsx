import { useEffect } from 'react'

export const useCallbackOnTimeout = (props: {
  timeoutInMilliseconds: number
  callback?: () => void
}): void => {
  const { timeoutInMilliseconds, callback } = props

  useEffect(() => {
    const interval = setTimeout(() => {
      if (callback) callback()
    }, timeoutInMilliseconds)
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [callback, timeoutInMilliseconds])
}
