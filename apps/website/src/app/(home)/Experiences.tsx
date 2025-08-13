import { BriefcaseIcon, CodeSimpleIcon } from "@phosphor-icons/react/dist/ssr"
import ReactMarkdown from "react-markdown"
import { experiences } from "#/data"
import type { Experience } from "#/data/schemas"
import { section } from "#/shared/skins"
import { Card } from "./Card"
import { IconHeading } from "./IconHeading"

export const Experiences = () => (
  <section className={section()}>
    <IconHeading Icon={BriefcaseIcon} title="سابقه کاری" />

    <ul className="flex flex-col gap-3">{experiences.map(mapExperience)}</ul>
  </section>
)

function mapExperience(xp: Experience) {
  const time =
    typeof xp.time === "string"
      ? xp.time
      : `از ${xp.time.from} تا ${xp.time.to}`
  const subtitle = `${xp.company}، ${xp.city} - ${time}`

  return (
    <Card
      key={xp.id}
      Icon={CodeSimpleIcon}
      title={xp.roleName}
      subtitle={subtitle}
    >
      <div className="prose-ul:list-disc prose-ul:ps-4 prose-a:border-b prose-a:border-current prose-a:hover:text-brand-500">
        <ReactMarkdown>{xp.description}</ReactMarkdown>
      </div>
    </Card>
  )
}
