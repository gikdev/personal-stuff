import type { Icon } from "@phosphor-icons/react"
import type { ReactNode } from "react"

interface CardProps {
  Icon: Icon
  title: string
  subtitle: string
  endSlot?: ReactNode
  children: ReactNode
}

export function Card({ Icon, children, endSlot, subtitle, title }: CardProps) {
  return (
    <div className="rounded-md-elements p-6 flex flex-col gap-3 bg-tusi-900">
      <div className="flex gap-1 text-h3 font-bold text-brand-400 items-center">
        <Icon size={24} weight="fill" />
        <p>{title}</p>
        {endSlot}
      </div>

      <p>{subtitle}</p>

      {children}
    </div>
  )
}
