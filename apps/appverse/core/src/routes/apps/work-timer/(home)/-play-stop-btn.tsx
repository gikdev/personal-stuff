import { PlayIcon, StopIcon } from "@phosphor-icons/react"
import { skins } from "#/shared/skins"
import { useWorkTimerStore } from "../-shared"

export function PlayStopBtn() {
  const startedAt = useWorkTimerStore(s => s.startedAt)
  const endedAt = useWorkTimerStore(s => s.endedAt)
  const start = useWorkTimerStore(s => s.start)
  const end = useWorkTimerStore(s => s.end)
  const isPlaying = startedAt != null && endedAt == null
  const Icon = isPlaying ? StopIcon : PlayIcon

  return (
    <button
      type="button"
      className={skins.btnIcon({ size: "xl", theme: "brand" })}
      onClick={isPlaying ? end : start}
    >
      <Icon size={48} weight="fill" />
    </button>
  )
}
