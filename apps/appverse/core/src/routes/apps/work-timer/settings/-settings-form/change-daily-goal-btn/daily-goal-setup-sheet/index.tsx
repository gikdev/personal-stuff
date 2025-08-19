import { MathOperationsIcon, MinusIcon, PlusIcon } from "@phosphor-icons/react"
import { useForm } from "@tanstack/react-form"
import { Sheet } from "#/components/sheet"
import { useWorkTimerStore } from "#/routes/apps/work-timer/-shared"
import * as skins from "#/shared/skins"

interface DailyGoalSetupFormValues {
  daysPerMonth: number
  idealIncome: number
}

const defaultValues: DailyGoalSetupFormValues = {
  daysPerMonth: 20,
  idealIncome: 10_000,
}

function calcDailyTimeTarget(values: DailyGoalSetupFormValues): number {
  const { idealIncome, daysPerMonth } = values

  if (idealIncome <= 0) throw new Error("درآمد ایده‌آل باید بیشتر از ۰ باشه!")
  if (daysPerMonth <= 0)
    throw new Error("تعداد روز در ماه باید بیشتر از ۰ باشه!")

  const hourlyRate = useWorkTimerStore.getState().hourlyRate

  const timeTargetInSeconds =
    (idealIncome / daysPerMonth / hourlyRate) * 60 * 60

  return Math.round(timeTargetInSeconds)
}

interface DailyGoalSetupSheetProps {
  onClose?: () => void
}

export function DailyGoalSetupSheet({ onClose }: DailyGoalSetupSheetProps) {
  const form = useForm({
    defaultValues,
    onSubmit: ({ value }) => {
      const dailyTimeTarget = calcDailyTimeTarget(value)
      useWorkTimerStore.setState({ dailyTimeTarget })
      onClose?.()
    },
  })

  return (
    <Sheet.Container onOverlayClick={onClose}>
      <Sheet.Handle />
      <Sheet.Content className="flex flex-col gap-4">
        <form.Field
          name="daysPerMonth"
          validators={{
            onChange: ({ value }) => {
              if (Number.isNaN(value)) return "عدد درست وارد کن!"
              if (value <= 0) return "عدد باید مثبت (بیشتر از ۰) باشه!"
              return undefined
            },
          }}
        >
          {field => (
            <div className={skins.labeler()}>
              <label htmlFor="days-per-month">تعداد روز در ماه</label>

              <div className={skins.elementGroup()}>
                <button
                  disabled={field.state.value <= 1}
                  type="button"
                  onClick={() => field.handleChange(field.state.value - 1)}
                  className={skins.btnIcon({
                    size: "inputish",
                    theme: "inputish",
                  })}
                >
                  <MinusIcon size={24} />
                </button>

                <input
                  dir="ltr"
                  id="days-per-month"
                  step="0"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  type="number"
                  onChange={e =>
                    field.handleChange(Math.floor(e.target.valueAsNumber))
                  }
                  className={skins.input({
                    className: "w-full flex-1 text-center",
                  })}
                />

                <button
                  type="button"
                  onClick={() => field.handleChange(field.state.value + 1)}
                  className={skins.btnIcon({
                    size: "inputish",
                    theme: "inputish",
                  })}
                >
                  <PlusIcon size={24} />
                </button>
              </div>

              {!field.state.meta.isValid && (
                <p className={skins.errorMsg()}>
                  {field.state.meta.errors.join(",")}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <form.Field
          name="idealIncome"
          validators={{
            onChange: ({ value }) => {
              if (Number.isNaN(value)) return "عدد درست وارد کن!"
              if (value < 1000) return "عدد باید حداقل ۱۰۰۰ باشه!"
              return undefined
            },
          }}
        >
          {field => (
            <label className={skins.labeler()}>
              <p>درآمد ایده‌آل</p>

              <input
                dir="ltr"
                type="number"
                className={skins.input()}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.valueAsNumber)}
              />

              {!field.state.meta.isValid && (
                <p className={skins.errorMsg()}>
                  {field.state.meta.errors.join(",")}
                </p>
              )}
            </label>
          )}
        </form.Field>
      </Sheet.Content>

      <Sheet.Footer>
        <form.Subscribe selector={s => [s.canSubmit, s.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <button
              type="button"
              onClick={() => form.handleSubmit()}
              disabled={!canSubmit || isSubmitting}
              className="
                rounded-sm-elements border-none py-1 px-6
                flex gap-2 items-center justify-center
                text-tusi-100 disabled:text-tusi-400
                bg-brand-600 disabled:bg-tusi-600 
                hover:bg-brand-700 disabled:hover:bg-tusi-600
                active:scale-95 disabled:active:scale-100
                cursor-pointer disabled:cursor-not-allowed
                min-h-14 w-full 
              "
            >
              <MathOperationsIcon size={24} weight="fill" />
              <span>محاسبه هدف روزانه</span>
            </button>
          )}
        </form.Subscribe>
      </Sheet.Footer>
    </Sheet.Container>
  )
}
