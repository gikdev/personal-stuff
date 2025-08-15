import { HouseIcon } from "@phosphor-icons/react"
import { createFileRoute, Link } from "@tanstack/react-router"
import { TopAppBar } from "#/components/top-app-bar"
import { btnIcon, page } from "#/shared/skins"
import { WorkTimerBottomTabs } from "../-shared"
import { ChangeTotalBtn } from "./-change-total-btn"
import { DecTotalBtn } from "./-dec-total-btn"
import { IncTotalBtn } from "./-inc-total-btn"
import { TotalMoney } from "./-total-money"
import { TotalTime } from "./-total-time"

export const Route = createFileRoute("/apps/work-timer/total/")({
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
