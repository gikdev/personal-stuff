import { ArrowUUpRightIcon } from "@phosphor-icons/react"
import { btnIcon } from "#/shared/skins"
import { useWorkTimerStore } from "../-shared"

export function ResetBtn() {
  const resetTimer = useWorkTimerStore(s => s.resetTimer)

  return (
    <button
      type="button"
      className={btnIcon({ size: "lg" })}
      onClick={resetTimer}
    >
      <ArrowUUpRightIcon size={32} />
    </button>
  )
}
