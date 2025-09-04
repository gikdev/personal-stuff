import { CircleNotchIcon, MinusIcon, PlusIcon } from "@phosphor-icons/react"
import {
  type AnyFieldApi,
  createFormHook,
  createFormHookContexts,
} from "@tanstack/react-form"
import { type ComponentProps, type ReactNode, useId } from "react"
import { skins } from "#/shared/skins"

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts()

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    NumberWithBtns,
    SimpleNumber,
    SimpleTextInput,
  },
  formComponents: {
    SubmitBtn,
  },
})

// #region <NumberWithBtns />
const inputishBtn = skins.btnIcon({
  size: "inputish",
  theme: "inputish",
})

interface NumberWithBtnsProps {
  label: string
}

function NumberWithBtns({ label }: NumberWithBtnsProps) {
  const id = useId()
  const field = useFieldContext<number>()

  return (
    <div className={skins.labeler()}>
      <label htmlFor={id}>{label}</label>

      <div className={skins.elementGroup({ className: "h-14" })}>
        <button
          type="button"
          onClick={() => field.handleChange(field.state.value - 1)}
          className={inputishBtn}
        >
          <MinusIcon size={24} />
        </button>

        <input
          dir="ltr"
          id={id}
          step="0"
          name={field.name}
          value={field.state.value}
          onBlur={field.handleBlur}
          type="number"
          onChange={e => field.handleChange(e.target.valueAsNumber)}
          className={skins.input({
            className: "w-full flex-1 text-center",
          })}
        />

        <button
          type="button"
          onClick={() => field.handleChange(field.state.value + 1)}
          className={inputishBtn}
        >
          <PlusIcon size={24} />
        </button>
      </div>

      <ErrorMsg field={field} />
    </div>
  )
}
// #endregion

// #region <SimpleNumber />
interface SimpleNumberProps {
  label: string
}

function SimpleNumber({ label }: SimpleNumberProps) {
  const field = useFieldContext<number>()

  return (
    <label className={skins.labeler()}>
      <p>{label}</p>

      <input
        dir="ltr"
        type="number"
        className={skins.input()}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={e => field.handleChange(e.target.valueAsNumber)}
      />

      <ErrorMsg field={field} />
    </label>
  )
}

// #endregion

// #region <ErrorMsg />
function convertErorrsToString(err: unknown) {
  if (typeof err === "string") return err
  if (typeof err === "object" && err != null) {
    if ("msg" in err && typeof err.msg === "string") return err.msg
    if ("message" in err && typeof err.message === "string") return err.message
  }

  return "یه مشکلی پیش اومده"
}

function ErrorMsg({ field }: { field: AnyFieldApi }) {
  const showError = !field.state.meta.isValid
  const errorMsg = field.state.meta.errors.map(convertErorrsToString).join(",")

  return showError && <p className={skins.errorMsg()}>{errorMsg}</p>
}
// #endregion

// #region <SubmitBtn />
interface SubmitBtnProps {
  iconStarting?: ReactNode
  iconEnding?: ReactNode
  title: string | null
  onClick?: () => void
  type?: ComponentProps<"button">["type"]
  className?: string
}

function SubmitBtn({
  iconStarting,
  iconEnding,
  title,
  onClick,
  type,
  className = "",
}: SubmitBtnProps) {
  const form = useFormContext()

  return (
    <form.Subscribe selector={s => [s.canSubmit, s.isSubmitting]}>
      {([canSubmit, isSubmitting]) => {
        const showTitle = title !== null
        const finalTitle = isSubmitting ? "در حال بارگذاری..." : title
        const finalType = type || "button"
        const defaultClickHandler = () => form.handleSubmit()
        const finalClickHandler = onClick ?? defaultClickHandler

        return (
          <button
            type={finalType}
            onClick={finalClickHandler}
            disabled={!canSubmit || isSubmitting}
            className={className}
          >
            {isSubmitting ? (
              <CircleNotchIcon />
            ) : (
              <>
                {iconStarting}
                {showTitle && <span>{finalTitle}</span>}
                {iconEnding}
              </>
            )}
          </button>
        )
      }}
    </form.Subscribe>
  )
}
// #endregion

// #region <SimpleTextInput />
interface SimpleTextInputProps {
  label: string
  inputType?: "text" | "password"
}

function SimpleTextInput({ label, inputType = "text" }: SimpleTextInputProps) {
  const field = useFieldContext<string>()

  return (
    <label className={skins.labeler()}>
      <p>{label}</p>

      <input
        dir="ltr"
        type={inputType}
        name={field.name}
        className={skins.input()}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={e => field.handleChange(e.target.value)}
      />

      <ErrorMsg field={field} />
    </label>
  )
}

// #endregion
