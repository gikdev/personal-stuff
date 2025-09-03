import { PlayIcon, StopIcon } from "@phosphor-icons/react"
import { useKeyPress } from "react-haiku"
import { skins } from "#/shared/skins"
import { useWorkTimerStore } from "../-shared"

const start = useWorkTimerStore.getState().start
const end = useWorkTimerStore.getState().end

export function PlayStopBtn() {
  const startedAt = useWorkTimerStore(s => s.startedAt)
  const endedAt = useWorkTimerStore(s => s.endedAt)
  const isPlaying = startedAt != null && endedAt == null
  const Icon = isPlaying ? StopIcon : PlayIcon
  const thingToDo = isPlaying ? end : start

  useKeyPress([" "], thingToDo)

  return (
    <button
      type="button"
      className={skins.btnIcon({ size: "xl", theme: "brand" })}
      onClick={thingToDo}
    >
      <Icon size={48} weight="fill" />
    </button>
  )
}
