import {
  createHashHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router"
import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import "./shared/styles.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { GeneralError } from "./routes/-general-error"
import { NotFound } from "./routes/-not-found"
import { Pending } from "./routes/-pending"
import { routeTree } from "./routeTree.gen"

const hashHistory = createHashHistory()

const router = createRouter({
  routeTree,
  history: hashHistory,
  defaultPendingComponent: Pending,
  defaultNotFoundComponent: NotFound,
  defaultErrorComponent: GeneralError,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const queryClient = new QueryClient()

const rootElement = document.getElementById("root")

if (!rootElement) throw new Error("no root element!")

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  )
}
