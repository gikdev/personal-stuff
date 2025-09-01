import { HouseIcon } from "@phosphor-icons/react"
import { createFileRoute, Link } from "@tanstack/react-router"
import { TopAppBar } from "#/components/top-app-bar"
import { skins } from "#/shared/skins"
import { WorkTimerBottomTabs } from "../-shared"
import { ChangeTotal } from "./-change-total"
import { DecTotalBtn } from "./-dec-total-btn"
import { GoalTracker } from "./-goal-tracker"
import { IncTotalBtn } from "./-inc-total-btn"
import { TotalTime } from "./-total-time"

export const Route = createFileRoute("/apps/work-timer/total/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={skins.page()}>
      <TopAppBar
        title="مجموع کار"
        startingStuff={
          <Link to="/" className={skins.btnIcon()}>
            <HouseIcon size={32} />
          </Link>
        }
      />

      <main className="flex flex-col flex-1 items-center justify-center gap-8 p-4">
        <div className="flex flex-col gap-8 items-center">
          <TotalTime />
          <Controls />
          <GoalTracker />
        </div>
      </main>

      <WorkTimerBottomTabs />
    </div>
  )
}

const Controls = () => (
  <div className="flex w-full items-center justify-center gap-8">
    <DecTotalBtn />
    <ChangeTotal />
    <IncTotalBtn />
  </div>
)
