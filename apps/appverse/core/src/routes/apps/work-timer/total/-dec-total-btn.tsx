import { MinusIcon } from "@phosphor-icons/react"
import { useKeyPress } from "react-haiku"
import { skins } from "#/shared/skins"
import { useWorkTimerStore } from "../-shared"

const decTotalSeconds = useWorkTimerStore.getState().decTotalSeconds

export function DecTotalBtn() {
  useKeyPress(["-"], decTotalSeconds)

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
