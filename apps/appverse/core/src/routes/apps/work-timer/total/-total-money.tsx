import { toPersianDigits } from "#/shared/utils"
import { type Currency, getCurrencyText, useWorkTimerStore } from "../-shared"

export function TotalMoney() {
  const hourlyRate = useWorkTimerStore(s => s.hourlyRate)
  const currency = useWorkTimerStore(s => s.currency)
  const totalSeconds = useWorkTimerStore(s => s.totalSeconds)

  const totalMoneyFa = totalToMoneyFa(totalSeconds, hourlyRate, currency)

  return (
    <p>
      <span>معادل: </span>
      <span className="font-bold text-tusi-100 text-h3">
        {totalMoneyFa} {getCurrencyText(currency)}
      </span>
    </p>
  )
}

function totalToMoneyFa(
  totalSeconds: number,
  hourlyRate: number,
  currency: Currency,
): string {
  const totalHours = totalSeconds / 60 / 60
  const rawTotalMoney = totalHours * hourlyRate
  const totalMoney = rawTotalMoney.toFixed(currency === "USD" ? 2 : 0)
  const totalMoneyFa = toPersianDigits(totalMoney)
  return totalMoneyFa
}
