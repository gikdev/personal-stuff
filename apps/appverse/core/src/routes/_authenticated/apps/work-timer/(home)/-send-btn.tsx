import { PaperPlaneTiltIcon } from "@phosphor-icons/react"
import { useKeyPress } from "react-haiku"
import { skins } from "#/shared/skins"
import { useWorkTimerStore } from "../-shared"

const addElapsedToTotal = useWorkTimerStore.getState().addElapsedToTotal

export function SendBtn() {
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
