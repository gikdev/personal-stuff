import { ArrowClockwiseIcon, CircleNotchIcon } from "@phosphor-icons/react"
import { createFileRoute } from "@tanstack/react-router"
import { parseError } from "#/helpers/errors"
import { skins } from "#/shared/skins"
import { ContentInput } from "./-content-input"
import { CopyResultBtn } from "./-copy-result-btn"
import { OrganizeBtn } from "./-organize-btn"
import { useNamoratabStore, useOrganizeWithAi } from "./-shared"
import { TopBar } from "./-top-bar"

export const Route = createFileRoute("/apps/namoratab/")({
  component: RouteComponent,
})

function RouteComponent() {
  const { mutate, isPending, isSuccess, data, error, isError } =
    useOrganizeWithAi()

  const organize = () => {
    mutate(useNamoratabStore.getState().content)
  }

  return (
    <div className={skins.page()}>
      <TopBar />

      <main className="flex flex-col gap-4 p-4 flex-1">
        <ContentInput />

        <OrganizeBtn onClick={organize} disabled={isPending} />

        <div className="flex flex-col flex-1 gap-2">
          {isSuccess && (
            <>
              <textarea
                readOnly
                value={data.text}
                className={skins.input({
                  isMultiline: true,
                  className: "flex-1",
                })}
              />

              <CopyResultBtn result={data.text} />
            </>
          )}

          {isError && (
            <div className="flex-1 flex flex-col items-center justify-center bg-danger-950/50 rounded-sm-elements gap-1">
              <p className="text-danger-100 font-bold mb-4">
                یه مشکلی پیش اومده
              </p>

              <code className="p-1 bg-tusi-950 text-tusi-400 rounded-sm-elements text-body-sm">
                {parseError(error)}
              </code>

              <button
                type="button"
                className={skins.btn({ intent: "danger", mode: "text" })}
                onClick={organize}
              >
                <ArrowClockwiseIcon />
                <span>امتحان دوباره</span>
              </button>
            </div>
          )}

          {isPending && (
            <div
              className="
                flex-1 flex flex-col items-center
                justify-center bg-tusi-900
                rounded-sm-elements
              "
            >
              <CircleNotchIcon size={48} className="animate-spin" />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
