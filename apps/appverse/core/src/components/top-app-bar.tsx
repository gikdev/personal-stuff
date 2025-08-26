import type { ReactNode } from "react"
import { cx } from "#/shared/cva.config"

interface TopAppBarProps {
  title: string
  startingStuff?: ReactNode
  endingStuff?: ReactNode
  className?: string
}

export function TopAppBar({
  title,
  endingStuff,
  startingStuff,
  className,
}: TopAppBarProps) {
  return (
    <header
      className={cx(
        "h-16 p-2 flex items-center justify-between border-b border-tusi-800",
        className,
      )}
    >
      <div className="size-12">{startingStuff}</div>
      {/* {startingStuff} */}

      <p className="font-bold text-tusi-100">{title}</p>

      <div className="size-12">{endingStuff}</div>
    </header>
  )
}
