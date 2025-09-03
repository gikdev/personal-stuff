import { createFileRoute } from "@tanstack/react-router"
import { skins } from "#/shared/skins"

export const Route = createFileRoute("/login")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div
      className={skins.page({
        className: "items-center justify-center gap-8 p-8",
      })}
    >
      {/*   */}
      {/*   */}
      {/*   */}
    </div>
  )
}
