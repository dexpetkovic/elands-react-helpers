import { act, renderHook } from '@testing-library/react-hooks'
import { useCallbackOnTimeout } from 'src/hooks/useCallbackOnTimeout'

jest.useFakeTimers()

describe('useCallbackOnTimeout', () => {
  it('calls the callback after the specified timeout', () => {
    const callback = jest.fn()

    renderHook(() => useCallbackOnTimeout({ timeoutInMilliseconds: 1000, callback }))

    expect(callback).not.toHaveBeenCalled()

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(callback).toHaveBeenCalled()
  })

  it('does not call the callback if the component unmounts before the timeout', () => {
    const callback = jest.fn()

    const { unmount } = renderHook(() =>
      useCallbackOnTimeout({ timeoutInMilliseconds: 1000, callback }),
    )

    unmount()

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(callback).not.toHaveBeenCalled()
  })
})
