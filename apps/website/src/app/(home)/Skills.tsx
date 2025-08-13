import { LightningIcon, WrenchIcon } from "@phosphor-icons/react/dist/ssr"
import { skills } from "#/data"
import { section } from "#/shared/skins"
import { IconHeading } from "./IconHeading"

export const Skills = () => (
  <section className={section()}>
    <IconHeading Icon={WrenchIcon} title="مهارت‌ها" />

    <ul className="flex flex-col gap-3" lang="en" dir="ltr">
      {skills.map(skill => (
        <li key={skill.id} className="flex gap-1 items-center">
          <LightningIcon size={24} className="text-brand-400 shrink-0" />
          <p>
            <span className="font-bold">{skill.title}: </span>
            <span className="">{skill.description}</span>
          </p>
        </li>
      ))}
    </ul>
  </section>
)
