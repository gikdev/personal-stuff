import { HouseIcon } from "@phosphor-icons/react"
import { createFileRoute, Link } from "@tanstack/react-router"
import { TopAppBar } from "#/components/routes/top-app-bar"
import { btnIcon, page } from "#/shared/skins"
import { WorkTimerBottomTabs } from "../-shared"
import { SettingsForm } from "./-settings-form"

export const Route = createFileRoute("/apps/work-timer/settings/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={page()}>
      <TopAppBar
        title="تنظیمات"
        startingStuff={
          <Link to="/" className={btnIcon()}>
            <HouseIcon size={32} />
          </Link>
        }
      />

      <main className="flex flex-col flex-1 items-center gap-4 p-4">
        <SettingsForm />
      </main>

      <WorkTimerBottomTabs />
    </div>
  )
}
