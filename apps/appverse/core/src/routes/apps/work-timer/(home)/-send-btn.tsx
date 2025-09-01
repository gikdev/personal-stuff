import { PaperPlaneTiltIcon } from "@phosphor-icons/react"
import { skins } from "#/shared/skins"
import { useWorkTimerStore } from "../-shared"

export function SendBtn() {
  const addElapsedToTotal = useWorkTimerStore(s => s.addElapsedToTotal)

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
