import { PencilSimpleIcon } from "@phosphor-icons/react"
import { useState } from "react"
import { btnIcon } from "#/shared/skins"
import { ChangeTotalSheet } from "./change-total-sheet"

export function ChangeTotal() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <ChangeTotalBtn onClick={() => setOpen(true)} />

      {isOpen && <ChangeTotalSheet onClose={() => setOpen(false)} />}
    </>
  )
}

interface ChangeTotalBtnProps {
  onClick: () => void
}

function ChangeTotalBtn({ onClick }: ChangeTotalBtnProps) {
  return (
    <button
      type="button"
      className={btnIcon({ size: "lg", theme: "glass" })}
      onClick={onClick}
    >
      <PencilSimpleIcon size={32} />
    </button>
  )
}
