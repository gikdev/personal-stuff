import { ArrowUUpRightIcon } from "@phosphor-icons/react"
import { useKeyPress } from "react-haiku"
import { skins } from "#/shared/skins"
import { useWorkTimerStore } from "../-shared"

const resetTimer = useWorkTimerStore.getState().resetTimer

export function ResetBtn() {
  useKeyPress(["r"], resetTimer)

  return (
    <button
      type="button"
      className={skins.btnIcon({ size: "lg" })}
      onClick={resetTimer}
    >
      <ArrowUUpRightIcon size={32} />
    </button>
  )
}
