import {
  ArrowUUpRightIcon,
  HouseIcon,
  PaperPlaneTiltIcon,
  PlayIcon,
  StopIcon,
} from "@phosphor-icons/react"
import { createFileRoute, Link } from "@tanstack/react-router"
import { useEffect, useReducer } from "react"
import { TopAppBar } from "#/components/routes/top-app-bar"
import { btnIcon, page } from "#/shared/skins"
import { TimeFormatter } from "#/shared/utils"
import { useWorkTimerStore, WorkTimerBottomTabs } from "./-shared"

export const Route = createFileRoute("/apps/work-timer/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={page()}>
      <TopAppBar
        title="تایمر کار"
        startingStuff={
          <Link to="/" className={btnIcon()}>
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

function TimerTime() {
  const getElapsedSeconds = useWorkTimerStore(s => s.getElapsedSeconds)
  const timerTime = new TimeFormatter(getElapsedSeconds()).toPersianTime()
  const [, refetch] = useReducer(x => x + 1, 0)

  useEffect(() => {
    const interval = setInterval(() => refetch(), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <p dir="ltr" className="text-title font-black text-tusi-100">
      {timerTime}
    </p>
  )
}

function SendBtn() {
  const addElapsedToTotal = useWorkTimerStore(s => s.addElapsedToTotal)
  const resetTimer = useWorkTimerStore(s => s.resetTimer)

  const handleClick = () => {
    addElapsedToTotal()
    resetTimer()
  }

  return (
    <button
      type="button"
      className={btnIcon({ size: "lg" })}
      onClick={handleClick}
    >
      <PaperPlaneTiltIcon size={32} />
    </button>
  )
}

function PlayStopBtn() {
  const startedAt = useWorkTimerStore(s => s.startedAt)
  const endedAt = useWorkTimerStore(s => s.endedAt)
  const start = useWorkTimerStore(s => s.start)
  const end = useWorkTimerStore(s => s.end)
  const isPlaying = startedAt != null && endedAt == null
  const Icon = isPlaying ? StopIcon : PlayIcon

  return (
    <button
      type="button"
      className={btnIcon({ size: "xl", theme: "brand" })}
      onClick={isPlaying ? end : start}
    >
      <Icon size={48} weight="fill" />
    </button>
  )
}

function ResetBtn() {
  const resetTimer = useWorkTimerStore(s => s.resetTimer)

  return (
    <button
      type="button"
      className={btnIcon({ size: "lg" })}
      onClick={resetTimer}
    >
      <ArrowUUpRightIcon size={32} />
    </button>
  )
}
