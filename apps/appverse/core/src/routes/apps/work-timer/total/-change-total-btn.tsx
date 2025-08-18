import { PencilSimpleIcon } from "@phosphor-icons/react"
import { btnIcon } from "#/shared/skins"
import { useWorkTimerStore } from "../-shared"

export function ChangeTotalBtn() {
  const totalSeconds = useWorkTimerStore(s => s.totalSeconds)
  const setTotalSeconds = useWorkTimerStore(s => s.setTotalSeconds)

  const handleClick = () => {
    const input = window.prompt(
      "مقدار جدید رو وارد کنید:",
      totalSeconds.toString(),
    )
    if (!input) return

    // biome-ignore lint/security/noGlobalEval: I have to...
    const evaluated: string | number = eval(input)
    const parsed = Number(evaluated)
    const isNumber = !Number.isNaN(parsed)

    const result = isNumber ? parsed : totalSeconds
    setTotalSeconds(result)
  }

  return (
    <button
      type="button"
      className={btnIcon({ size: "lg", theme: "glass" })}
      onClick={handleClick}
    >
      <PencilSimpleIcon size={32} />
    </button>
  )
}
