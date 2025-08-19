import { create } from "zustand"

type RakatCount = 2 | 3 | 4

interface RakatStore {
  rakatCount: RakatCount | null
  setRakatCount: (rakatCount: RakatCount | null) => void

  currentSajde: number
  incCurrentSajde: () => void

  reset: () => void
}

export const useRakatStore = create<RakatStore>()(set => ({
  rakatCount: null,
  setRakatCount: rakatCount => set({ rakatCount, currentSajde: 0 }),

  currentSajde: 0,
  incCurrentSajde: () => set(s => ({ currentSajde: s.currentSajde + 1 })),

  reset: () => set({ rakatCount: null, currentSajde: 0 }),
}))
