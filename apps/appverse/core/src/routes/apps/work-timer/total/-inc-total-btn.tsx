import { PlusIcon } from "@phosphor-icons/react"
import { btnIcon } from "#/shared/skins"
import { useWorkTimerStore } from "../-shared"

export function IncTotalBtn() {
  const incTotalSeconds = useWorkTimerStore(s => s.incTotalSeconds)

  return (
    <button
      type="button"
      className={btnIcon({ size: "lg", theme: "glass" })}
      onClick={incTotalSeconds}
    >
      <PlusIcon size={32} />
    </button>
  )
}
