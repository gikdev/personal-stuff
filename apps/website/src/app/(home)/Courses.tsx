import { LinkSimpleIcon, VideoIcon } from "@phosphor-icons/react/dist/ssr"
import ReactMarkdown from "react-markdown"
import { courses } from "#/data"
import type { Course } from "#/data/schemas"
import { section } from "#/shared/skins"
import { Card } from "./Card"
import { IconHeading } from "./IconHeading"

export const Courses = () => (
  <section className={section()}>
    <IconHeading Icon={VideoIcon} title="دوره‌های آموزشی" />

    <ul className="flex flex-col gap-3">{courses.map(mapCourse)}</ul>
  </section>
)

function mapCourse(c: Course) {
  const time =
    typeof c.time === "string" ? c.time : `از ${c.time.from} تا ${c.time.to}`
  const subtitle = `${c.place} - ${time}`

  const endSlot = c.url && (
    <a href={c.url} className="ms-auto" target="_blank">
      <LinkSimpleIcon size={24} />
    </a>
  )

  return (
    <Card
      key={c.id}
      Icon={VideoIcon}
      title={c.title}
      subtitle={subtitle}
      endSlot={endSlot}
    >
      <div className="prose-ul:list-disc prose-ul:ps-4 prose-a:border-b prose-a:border-current prose-a:hover:text-brand-500">
        <ReactMarkdown>{c.description}</ReactMarkdown>
      </div>
    </Card>
  )
}
