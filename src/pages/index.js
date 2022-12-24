import { SectionHero } from "../components/home/sectionHero";
import { SectionCharacters } from "../components/home/sectionCharacters";
import { PageTitle } from "../components/PageTitle";
import { getPrismicClient } from "../service/prismic";

export default function Home({dataPage}) {
  return (
    <>
      <PageTitle title="Marvel" description="Landing page Marvel" />
      <SectionHero data={dataPage}/>
      <SectionCharacters/>
    </>
  )
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const contentsPage = await prismic.getSingle("home");

  const characters = await prismic.getAllByType("personagens");

  return {
    props: {
      dataPage: contentsPage.data,
      characters,
    },
    revalidate: 60,
  };
};
