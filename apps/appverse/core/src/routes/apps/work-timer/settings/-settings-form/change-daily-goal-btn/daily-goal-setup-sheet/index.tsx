import { MathOperationsIcon, MinusIcon, PlusIcon } from "@phosphor-icons/react"
import { Sheet } from "#/components/sheet"
import * as skins from "#/shared/skins"

interface DailyGoalSetupSheetProps {
  onClose?: () => void
}

export function DailyGoalSetupSheet({ onClose }: DailyGoalSetupSheetProps) {
  return (
    <Sheet.Container onOverlayClick={onClose}>
      <Sheet.Handle />
      <Sheet.Content className="flex flex-col gap-4">
        <div className={skins.labeler()}>
          <label htmlFor="days-per-month">تعداد روز در ماه</label>

          <div className={skins.elementGroup()}>
            <button
              type="button"
              className={skins.btnIcon({ size: "inputish", theme: "inputish" })}
            >
              <MinusIcon size={24} />
            </button>

            <input
              dir="ltr"
              type="number"
              id="days-per-month"
              className={skins.input({
                className: "w-full flex-1 text-center",
              })}
            />

            <button
              type="button"
              className={skins.btnIcon({ size: "inputish", theme: "inputish" })}
            >
              <PlusIcon size={24} />
            </button>
          </div>
        </div>

        <label className={skins.labeler()}>
          <p>درآمد ایده‌آل</p>

          <input dir="ltr" type="number" className={skins.input()} />
        </label>
      </Sheet.Content>
      <Sheet.Footer>
        <button
          type="button"
          className="rounded-sm-elements border-none py-1 px-6 flex gap-2 items-center justify-center text-tusi-100 bg-brand-600 hover:bg-brand-700 min-h-14 w-full cursor-pointer active:scale-95"
        >
          <MathOperationsIcon size={24} weight="fill" />
          <span>محاسبه هدف روزانه</span>
        </button>
      </Sheet.Footer>
    </Sheet.Container>
  )
}
