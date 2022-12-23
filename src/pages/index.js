import { SectionHero } from "../components/home/sectionHero";
import { SectionCharacters } from "../components/home/sectionCharacters";
import { PageTitle } from "../components/PageTitle";


export default function Home() {
  return (
    <>
      <PageTitle title="Marvel" description="Landing page Marvel" />
      <SectionHero />
      <SectionCharacters/>
    </>
  )
}
