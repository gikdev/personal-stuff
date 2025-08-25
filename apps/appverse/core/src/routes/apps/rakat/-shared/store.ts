import { create } from "zustand"

interface RakatStore {
  rakatCount: number
  setRakatCount: (rakatCount: number) => void

  currentSajde: number
  incCurrentSajde: () => void

  reset: () => void
}

export const useRakatStore = create<RakatStore>()(set => ({
  rakatCount: 0,
  setRakatCount: rakatCount => set({ rakatCount, currentSajde: 0 }),

  currentSajde: 1,
  incCurrentSajde: () =>
    set(s => {
      const final = s.currentSajde + 1

      return { currentSajde: final > 8 ? 8 : final }
    }),

  reset: () => set({ rakatCount: 0, currentSajde: 0 }),
}))
