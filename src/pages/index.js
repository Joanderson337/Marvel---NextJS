import { Header } from "../components/header";
import { SectionHero } from "../components/home/sectionHero";
import { SectionCharacters } from "../components/home/sectionCharacters";


export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionCharacters/>
    </>
  )
}
