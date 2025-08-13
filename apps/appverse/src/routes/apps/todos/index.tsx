import { ListChecksIcon } from "@phosphor-icons/react"
import { createFileRoute } from "@tanstack/react-router"
import { AppComingSoon } from "../../../components/routes/app-coming-soon"

export const Route = createFileRoute("/apps/todos/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <AppComingSoon Icon={ListChecksIcon} title="کارها" />
}
