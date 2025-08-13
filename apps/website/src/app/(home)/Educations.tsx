import { GraduationCapIcon } from "@phosphor-icons/react/dist/ssr"
import ReactMarkdown from "react-markdown"
import { educations } from "#/data"
import type { Education } from "#/data/schemas"
import { section } from "#/shared/skins"
import { Card } from "./Card"
import { IconHeading } from "./IconHeading"

export const Educations = () => (
  <section className={section()}>
    <IconHeading Icon={GraduationCapIcon} title="تحصیلات" />

    <ul className="flex flex-col gap-3">{educations.map(mapEducation)}</ul>
  </section>
)

function mapEducation(edu: Education) {
  const time =
    typeof edu.time === "string"
      ? edu.time
      : `از ${edu.time.from} تا ${edu.time.to}`
  const subtitle = `${edu.place}، ${edu.city} - ${time}`

  return (
    <Card
      key={edu.id}
      Icon={GraduationCapIcon}
      title={edu.title}
      subtitle={subtitle}
    >
      {edu.description && (
        <div className="prose-ul:list-disc prose-ul:ps-4 prose-a:border-b prose-a:border-current prose-a:hover:text-brand-500">
          <ReactMarkdown>{edu.description}</ReactMarkdown>
        </div>
      )}
    </Card>
  )
}
