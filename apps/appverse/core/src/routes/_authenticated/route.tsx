import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"
import { useAuthStore } from "#/auth"

export const Route = createFileRoute("/_authenticated")({
  component: () => <Outlet />,
  beforeLoad({ location }) {
    const { isAuthenticated } = useAuthStore.getState()

    if (!isAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      })
    }
  },
})
