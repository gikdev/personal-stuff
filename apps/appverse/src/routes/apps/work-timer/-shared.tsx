import { ClockIcon, GearIcon, TimerIcon } from "@phosphor-icons/react"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { BottomTabBar, type TabItem } from "#/components/routes/bottom-tab-bar"
import { Keys } from "#/shared/constants"

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

const currencies = ["IRT", "USD", "IRR"] as const
export type Currency = (typeof currencies)[number]
export const getCurrencyText = (currency: Currency) => {
  if (currency === "IRR") return "ریال؟؟؟؟؟"
  if (currency === "IRT") return "تومان؟؟؟؟"
  if (currency === "USD") return "$"
  return "?"
}

interface WorkTimerStore {
  currency: Currency
  setCurrency: (currency: WorkTimerStore["currency"]) => void

  hourlyRate: number
  setHourlyRate: (hourlyRate: WorkTimerStore["hourlyRate"]) => void

  totalMinutes: number
  setTotalMinutes: (totalMinutes: WorkTimerStore["totalMinutes"]) => void
  incTotalMinutes: () => void
  decTotalMinutes: () => void
}

export const useWorkTimerStore = create<WorkTimerStore>()(
  persist(
    set => ({
      currency: "IRT",
      setCurrency: currency => set({ currency }),

      hourlyRate: 100,
      setHourlyRate: hourlyRate => set({ hourlyRate }),

      totalMinutes: 0,
      setTotalMinutes: totalMinutes => set({ totalMinutes }),
      incTotalMinutes: () => set(s => ({ totalMinutes: s.totalMinutes + 1 })),
      decTotalMinutes: () => set(s => ({ totalMinutes: s.totalMinutes - 1 })),
    }),
    { name: Keys.WorkTimer.Store },
  ),
)
