import * as skins from "#/shared/skins"
import { type Currency, useSettingsStore } from "../-shared"

export function SettingsForm() {
  const settings = useSettingsStore()

  return (
    <>
      <label className={skins.labeler()}>
        <p>مقدار درآمد در ساعت</p>

        <input
          dir="ltr"
          type="number"
          className={skins.input()}
          value={settings.hourlyRate}
          onChange={e => {
            const val = e.target.value
            settings.setHourlyRate(val === "" ? 0 : Number(val))
          }}
        />
      </label>

      <label className="flex flex-col gap-2 w-full">
        <p>واحد پولی</p>

        <select
          className={skins.select()}
          value={settings.currency}
          onChange={e => settings.setCurrency(e.target.value as Currency)}
        >
          <option value={"IRR" satisfies Currency}>ریال</option>
          <option value={"IRT" satisfies Currency}>تومان</option>
          <option value={"USD" satisfies Currency}>دلار</option>
        </select>
      </label>
    </>
  )
}
