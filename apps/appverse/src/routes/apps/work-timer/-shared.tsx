import { ClockIcon, GearIcon, TimerIcon } from "@phosphor-icons/react"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { BottomTabBar, type TabItem } from "#/components/bottom-tab-bar"
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

  totalSeconds: number
  setTotalSeconds: (totalSeconds: WorkTimerStore["totalSeconds"]) => void
  incTotalSeconds: () => void
  decTotalSeconds: () => void

  startedAt: string | null
  endedAt: string | null
  start: () => void
  end: () => void
  resetTimer: () => void
  getElapsedSeconds: () => number
  addElapsedToTotal: () => void
}

export const useWorkTimerStore = create<WorkTimerStore>()(
  persist(
    (set, get) => ({
      currency: "IRT",
      setCurrency: currency => set({ currency }),

      hourlyRate: 100,
      setHourlyRate: hourlyRate => set({ hourlyRate }),

      totalSeconds: 0,
      setTotalSeconds: totalSeconds => set({ totalSeconds }),
      incTotalSeconds: () => set(s => ({ totalSeconds: s.totalSeconds + 60 })),
      decTotalSeconds: () => set(s => ({ totalSeconds: s.totalSeconds - 60 })),

      startedAt: null,
      endedAt: null,
      start: () => set({ startedAt: new Date().toISOString(), endedAt: null }),
      end: () => set({ endedAt: new Date().toISOString() }),
      resetTimer: () => set({ startedAt: null, endedAt: null }),
      getElapsedSeconds: () => {
        const { startedAt, endedAt } = get()
        if (!startedAt) return 0
        const start = new Date(startedAt).getTime()
        const end = endedAt ? new Date(endedAt).getTime() : Date.now()
        return Math.floor((end - start) / 1000)
      },
      addElapsedToTotal: () => {
        const { getElapsedSeconds, setTotalSeconds, totalSeconds } = get()
        setTotalSeconds(totalSeconds + getElapsedSeconds())
      },
    }),
    { name: Keys.WorkTimer.Store },
  ),
)
