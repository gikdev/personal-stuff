import { PaperPlaneTiltIcon } from "@phosphor-icons/react"
import { btnIcon } from "#/shared/skins"
import { useWorkTimerStore } from "../-shared"

export function SendBtn() {
  const addElapsedToTotal = useWorkTimerStore(s => s.addElapsedToTotal)

  return (
    <button
      type="button"
      className={btnIcon({ size: "lg" })}
      onClick={addElapsedToTotal}
    >
      <PaperPlaneTiltIcon size={32} />
    </button>
  )
}
