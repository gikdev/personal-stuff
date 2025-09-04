import { MathOperationsIcon } from "@phosphor-icons/react"
import { z } from "zod/v4"
import { Sheet } from "#/components/sheet"
import { useAppForm } from "#/shared/forms"
import { skins } from "#/shared/skins"
import { useWorkTimerStore } from "../../../-shared"

const DailyGoalSetupSchema = z.object({
  daysPerMonth: z
    .number("تعداد روز کاری الزامی است")
    .min(1, "عدد باید مثبت (بیشتر از ۰) باشه!")
    .max(31, "تعداد روز نمی‌تواند بیشتر از ۳۱ باشد"),

  idealIncome: z
    .number("درآمد ایده‌آل الزامی است")
    .min(1000, "عدد باید حداقل ۱،۰۰۰ باشه!")
    .max(1000000, "درآمد ایده‌آل نمی‌تواند بیشتر از ۱،۰۰۰،۰۰۰ باشد"),
})

type DailyGoalSetupFormValues = z.infer<typeof DailyGoalSetupSchema>

const defaultValues: DailyGoalSetupFormValues = {
  daysPerMonth: 20,
  idealIncome: 10_000,
}

interface DailyGoalSetupSheetProps {
  onClose?: () => void
}

export function DailyGoalSetupSheet({ onClose }: DailyGoalSetupSheetProps) {
  const form = useAppForm({
    defaultValues,
    validators: {
      onChange: DailyGoalSetupSchema,
    },
    onSubmit: ({ value }) => {
      const dailyTimeTarget = calcDailyTimeTarget(value)
      useWorkTimerStore.setState({ dailyTimeTarget })
      onClose?.()
    },
  })

  return (
    <Sheet.Container onOverlayClick={onClose}>
      <form.AppForm>
        <Sheet.Handle />

        <Sheet.Content className="flex flex-col gap-4">
          <form.AppField name="daysPerMonth">
            {field => <field.NumberWithBtns label="تعداد روز کاری در ماه" />}
          </form.AppField>

          <form.AppField name="idealIncome">
            {field => <field.SimpleNumber label="درآمد ایده‌آل" />}
          </form.AppField>
        </Sheet.Content>

        <Sheet.Footer>
          <form.SubmitBtn
            iconStarting={<MathOperationsIcon weight="fill" />}
            title="محاسبه هدف روزانه"
            className={skins.btn({
              intent: "brand",
              mode: "contained",
              className: "w-full",
            })}
          />
        </Sheet.Footer>
      </form.AppForm>
    </Sheet.Container>
  )
}

function calcDailyTimeTarget(values: DailyGoalSetupFormValues): number {
  const { idealIncome, daysPerMonth } = values

  // These checks are now redundant since Zod validates them, but keeping for runtime safety
  if (idealIncome <= 0) throw new Error("درآمد ایده‌آل باید بیشتر از ۰ باشه!")
  if (daysPerMonth <= 0)
    throw new Error("تعداد روز در ماه باید بیشتر از ۰ باشه!")

  const hourlyRate = useWorkTimerStore.getState().hourlyRate
  const timeTargetInSeconds =
    (idealIncome / daysPerMonth / hourlyRate) * 60 * 60
  return Math.round(timeTargetInSeconds)
}
