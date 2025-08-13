import { TimerIcon } from "@phosphor-icons/react"
import { createFileRoute } from "@tanstack/react-router"
import { AppComingSoon } from "../../../components/routes/app-coming-soon"

export const Route = createFileRoute("/apps/work-timer/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <AppComingSoon Icon={TimerIcon} title="تایمر کار" />
}
