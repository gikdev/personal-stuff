import { CopyIcon } from "@phosphor-icons/react"
import { copyTextToClipboard } from "#/helpers/copy-to-clipboard"
import { parseError } from "#/helpers/errors"
import { skins } from "#/shared/skins"

interface CopyResultBtnProps {
  result: string
}

export function CopyResultBtn({ result }: CopyResultBtnProps) {
  const handleClick = () =>
    copyTextToClipboard(result).catch(err => alert(parseError(err)))

  return (
    <button
      type="button"
      onClick={handleClick}
      className={skins.btn({ intent: "neutral", mode: "text" })}
    >
      <CopyIcon />
      <span>کپی</span>
    </button>
  )
}
