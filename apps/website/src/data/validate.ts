import rawCourses from "./json/courses.json"
import rawEducations from "./json/educations.json"
import rawExperiences from "./json/experiences.json"
import rawProjects from "./json/projects.json"
import rawSkills from "./json/skills.json"
import {
  CoursesSchema,
  EducationsSchema,
  ExperiencesSchema,
  ProjectsSchema,
  SkillsSchema,
} from "./schemas"

function validate() {
  const stuffs = [
    { schema: SkillsSchema, rawData: rawSkills },
    { schema: ProjectsSchema, rawData: rawProjects },
    { schema: ExperiencesSchema, rawData: rawExperiences },
    { schema: EducationsSchema, rawData: rawEducations },
    { schema: CoursesSchema, rawData: rawCourses },
  ]

  for (const stuff of stuffs) {
    stuff.schema.parse(stuff.rawData)
  }
}

validate()
