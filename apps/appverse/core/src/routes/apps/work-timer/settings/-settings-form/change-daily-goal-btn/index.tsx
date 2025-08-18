import { PencilSimpleIcon } from "@phosphor-icons/react"
import { memo, useState } from "react"
import * as skins from "#/shared/skins"
import { DailyGoalSetupSheet } from "./daily-goal-setup-sheet"

export const ChangeDailyGoalBtn = memo(_ChangeDailyGoalBtn)
function _ChangeDailyGoalBtn() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <EditBtn onClick={() => setOpen(true)} />
      {isOpen && <DailyGoalSetupSheet onClose={() => setOpen(false)} />}
    </>
  )
}

interface EditBtnProps {
  onClick?: () => void
}

function EditBtn({ onClick }: EditBtnProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={skins.btnIcon({ size: "inputish", theme: "inputish" })}
    >
      <PencilSimpleIcon size={24} />
    </button>
  )
}
