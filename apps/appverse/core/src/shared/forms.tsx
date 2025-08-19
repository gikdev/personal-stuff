import {
  CircleNotchIcon,
  type Icon,
  MinusIcon,
  PlusIcon,
} from "@phosphor-icons/react"
import {
  type AnyFieldApi,
  createFormHook,
  createFormHookContexts,
} from "@tanstack/react-form"
import { type ComponentProps, useId } from "react"
import * as skins from "#/shared/skins"

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts()

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    NumberWithBtns,
    SimpleNumber,
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

      <div className={skins.elementGroup()}>
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
  Icon: Icon
  title: string
  onClick?: () => void
  type?: ComponentProps<"button">["type"]
}

function SubmitBtn({ Icon, title, onClick, type }: SubmitBtnProps) {
  const form = useFormContext()

  return (
    <form.Subscribe selector={s => [s.canSubmit, s.isSubmitting]}>
      {([canSubmit, isSubmitting]) => {
        const FinalIcon = isSubmitting ? CircleNotchIcon : Icon
        const finalTitle = isSubmitting ? "در حال بارگذاری..." : title
        const finalType = type || "button"
        const defaultClickHandler = () => form.handleSubmit()
        const finalClickHandler = onClick ?? defaultClickHandler

        return (
          <button
            type={finalType}
            onClick={finalClickHandler}
            disabled={!canSubmit || isSubmitting}
            className={skins.btn({ colors: "brand", className: "w-full" })}
          >
            <FinalIcon size={24} weight="fill" />
            <span>{finalTitle}</span>
          </button>
        )
      }}
    </form.Subscribe>
  )
}
// #endregion
