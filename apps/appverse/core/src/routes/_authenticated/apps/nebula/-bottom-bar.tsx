import {
  CaretRightIcon,
  CornersInIcon,
  CornersOutIcon,
  DownloadSimpleIcon,
  HurricaneIcon,
} from "@phosphor-icons/react"
import { useFullscreen } from "@reactuses/core"
import { Link } from "@tanstack/react-router"
import { useRef } from "react"
import { skins } from "#/shared/skins"
import { useNebulaStore } from "./-shared"

export const BottomBar = () => (
  <nav
    className="
      hidden md:flex items-center justify-center
      gap-4 px-2 py-2 bg-tusi-900 border border-tusi-800
      absolute bottom-8 left-1/2 -translate-x-1/2
      rounded-md-elements opacity-50 hover:opacity-100
    "
  >
    <GoBackBtn />
    <AppName />
    <Separator />
    <DownloadContentBtn />
    <FullscreenBtn />
  </nav>
)

const GoBackBtn = () => (
  <Link to="/" className={skins.btnIcon({ size: "iconDesktop" })}>
    <CaretRightIcon size={24} />
  </Link>
)

const AppName = () => (
  <div className="flex items-center justify-center gap-1 text-tusi-100 font-bold">
    <HurricaneIcon size={24} weight="fill" />
    <span>نبیولا</span>
  </div>
)

const Separator = () => (
  <hr className="border-none w-[1px] h-6 inline-block bg-tusi-800" />
)

const DownloadContentBtn = () => (
  <button
    type="button"
    className={skins.btnIcon({ size: "iconDesktop" })}
    onClick={() => useNebulaStore.getState().downloadContent()}
  >
    <DownloadSimpleIcon size={24} />
  </button>
)

function FullscreenBtn() {
  const docRef = useRef<HTMLElement>(document.documentElement)
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(docRef)

  const CornersIcon = isFullscreen ? CornersInIcon : CornersOutIcon

  return (
    <button
      type="button"
      className={skins.btnIcon({ size: "iconDesktop" })}
      onClick={toggleFullscreen}
    >
      <CornersIcon size={32} />
    </button>
  )
}
