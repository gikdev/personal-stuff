import { PaperPlaneTiltIcon } from "@phosphor-icons/react"
import { useKeyPress } from "react-haiku"
import { skins } from "#/shared/skins"
import { useAppDispatch } from "#/store"
import { useWorkTimerElapsedSeconds, workTimerSlice } from "../-store"

export function SendBtn() {
  const dispatch = useAppDispatch()
  const elapsedSeconds = useWorkTimerElapsedSeconds()

  const addElapsedToTotal = () => {
    dispatch(workTimerSlice.actions.incTotalSecondsBy(elapsedSeconds))
    dispatch(workTimerSlice.actions.resetTimer())
  }

  useKeyPress(["s"], addElapsedToTotal)

  return (
    <button
      type="button"
      className={skins.btnIcon({ size: "lg" })}
      onClick={addElapsedToTotal}
    >
      <PaperPlaneTiltIcon size={32} />
    </button>
  )
}
