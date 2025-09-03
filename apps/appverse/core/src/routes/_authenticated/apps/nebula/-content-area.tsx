import type { ChangeEvent } from "react"
import { useNebulaStore } from "./-shared"

function handleContentChange(e: ChangeEvent<HTMLTextAreaElement>) {
  useNebulaStore.getState().setContent(e.target.value)
}

export function ContentArea() {
  const content = useNebulaStore(s => s.content)

  return (
    <main
      className="
        flex flex-col flex-1 items-center
        justify-center gap-4 p-4 md:gap-8
        md:p-8 mx-auto w-full max-w-238
      "
    >
      <textarea
        dir="auto"
        value={content}
        onChange={handleContentChange}
        className="
          w-full flex-1 resize-none border-none
          outline-none focus:text-tusi-100
          font-code no-scrollbar
        "
      />
    </main>
  )
}
