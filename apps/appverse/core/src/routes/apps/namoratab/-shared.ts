import { createOpenAICompatible } from "@ai-sdk/openai-compatible"
import { useMutation } from "@tanstack/react-query"
import { generateText } from "ai"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Keys } from "#/shared/constants"

interface NamoratabStore {
  content: string
  setContent: (content: string) => void

  isInfoModalOpen: boolean
  setInfoModalOpen: (isInfoModalOpen: boolean) => void

  reset: () => void
}

export const useNamoratabStore = create<NamoratabStore>()(
  persist(
    set => ({
      content: "",
      setContent: content => set({ content }),

      isInfoModalOpen: false,
      setInfoModalOpen: isInfoModalOpen => set({ isInfoModalOpen }),

      reset: () => set({ content: "" }),
    }),
    { name: Keys.Namoratab.Store },
  ),
)

const model = createOpenAICompatible({
  name: "My Gemini 2.0 Flash",
  baseURL: "https://ai.liara.ir/api/v1/68b4cf8b492ba519fe1bcf91",
  apiKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGYwZTZhZTk5ZDJjZTA2MWYyYjliMTYiLCJ0eXBlIjoiYXV0aCIsImlhdCI6MTc1Njc1MzI1MH0.p5d1gRHbMghtyWfEuiggZ2hC3fWibcvFDAHfnvKJnZc",
}).chatModel("google/gemini-2.0-flash-001")

export const useOrganizeWithAi = () =>
  useMutation({
    mutationFn: async (content: string) => {
      const prompt = `
        Organize the message I'm giving you.
        It will be used in messaging apps like Telegram.
        Return ONLY the text, NO extra explanations.
        Each line should be around 40–45 characters wide.
        Break lines at natural word boundaries; avoid splitting words.
        Stretch letters only occasionally for emphasis, or for making the lines be more justified a little.
        Use emoji naturally.
        Write all Persian words using correct dictation with proper half-spaces 
        (for example: می‌بینید instead of میبینید).


        Example output:
        توی این مدت چند تا پروژه واقعی
        درست کردم، و خیلی خــیلی
        نکات و چیزهایی یاد گرفتم، که نه
        بیرون یاد می‌دادن (مخصوصا تو ایران)
        و نه مباحث راحتی بودن 😮‍💨

        The input:
        ${content}
      `

      const result = await generateText({ model, prompt })

      return result
    },
  })
