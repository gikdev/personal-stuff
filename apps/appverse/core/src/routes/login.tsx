import { SignInIcon } from "@phosphor-icons/react"
import { createFileRoute, useLocation, useRouter } from "@tanstack/react-router"
import { toast } from "react-toastify"
import { useAuthStore } from "#/auth"
import { useAppForm } from "#/shared/forms"
import { skins } from "#/shared/skins"
import config from "../../config.json"

export const Route = createFileRoute("/login")({
  component: RouteComponent,
})

function RouteComponent() {
  const router = useRouter()
  const { search } = useLocation()

  const form = useAppForm({
    defaultValues: {
      password: "",
    },
    onSubmit: ({ value }) => {
      const { authenticate } = useAuthStore.getState()
      const isAuthenticated = authenticate(value.password)
      if (!isAuthenticated) {
        toast.error("رمز اشتباه هست!")
        return
      }

      if ("redirect" in search && typeof search.redirect === "string") {
        router.history.push(search.redirect)
      } else {
        router.history.push("/")
      }
    },
  })

  return (
    <div
      className={skins.page({
        className: "items-center justify-center gap-8 p-8",
      })}
    >
      <h2 className="text-title font-black text-tusi-100">ورود</h2>

      <form.AppField name="password">
        {field => <field.SimpleTextInput label="رمز:" inputType="password" />}
      </form.AppField>

      <form.AppForm>
        <form.SubmitBtn
          iconEnding={<SignInIcon mirrored weight="fill" />}
          title="ورود"
          className={skins.btn({
            mode: "contained",
            intent: "brand",
            className: "w-full justify-between",
          })}
        />
      </form.AppForm>

      <p dir="ltr" className="text-center">
        <code>v{config.version}</code>
      </p>
    </div>
  )
}
