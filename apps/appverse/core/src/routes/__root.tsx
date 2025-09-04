import { createRootRoute, Outlet } from "@tanstack/react-router"
import { Bounce, ToastContainer } from "react-toastify"

export const Route = createRootRoute({
  component: () => (
    <>
      <ToastProvider />
      <Outlet />
      {/* <TanStackRouterDevtools position="top-left" /> */}
    </>
  ),
})

const ToastProvider = () => (
  <ToastContainer
    position="bottom-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    toastClassName="font-main!"
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    transition={Bounce}
  />
)
