import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Keys } from "#/shared/constants"
import type { Currency } from "./currency"

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

  /** Target total time user aims to work per day, in seconds */
  dailyTimeTarget: number
  setDailyTimeTarget: (dailyTimeTarget: number) => void
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
      decTotalSeconds: () =>
        set(s => ({
          totalSeconds: Math.max(0, s.totalSeconds - 60),
        })),

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
        const { getElapsedSeconds, setTotalSeconds, totalSeconds, resetTimer } =
          get()
        setTotalSeconds(totalSeconds + getElapsedSeconds())
        resetTimer()
      },

      dailyTimeTarget: 5 * 60 * 60,
      setDailyTimeTarget: dailyTimeTarget => set({ dailyTimeTarget }),
    }),
    { name: Keys.WorkTimer.Store },
  ),
)

export function useDailyProgress() {
  const totalSeconds = useWorkTimerStore(s => s.totalSeconds)
  const dailyTimeTarget = useWorkTimerStore(s => s.dailyTimeTarget)

  if (dailyTimeTarget <= 0) return 0

  const percentRaw = (totalSeconds / dailyTimeTarget) * 100
  const percentMax100 = Math.min(percentRaw, 100)
  const percentRound = Math.floor(percentMax100)

  return percentRound
}
