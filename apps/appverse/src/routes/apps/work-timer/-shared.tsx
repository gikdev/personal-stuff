import { ClockIcon, GearIcon, TimerIcon } from "@phosphor-icons/react"
import z from "zod"
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

export const SettingsSchema = z.object({
  currency: z.enum(currencies, "لطفا یک مورد رو انتخاب کنید"),
  hourlyRate: z.number().nonnegative("عدد وارد شده باید مثبت باشد"),
})

export type Settings = z.infer<typeof SettingsSchema>

const DEFAULT_SETTINGS: Settings = {
  currency: "IRT",
  hourlyRate: 100,
}

interface SettingsStore extends Settings {
  setCurrency: (currency: SettingsStore["currency"]) => void
  setHourlyRate: (hourlyRate: SettingsStore["hourlyRate"]) => void
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    set => ({
      ...DEFAULT_SETTINGS,
      setCurrency: currency => set({ currency }),
      setHourlyRate: hourlyRate => set({ hourlyRate }),
    }),
    { name: Keys.WorkTimer.Settings },
  ),
)
