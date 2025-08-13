import type { Icon } from "@phosphor-icons/react"
import type { ReactNode } from "react"
import { cx } from "#/shared/cva.config"

interface IconLinkProps {
  Icon?: Icon
  icon?: ReactNode
  title: string
  href: string
  className?: string
}

export function IconLink({
  href,
  Icon,
  title,
  icon,
  className,
}: IconLinkProps) {
  return (
    <div
      className={cx("flex items-center gap-1 hover:text-brand-400", className)}
    >
      {Icon && <Icon size={24} />}
      {icon}
      <a href={href} className="border-b">
        {title}
      </a>
    </div>
  )
}
