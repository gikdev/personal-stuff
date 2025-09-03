import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Keys } from "#/shared/constants"

interface NebulaStore {
  content: string
  setContent: (content: string) => void
  // Downloads `store.content` as `content.md`
  downloadContent: () => void

  reset: () => void
}

export const useNebulaStore = create<NebulaStore>()(
  persist(
    (set, get) => ({
      content: "",
      setContent: content => set({ content }),
      downloadContent: () => {
        const { content } = get()

        // Generate filename with timestamp
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-")
        const filename = `content-${timestamp}.md`

        // Create a Blob with the content
        const blob = new Blob([content], { type: "text/markdown" })

        // Create a URL for the Blob
        const url = URL.createObjectURL(blob)

        // Create a temporary anchor element
        const a = document.createElement("a")
        a.href = url
        a.download = filename

        // Programmatically click the anchor to trigger download
        document.body.appendChild(a)
        a.click()

        // Clean up
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      },

      reset: () => set({ content: "" }),
    }),
    { name: Keys.Nebula.Store },
  ),
)
