import { HouseIcon, InfoIcon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"
import { TopAppBar } from "#/components/top-app-bar"
import { skins } from "#/shared/skins"
import { useNamoratabStore } from "./-shared"

export const TopBar = () => (
  <TopAppBar
    title="نامرتب"
    startingStuff={<GoHomeBtn />}
    endingStuff={<InfoBtn />}
  />
)

const GoHomeBtn = () => (
  <Link to="/" className={skins.btnIcon()}>
    <HouseIcon size={32} />
  </Link>
)

const InfoBtn = () => (
  <button
    type="button"
    className={skins.btnIcon()}
    onClick={() => useNamoratabStore.getState().setInfoModalOpen(true)}
  >
    <InfoIcon size={32} />
  </button>
)
