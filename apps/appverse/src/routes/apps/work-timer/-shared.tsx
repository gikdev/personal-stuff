import { ClockIcon, GearIcon, TimerIcon } from "@phosphor-icons/react"
import { BottomTabBar, type TabItem } from "#/components/routes/bottom-tab-bar"

const workTimerTabs: TabItem[] = [
  {
    id: "timer",
    url: "/apps/work-timer",
    title: "تایمر",
    Icon: TimerIcon,
  },
  {
    id: "total",
    url: "/",
    title: "مجموع",
    Icon: ClockIcon,
  },
  {
    id: "settings",
    url: "/",
    title: "تنظیمات",
    Icon: GearIcon,
  },
]

export const WorkTimerBottomTabs = () => (
  <BottomTabBar tabItems={workTimerTabs} />
)
