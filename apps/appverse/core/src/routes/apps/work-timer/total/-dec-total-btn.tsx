import { MinusIcon } from "@phosphor-icons/react"
import { btnIcon } from "#/shared/skins"
import { useWorkTimerStore } from "../-shared"

export function DecTotalBtn() {
  const decTotalSeconds = useWorkTimerStore(s => s.decTotalSeconds)

  return (
    <button
      type="button"
      className={btnIcon({ size: "lg" })}
      onClick={decTotalSeconds}
    >
      <MinusIcon size={32} />
    </button>
  )
}
