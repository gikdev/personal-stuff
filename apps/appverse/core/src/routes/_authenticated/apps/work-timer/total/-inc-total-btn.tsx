import { PlusIcon } from "@phosphor-icons/react"
import { useKeyPress } from "react-haiku"
import { skins } from "#/shared/skins"
import { useWorkTimerStore } from "../-shared"

const incTotalSeconds = useWorkTimerStore.getState().incTotalSeconds

export function IncTotalBtn() {
  useKeyPress(["+"], incTotalSeconds)
  useKeyPress(["="], incTotalSeconds)

  return (
    <button
      type="button"
      className={skins.btnIcon({ size: "lg", theme: "glass" })}
      onClick={incTotalSeconds}
    >
      <PlusIcon size={32} />
    </button>
  )
}
