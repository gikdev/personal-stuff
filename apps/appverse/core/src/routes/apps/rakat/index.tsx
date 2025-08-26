import { createFileRoute, Navigate } from "@tanstack/react-router"
import { useRakatStore } from "./-shared/store"

export const Route = createFileRoute("/apps/rakat/")({
  component: RouteComponent,
})

function RouteComponent() {
  const rakatCount = useRakatStore(s => s.rakatCount)

  const isValidRakat = [2, 3, 4].includes(rakatCount)

  return (
    <Navigate to={isValidRakat ? "/apps/rakat/pray" : "/apps/rakat/choose"} />
  )
}
