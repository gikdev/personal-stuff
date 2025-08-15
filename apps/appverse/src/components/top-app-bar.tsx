import type { ReactNode } from "react"

interface TopAppBarProps {
  title: string
  startingStuff?: ReactNode
  endingStuff?: ReactNode
}

export function TopAppBar({
  title,
  endingStuff,
  startingStuff,
}: TopAppBarProps) {
  return (
    <header className="h-16 p-2 flex items-center justify-between border-b border-tusi-800">
      <div className="size-12">{startingStuff}</div>
      {/* {startingStuff} */}

      <p className="font-bold text-tusi-100">{title}</p>

      <div className="size-12">{endingStuff}</div>
    </header>
  )
}
