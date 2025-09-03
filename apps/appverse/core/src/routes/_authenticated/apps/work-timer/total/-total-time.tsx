import { TimeFormatter } from "#/shared/utils"
import { useWorkTimerStore } from "../-shared"

export function TotalTime() {
  const totalSeconds = useWorkTimerStore(s => s.totalSeconds)
  const total = new TimeFormatter(totalSeconds).toPersianTime()

  return (
    <p className="text-title font-black text-tusi-100" dir="ltr">
      {total}
    </p>
  )
}
