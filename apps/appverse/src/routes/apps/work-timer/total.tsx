import {
  ArrowsCounterClockwiseIcon,
  HouseIcon,
  MinusIcon,
  PlusIcon,
} from "@phosphor-icons/react"
import { createFileRoute, Link } from "@tanstack/react-router"
import { TopAppBar } from "#/components/top-app-bar"
import { btnIcon, page } from "#/shared/skins"
import { TimeFormatter, toPersianDigits } from "#/shared/utils"
import {
  type Currency,
  getCurrencyText,
  useWorkTimerStore,
  WorkTimerBottomTabs,
} from "./-shared"

export const Route = createFileRoute("/apps/work-timer/total")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={page()}>
      <TopAppBar
        title="مجموع کار"
        startingStuff={
          <Link to="/" className={btnIcon()}>
            <HouseIcon size={32} />
          </Link>
        }
      />

      <main className="flex flex-col flex-1 items-center justify-center gap-8 p-4">
        <div className="flex flex-col gap-8 items-center">
          <TotalTime />

          <div className="flex w-full items-center justify-center gap-8">
            <DecTotalBtn />

            <ChangeTotalBtn />

            <IncTotalBtn />
          </div>

          <TotalMoney />
        </div>
      </main>

      <WorkTimerBottomTabs />
    </div>
  )
}

function TotalTime() {
  const totalSeconds = useWorkTimerStore(s => s.totalSeconds)
  const total = new TimeFormatter(totalSeconds).toPersianTime()

  return (
    <p className="text-title font-black text-tusi-100" dir="ltr">
      {total}
    </p>
  )
}

function DecTotalBtn() {
  const decTotalSeconds = useWorkTimerStore(s => s.decTotalSeconds)

  return (
    <button
      type="button"
      className={btnIcon({ size: "lg" })}
      onClick={decTotalSeconds}
    >
      <MinusIcon size={32} />
    </button>
  )
}

function ChangeTotalBtn() {
  const totalSeconds = useWorkTimerStore(s => s.totalSeconds)
  const setTotalSeconds = useWorkTimerStore(s => s.setTotalSeconds)

  const handleClick = () => {
    const input = window.prompt(
      "مقدار جدید رو وارد کنید:",
      totalSeconds.toString(),
    )
    if (!input) return

    // biome-ignore lint/security/noGlobalEval: I have to...
    const evaluated: string | number = eval(input)
    const parsed = Number(evaluated)
    const isNumber = !Number.isNaN(parsed)

    const result = isNumber ? parsed : totalSeconds
    setTotalSeconds(result)
  }

  return (
    <button
      type="button"
      className={btnIcon({ size: "lg" })}
      onClick={handleClick}
    >
      <ArrowsCounterClockwiseIcon size={32} />
    </button>
  )
}

function IncTotalBtn() {
  const incTotalSeconds = useWorkTimerStore(s => s.incTotalSeconds)

  return (
    <button
      type="button"
      className={btnIcon({ size: "lg" })}
      onClick={incTotalSeconds}
    >
      <PlusIcon size={32} />
    </button>
  )
}

function TotalMoney() {
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
