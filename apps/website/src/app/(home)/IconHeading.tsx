import type { Icon } from "@phosphor-icons/react"

interface IconHeadingProps {
  Icon: Icon
  title: string
}

export function IconHeading({ Icon, title }: IconHeadingProps) {
  return (
    <div className="flex gap-2 items-center text-tusi-100 text-h2 font-bold">
      <Icon weight="fill" size={32} />
      <h2>{title}</h2>
    </div>
  )
}
