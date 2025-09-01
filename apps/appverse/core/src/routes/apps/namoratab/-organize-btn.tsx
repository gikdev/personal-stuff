import { SparkleIcon } from "@phosphor-icons/react"
import { skins } from "#/shared/skins"

interface OrganizeBtnProps {
  onClick?: () => void
  disabled?: boolean
}
export function OrganizeBtn({ disabled, onClick }: OrganizeBtnProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={skins.btn({ color: "brand" })}
    >
      <SparkleIcon weight="fill" />
      <span>مرتب کن</span>
    </button>
  )
}
