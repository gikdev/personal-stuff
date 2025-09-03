import { InfoIcon } from "@phosphor-icons/react"
import { useState } from "react"
import { skins } from "#/shared/skins"
import { AboutSheet } from "./about-sheet"

export function InfoBtn() {
  const [isOpen, setOpen] = useState(false)
  const open = () => setOpen(true)
  const close = () => setOpen(false)

  return (
    <>
      <button type="button" className={skins.btnIcon()} onClick={open}>
        <InfoIcon size={32} />
      </button>

      {isOpen && <AboutSheet onClose={close} />}
    </>
  )
}
