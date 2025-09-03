import { SparkleIcon } from "@phosphor-icons/react"
import { skins } from "#/shared/skins"
import { useNamoratabStore, useOrganizeWithAi } from "../-shared"
import { ResultSheet } from "./result-sheet"

export function OrganizeBtn() {
  const { mutate, isPending, isSuccess, data, reset } = useOrganizeWithAi()

  const organize = () => {
    mutate(useNamoratabStore.getState().content)
  }

  return (
    <>
      <button
        type="button"
        disabled={isPending}
        onClick={organize}
        className={skins.btn({ color: "brand" })}
      >
        <SparkleIcon weight="fill" />
        <span>مرتب کن</span>
      </button>

      {isSuccess && <ResultSheet onClose={reset} result={data.text} />}
    </>
  )
}
