import { skins } from "#/shared/skins"
import { useNamoratabStore } from "./-shared"

export function ContentInput() {
  const content = useNamoratabStore(s => s.content)

  return (
    <div className="flex flex-cols flex-1">
      <textarea
        dir="auto"
        value={content}
        className={skins.input({ isMultiline: true, className: "flex-1" })}
        onChange={e => useNamoratabStore.getState().setContent(e.target.value)}
      />
    </div>
  )
}
