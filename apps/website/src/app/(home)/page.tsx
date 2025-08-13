import { Hr } from "#/components/Hr"
import { Courses } from "./Courses"
import { Educations } from "./Educations"
import { Experiences } from "./Experiences"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Projects } from "./Projects"
import { Skills } from "./Skills"

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hr />
      <Skills />
      <Hr />
      <Projects />
      <Hr />
      <Experiences />
      <Hr />
      <Educations />
      <Hr />
      <Courses />
      <Hr />
      <Footer />
    </div>
  )
}
