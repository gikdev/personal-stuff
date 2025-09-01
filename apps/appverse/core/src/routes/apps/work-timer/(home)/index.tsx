import { HouseIcon } from "@phosphor-icons/react"
import { createFileRoute, Link } from "@tanstack/react-router"
import { TopAppBar } from "#/components/top-app-bar"
import { skins } from "#/shared/skins"
import { WorkTimerBottomTabs } from "../-shared"
import { PlayStopBtn } from "./-play-stop-btn"
import { ResetBtn } from "./-reset-btn"
import { SendBtn } from "./-send-btn"
import { TimerTime } from "./-timer-time"

export const Route = createFileRoute("/apps/work-timer/(home)/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={skins.page()}>
      <TopAppBar
        title="تایمر کار"
        startingStuff={
          <Link to="/" className={skins.btnIcon()}>
            <HouseIcon size={32} />
          </Link>
        }
      />

      <main className="flex flex-col flex-1 items-center justify-center gap-8 p-4">
        <div className="flex flex-col gap-8 items-center">
          <TimerTime />

          <div className="flex w-full items-center justify-center gap-8">
            <SendBtn />

            <PlayStopBtn />

            <ResetBtn />
          </div>
        </div>
      </main>

      <WorkTimerBottomTabs />
    </div>
  )
}
