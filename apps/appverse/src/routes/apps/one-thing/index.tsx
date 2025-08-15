import { NumberCircleOneIcon } from "@phosphor-icons/react"
import { createFileRoute } from "@tanstack/react-router"
import { AppComingSoon } from "../../../components/app-coming-soon"

export const Route = createFileRoute("/apps/one-thing/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <AppComingSoon Icon={NumberCircleOneIcon} title="یه چیز" />
}
