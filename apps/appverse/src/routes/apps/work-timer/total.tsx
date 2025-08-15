import {
  ArrowsCounterClockwiseIcon,
  HouseIcon,
  MinusIcon,
  PlusIcon,
} from "@phosphor-icons/react"
import { createFileRoute, Link } from "@tanstack/react-router"
import { TopAppBar } from "#/components/routes/top-app-bar"
import { btnIcon, page } from "#/shared/skins"
import {
  getCurrencyText,
  useSettingsStore,
  WorkTimerBottomTabs,
} from "./-shared"

export const Route = createFileRoute("/apps/work-timer/total")({
  component: RouteComponent,
})

function RouteComponent() {
  const hourlyRate = useSettingsStore(s => s.hourlyRate)
  const currency = useSettingsStore(s => s.currency)

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
          <p className="text-title font-black text-tusi-100">۰۰:۰۰</p>

          <div className="flex w-full items-center justify-center gap-8">
            <button type="button" className={btnIcon({ size: "lg" })}>
              <MinusIcon size={32} />
            </button>

            <button type="button" className={btnIcon({ size: "lg" })}>
              <ArrowsCounterClockwiseIcon size={32} />
            </button>

            <button type="button" className={btnIcon({ size: "lg" })}>
              <PlusIcon size={32} />
            </button>
          </div>

          <p>
            <span>معادل: </span>
            <span className="font-bold text-tusi-100 text-h3">
              {(3 * hourlyRate).toFixed(2)} {getCurrencyText(currency)}
            </span>
          </p>
        </div>
      </main>

      <WorkTimerBottomTabs />
    </div>
  )
}
