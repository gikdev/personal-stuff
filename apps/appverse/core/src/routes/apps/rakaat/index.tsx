import { HandsPrayingIcon } from "@phosphor-icons/react"
import { createFileRoute } from "@tanstack/react-router"
import { AppComingSoon } from "#/components/app-coming-soon"

export const Route = createFileRoute("/apps/rakaat/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <AppComingSoon Icon={HandsPrayingIcon} title="رکعت" />
}
