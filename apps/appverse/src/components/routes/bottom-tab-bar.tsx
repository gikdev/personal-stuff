import type { Icon } from "@phosphor-icons/react"
import { Link, useLocation } from "@tanstack/react-router"
import type { FileRouteTypes } from "#/routeTree.gen"
import { cx } from "#/shared/cva.config"

export interface TabItem {
  id: string
  url: FileRouteTypes["to"]
  title: string
  Icon: Icon
}

interface BottomTabBarProps {
  tabItems: TabItem[]
}

export function BottomTabBar({ tabItems }: BottomTabBarProps) {
  return (
    <footer className="h-16 flex border-t border-tusi-800">
      {tabItems.map(item => (
        <Tab key={item.id} Icon={item.Icon} title={item.title} url={item.url} />
      ))}
    </footer>
  )
}

interface TabProps extends Omit<TabItem, "id"> {}

function Tab({ Icon, title, url }: TabProps) {
  const { pathname } = useLocation()
  const isActive = url === pathname

  const styles = cx(
    `
      flex-1 cursor-pointer
      hover:bg-tusi-800 hover:text-tusi-100
      flex flex-col gap-0 text-body-sm
      items-center justify-center
    `,
    isActive ? "text-tusi-100 font-bold" : "",
  )

  return (
    <Link to={url} className={styles}>
      <Icon size={24} weight={isActive ? "fill" : "regular"} />
      <span>{title}</span>
    </Link>
  )
}
