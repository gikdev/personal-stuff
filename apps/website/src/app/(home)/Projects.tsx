import { CodeIcon, CodeSimpleIcon } from "@phosphor-icons/react/dist/ssr"
import ReactMarkdown from "react-markdown"
import { projects } from "#/data"
import type { Project } from "#/data/schemas"
import { section } from "#/shared/skins"
import { Card } from "./Card"
import { IconHeading } from "./IconHeading"

export const Projects = () => (
  <section className={section()}>
    <IconHeading Icon={CodeIcon} title="پروژه‌ها" />

    <ul className="flex flex-col gap-3">{projects.map(mapProjects)}</ul>
  </section>
)

function mapProjects(project: Project) {
  const time =
    typeof project.time === "string"
      ? project.time
      : `از ${project.time.from} تا ${project.time.to}`
  const subtitle = `${project.company} - ${time}`

  return (
    <Card
      key={project.id}
      Icon={CodeSimpleIcon}
      title={project.name}
      subtitle={subtitle}
    >
      <div className="prose-ul:list-disc prose-ul:ps-4 prose-a:border-b prose-a:border-current prose-a:hover:text-brand-500">
        <ReactMarkdown>{project.description}</ReactMarkdown>
      </div>
    </Card>
  )
}
