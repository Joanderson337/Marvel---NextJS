import { Header } from "../components/header";
import { SectionHero } from "../components/home/sectionHero";
import { SectionCharacters } from "../components/home/sectionCharacters";
import { Footer } from "../components/footer";


export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionCharacters/>
      <Footer />
    </>
  )
}
