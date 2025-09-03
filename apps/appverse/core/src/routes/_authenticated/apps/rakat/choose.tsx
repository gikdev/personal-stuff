import {
  CircleIcon,
  HandsPrayingIcon,
  RadioButtonIcon,
} from "@phosphor-icons/react"
import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { cx } from "#/shared/cva.config"
import { skins } from "#/shared/skins"
import { useRakatStore } from "./-store"

export const Route = createFileRoute("/_authenticated/apps/rakat/choose")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex flex-col flex-1 items-center justify-between gap-8 p-4">
      <ChooseRakatOptionSection />

      <StartBtn />
    </main>
  )
}

function ChooseRakatOptionSection() {
  const rakatCount = useRakatStore(s => s.rakatCount)

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-h1 font-bold text-tusi-100 text-center">چند رکعت؟</h1>

      <p className="text-center">
        تعداد رکعت یا نمازی که می‌خوای بخونی رو انتخاب کن
      </p>

      <div className="flex flex-col gap-4 w-full">
        <RakatOption
          title="۲ رکعت (صبح)"
          isActive={rakatCount === 2}
          onClick={() => useRakatStore.getState().setRakatCount(2)}
        />

        <RakatOption
          title="۳ رکعت (مغرب)"
          isActive={rakatCount === 3}
          onClick={() => useRakatStore.getState().setRakatCount(3)}
        />

        <RakatOption
          title="۴ رکعت (ظهر، عصر و ...)"
          isActive={rakatCount === 4}
          onClick={() => useRakatStore.getState().setRakatCount(4)}
        />
      </div>
    </div>
  )
}

interface RakatOptionProps {
  isActive?: boolean
  onClick?: () => void
  title: string
}

function RakatOption({ title, isActive = false, onClick }: RakatOptionProps) {
  const containerStyles = cx(`
    cursor-pointer rounded-sm-elements
    hover:bg-tusi-800 hover:text-tusi-100
    flex items-center justify-start
    py-2 gap-4 min-h-14 px-4
  `)

  const Icon = isActive ? RadioButtonIcon : CircleIcon
  const iconWeight = isActive ? "fill" : "regular"
  const iconStyles = cx(isActive ? "text-brand-400" : "")

  const textStyles = cx(isActive ? "text-tusi-100 font-bold" : "")

  return (
    <button onClick={onClick} type="button" className={containerStyles}>
      <Icon size={24} weight={iconWeight} className={iconStyles} />
      <span className={textStyles}>{title}</span>
    </button>
  )
}

function StartBtn() {
  const navigate = useNavigate()
  const rakatCount = useRakatStore(s => s.rakatCount)

  const isRakatCountValid = rakatCount !== 0

  return (
    <button
      type="button"
      disabled={!isRakatCountValid}
      onClick={() => navigate({ to: "/apps/rakat/pray" })}
      className={skins.btn({ color: "brand", className: "w-full" })}
    >
      <HandsPrayingIcon size={24} weight="fill" />
      <span>شروع</span>
    </button>
  )
}
