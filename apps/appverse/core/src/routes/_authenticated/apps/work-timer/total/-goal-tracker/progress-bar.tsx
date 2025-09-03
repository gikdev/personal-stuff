import { toPersianDigits } from "#/shared/utils"
import {
  getCurrencyText,
  useDailyProgress,
  useWorkTimerStore,
} from "../../-shared"

export function ProgressBar() {
  return (
    <div className="h-full flex-1 bg-tusi-800 relative">
      <ProgressBarCore />

      <ProgressBarContent />
    </div>
  )
}

function ProgressBarCore() {
  const dailyProgressPercent = useDailyProgress()

  const width = `${dailyProgressPercent}%`

  return (
    <div className="w-full h-full flex justify-start">
      <div
        className="h-full bg-brand-600 rounded-sm-elements"
        style={{ width }}
      />
    </div>
  )
}

function ProgressBarContent() {
  const dailyProgressPercentage = useDailyGoalPercentageFa()
  const totalMoney = useTotalMoneyFa()

  return (
    <div className="absolute inset-0 flex justify-between items-center px-2 text-tusi-100 font-bold">
      <span>{totalMoney}</span>
      <span>{dailyProgressPercentage}</span>
    </div>
  )
}

function useDailyGoalPercentageFa() {
  const dailyProgressPercent = useDailyProgress()

  const progressPercentage = dailyProgressPercent
  const percentageFa = toPersianDigits(progressPercentage.toString())

  return `${percentageFa}٪`
}

function useTotalMoneyFa() {
  const hourlyRate = useWorkTimerStore(s => s.hourlyRate)
  const currency = useWorkTimerStore(s => s.currency)
  const totalSeconds = useWorkTimerStore(s => s.totalSeconds)

  const totalHours = totalSeconds / 60 / 60
  const rawTotalMoney = totalHours * hourlyRate
  const totalMoney = rawTotalMoney.toFixed(currency === "USD" ? 2 : 0)
  const totalMoneyFa = toPersianDigits(totalMoney)
  const totalMoneyWithCurrency = `${totalMoneyFa} ${getCurrencyText(currency)}`

  return totalMoneyWithCurrency
}
