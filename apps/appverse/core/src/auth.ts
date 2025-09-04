import { sha512 } from "js-sha512"
import { create } from "zustand"

const myHashedPassword = import.meta.env.VITE_MY_PASSWORD as string

interface AuthStore {
  isAuthenticated: boolean
  setAuthenticated: (isAuthenticated: boolean) => void
  authenticate: (passwordInput: string) => boolean
}

export const useAuthStore = create<AuthStore>()(set => ({
  isAuthenticated: false,
  setAuthenticated: isAuthenticated => set({ isAuthenticated }),
  authenticate: (passwordInput: string) => {
    const isAuthenticated = sha512(passwordInput) === myHashedPassword
    set({ isAuthenticated })
    return isAuthenticated
  },
}))
