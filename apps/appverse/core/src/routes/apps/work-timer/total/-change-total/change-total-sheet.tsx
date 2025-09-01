import { MinusIcon, PencilSimpleIcon, PlusIcon } from "@phosphor-icons/react"
import { z } from "zod/v4"
import { Sheet } from "#/components/sheet"
import { useWorkTimerStore } from "#/routes/apps/work-timer/-shared"
import { useAppForm } from "#/shared/forms"
import { skins } from "#/shared/skins"

const ChangeTotalSchema = z.object({
  hours: z
    .number("این ورودی الزامی است")
    .nonnegative("لطفا عدد غیر منفی (بیشتر از ۰) وارد کنید"),
  minutes: z
    .number("این ورودی الزامی است")
    .nonnegative("لطفا عدد غیر منفی (بیشتر از ۰) وارد کنید"),
  seconds: z
    .number("این ورودی الزامی است")
    .nonnegative("لطفا عدد غیر منفی (بیشتر از ۰) وارد کنید"),
})

type ChangeTotalFormValues = z.infer<typeof ChangeTotalSchema>

const defaultValues: ChangeTotalFormValues = {
  hours: 0,
  minutes: 0,
  seconds: 0,
}

interface FormMeta {
  submitAction: "change" | "add" | "subtract" | null
}

const defaultMeta: FormMeta = {
  submitAction: null,
}

interface ChangeTotalSheetProps {
  onClose?: () => void
}

export function ChangeTotalSheet({ onClose }: ChangeTotalSheetProps) {
  const form = useAppForm({
    defaultValues,
    validators: {
      onChange: ChangeTotalSchema,
    },
    onSubmitMeta: defaultMeta,
    onSubmit: ({ value, meta }) => {
      const seconds = calcFinalTotalSeconds(value)

      if (meta.submitAction === "change") {
        useWorkTimerStore.setState({ totalSeconds: seconds })
      }

      if (meta.submitAction === "add") {
        useWorkTimerStore.setState(s => ({
          totalSeconds: s.totalSeconds + seconds,
        }))
      }

      if (meta.submitAction === "subtract") {
        useWorkTimerStore.setState(s => ({
          totalSeconds: Math.max(0, s.totalSeconds - seconds),
        }))
      }

      onClose?.()
    },
  })

  return (
    <Sheet.Container onOverlayClick={onClose}>
      <form.AppForm>
        <Sheet.Handle />

        <Sheet.Content className="flex flex-col gap-4">
          <form.AppField name="hours">
            {field => <field.NumberWithBtns label="ساعت" />}
          </form.AppField>

          <form.AppField name="minutes">
            {field => <field.NumberWithBtns label="دقیقه" />}
          </form.AppField>

          <form.AppField name="seconds">
            {field => <field.NumberWithBtns label="ثانیه" />}
          </form.AppField>
        </Sheet.Content>

        <Sheet.Footer>
          <div className={skins.elementGroup({ className: "flex-col" })}>
            <div className="flex gap-1 w-full">
              <form.SubmitBtn
                Icon={MinusIcon}
                title={null}
                onClick={() => form.handleSubmit({ submitAction: "subtract" })}
                className="flex-1"
              />

              <form.SubmitBtn
                Icon={PlusIcon}
                title={null}
                onClick={() => form.handleSubmit({ submitAction: "add" })}
                className="flex-1"
              />
            </div>

            <form.SubmitBtn
              Icon={PencilSimpleIcon}
              title="تغییر مجموع کار"
              onClick={() => form.handleSubmit({ submitAction: "change" })}
              className="w-full"
              color="brand"
            />
          </div>
        </Sheet.Footer>
      </form.AppForm>
    </Sheet.Container>
  )
}

function calcFinalTotalSeconds(values: ChangeTotalFormValues): number {
  const { hours, minutes, seconds } = values

  const hoursInSeconds = hours * 60 * 60
  const minutesInSeconds = minutes * 60

  return hoursInSeconds + minutesInSeconds + seconds
}
