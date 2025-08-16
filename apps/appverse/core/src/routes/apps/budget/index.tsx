import { TipJarIcon } from "@phosphor-icons/react"
import { createFileRoute } from "@tanstack/react-router"
import { AppComingSoon } from "../../../components/app-coming-soon"

export const Route = createFileRoute("/apps/budget/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <AppComingSoon Icon={TipJarIcon} title="بودجه" />
}
