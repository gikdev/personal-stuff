import {
  ArrowUUpRightIcon,
  HouseIcon,
  PaperPlaneTiltIcon,
  PlayIcon,
} from "@phosphor-icons/react"
import { createFileRoute, Link } from "@tanstack/react-router"
import { TopAppBar } from "#/components/routes/top-app-bar"
import { WorkTimerBottomTabs } from "./-shared"

export const Route = createFileRoute("/apps/work-timer/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col h-dvh">
      <TopAppBar
        title="تایمر کار"
        startingStuff={
          <Link
            to="/"
            className="size-12 flex items-center justify-center p-2 cursor-pointer hover:bg-tusi-800 hover:text-tusi-100 rounded-md-elements"
          >
            <HouseIcon size={32} />
          </Link>
        }
      />

      <main className="flex flex-col flex-1 items-center justify-center gap-8 p-4">
        <div className="flex flex-col gap-8 items-center">
          <p className="text-title font-black text-tusi-100">۰۰:۰۰:۰۰</p>

          <div className="flex w-full items-center justify-center gap-8">
            <button
              type="button"
              className="size-16 p-4 cursor-pointer hover:bg-tusi-800 hover:text-tusi-100 rounded-md-elements"
            >
              <PaperPlaneTiltIcon size={32} />
            </button>

            <button
              type="button"
              className="size-24 p-6 cursor-pointer bg-brand-600 text-tusi-100 hover:bg-brand-700 rounded-lg-elements"
            >
              <PlayIcon size={48} weight="fill" />
            </button>

            <button
              type="button"
              className="size-16 p-4 cursor-pointer hover:bg-tusi-800 hover:text-tusi-100 rounded-md-elements"
            >
              <ArrowUUpRightIcon size={32} />
            </button>
          </div>
        </div>
      </main>

      <WorkTimerBottomTabs />
    </div>
  )
}
