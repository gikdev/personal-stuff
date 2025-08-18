import { ClockIcon, GearIcon, TimerIcon } from "@phosphor-icons/react"
import { BottomTabBar, type TabItem } from "#/components/bottom-tab-bar"

const workTimerTabs: TabItem[] = [
  {
    id: "timer",
    url: "/apps/work-timer",
    title: "تایمر",
    Icon: TimerIcon,
  },
  {
    id: "total",
    url: "/apps/work-timer/total",
    title: "مجموع",
    Icon: ClockIcon,
  },
  {
    id: "settings",
    url: "/apps/work-timer/settings",
    title: "تنظیمات",
    Icon: GearIcon,
  },
]

export const WorkTimerBottomTabs = () => (
  <BottomTabBar tabItems={workTimerTabs} />
)
