import { DownloadSimpleIcon, HouseIcon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"
import { TopAppBar } from "#/components/top-app-bar"
import * as skins from "#/shared/skins"
import { useNebulaStore } from "./-shared"

export const TopBar = () => (
  <TopAppBar
    title="نبیولا"
    className="md:hidden"
    startingStuff={<GoHomeBtn />}
    endingStuff={<DownloadContentBtn />}
  />
)

const GoHomeBtn = () => (
  <Link to="/" className={skins.btnIcon()}>
    <HouseIcon size={32} />
  </Link>
)

const DownloadContentBtn = () => (
  <button
    type="button"
    className={skins.btnIcon()}
    onClick={() => useNebulaStore.getState().downloadContent()}
  >
    <DownloadSimpleIcon size={32} />
  </button>
)
