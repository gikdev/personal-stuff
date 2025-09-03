import { PencilSimpleIcon } from "@phosphor-icons/react"
import { memo, useState } from "react"
import { skins } from "#/shared/skins"
import { DailyGoalSetupSheet } from "./daily-goal-setup-sheet"

export const ChangeDailyGoalBtn = memo(_ChangeDailyGoalBtn)
function _ChangeDailyGoalBtn() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={skins.btnIcon({ size: "inputish", theme: "inputish" })}
      >
        <PencilSimpleIcon size={24} />
      </button>
      {isOpen && <DailyGoalSetupSheet onClose={() => setOpen(false)} />}
    </>
  )
}
