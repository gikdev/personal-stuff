import { useCallback, useEffect, useState } from "react"
import { TimeFormatter } from "#/shared/utils"
import { useWorkTimerStore } from "../-shared"

export function TimerTime() {
  const getElapsedSeconds = useWorkTimerStore(s => s.getElapsedSeconds)
  const forceUpdate = useForceUpdate()

  useEffect(() => {
    const id = setInterval(() => forceUpdate(), 100)
    return () => clearInterval(id)
  }, [forceUpdate])

  const timerTime = new TimeFormatter(getElapsedSeconds()).toPersianTime()

  return (
    <p dir="ltr" className="text-title font-black text-tusi-100">
      {timerTime}
    </p>
  )
}

function useForceUpdate() {
  const [, setCount] = useState(0)

  const forceUpdate = useCallback(() => setCount(n => n + 1), [])

  return forceUpdate
}
