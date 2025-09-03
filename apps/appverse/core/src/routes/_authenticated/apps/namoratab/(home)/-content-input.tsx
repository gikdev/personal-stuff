import type { ChangeEventHandler } from "react"
import { skins } from "#/shared/skins"
import { useNamoratabStore } from "./-shared"

const handleChange: ChangeEventHandler<HTMLTextAreaElement> = e =>
  useNamoratabStore.getState().setContent(e.target.value)

export function ContentInput() {
  const content = useNamoratabStore(s => s.content)

  return (
    <div className="flex flex-cols flex-1">
      <textarea
        dir="auto"
        value={content}
        onChange={handleChange}
        className={skins.input({
          isMultiline: true,
          className: "flex-1 resize-none",
        })}
      />
    </div>
  )
}
