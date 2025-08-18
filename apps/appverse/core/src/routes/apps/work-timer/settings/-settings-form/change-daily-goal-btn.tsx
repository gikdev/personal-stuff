import { MathOperationsIcon, PencilSimpleIcon } from "@phosphor-icons/react"
import { memo, useState } from "react"
import { Sheet } from "#/components/sheet"
import * as skins from "#/shared/skins"

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
      // disabled
      type="button"
      onClick={onClick}
      className={skins.btnIcon({ size: "inputish", theme: "inputish" })}
    >
      <PencilSimpleIcon size={24} />
    </button>
  )
}

interface DailyGoalSetupSheetProps {
  onClose?: () => void
}

function DailyGoalSetupSheet({ onClose }: DailyGoalSetupSheetProps) {
  return (
    <Sheet.Container onOverlayClick={onClose}>
      <Sheet.Handle />
      <Sheet.Content>
        <p className="text-center">کدنویسان مشغول کارند...</p>
      </Sheet.Content>
      <Sheet.Footer>
        <button type='button' className="rounded-sm-elements border-none py-1 px-6 flex gap-2 items-center justify-center text-tusi-100 bg-brand-600 hover:bg-brand-700 min-h-14 w-full cursor-pointer active:scale-95">
          <MathOperationsIcon size={24} weight="fill" />
          <span>محاسبه هدف روزانه</span>
        </button>
      </Sheet.Footer>
    </Sheet.Container>
  )
}
