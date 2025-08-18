import { useId } from "react"
import * as skins from "#/shared/skins"
import { TimeFormatter } from "#/shared/utils"
import { type Currency, useWorkTimerStore } from "../../-shared"
import { ChangeDailyGoalBtn } from "./change-daily-goal-btn"

const inputStyle = skins.input({ className: "flex-1 w-full" })

export function SettingsForm() {
  return (
    <>
      <HourlyInput />
      <CurrencyInput />
      <DailyGoalInput />
    </>
  )
}

function HourlyInput() {
  const hourlyRate = useWorkTimerStore(s => s.hourlyRate)
  const setHourlyRate = useWorkTimerStore(s => s.setHourlyRate)

  return (
    <label className={skins.labeler()}>
      <p>مقدار درآمد در ساعت</p>

      <input
        dir="ltr"
        type="number"
        className={skins.input()}
        value={hourlyRate}
        onChange={e => {
          const val = e.target.value
          setHourlyRate(val === "" ? 0 : Number(val))
        }}
      />
    </label>
  )
}

function CurrencyInput() {
  const currency = useWorkTimerStore(s => s.currency)
  const setCurrency = useWorkTimerStore(s => s.setCurrency)

  return (
    <label className={skins.labeler()}>
      <p>واحد پولی</p>

      <select
        className={skins.select()}
        value={currency}
        onChange={e => setCurrency(e.target.value as Currency)}
      >
        <option value={"IRR" satisfies Currency}>ریال</option>
        <option value={"IRT" satisfies Currency}>تومان</option>
        <option value={"USD" satisfies Currency}>دلار</option>
      </select>
    </label>
  )
}

function DailyGoalInput() {
  const id = useId()
  const dailyTimeTarget = useWorkTimerStore(s => s.dailyTimeTarget)
  const target = new TimeFormatter(dailyTimeTarget).toPersianTime()

  return (
    <div className={skins.labeler()}>
      <label htmlFor={id}>هدف روزانه</label>

      <div className="flex h-14 gap-1 rounded-md-elements overflow-hidden w-full">
        <ChangeDailyGoalBtn />

        <input
          id={id}
          dir="ltr"
          className={inputStyle}
          readOnly
          defaultValue={target}
        />
      </div>
    </div>
  )
}
