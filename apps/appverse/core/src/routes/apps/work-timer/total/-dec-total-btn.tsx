import { MinusIcon } from "@phosphor-icons/react"
import { skins } from "#/shared/skins"
import { useWorkTimerStore } from "../-shared"

export function DecTotalBtn() {
  const decTotalSeconds = useWorkTimerStore(s => s.decTotalSeconds)

  return (
    <button
      type="button"
      className={skins.btnIcon({ size: "lg", theme: "glass" })}
      onClick={decTotalSeconds}
    >
      <MinusIcon size={32} />
    </button>
  )
}
