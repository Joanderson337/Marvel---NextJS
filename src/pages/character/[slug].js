import { PageTitle } from "../../components/PageTitle"
import { CharacterHero } from "../../components/characterDetails/Hero"
import { getPrismicClient } from "../../service/prismic"
import { SectionCharacters } from "../../components/home/sectionCharacters";

export default function CharacterDetailsPage({ character, characters }) {
  return (
    <>
      <PageTitle
        title={`What If? `}
        description={`Detalhes do personagem`}
      />
      {character && <CharacterHero dataCharacter ={character}/>}
      {characters && <SectionCharacters data={characters} />}
    </>
  )
}


export const getStaticPaths = async () => {
  // Conexão com o prismic
  const prismic = getPrismicClient()

  // Buscando todos os personagens cadastrados
  const characters = await prismic.getAllByType("personagens")

  // Criando as rotas estaticas de acordo com o slug de cada personagem
  const paths = characters.map(({ data }) => {
    return {
      params: { slug: data.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const prismic = getPrismicClient()

  const characters = await prismic.getAllByType("personagens");

  // Retorna somente o dado do personagem acessado
  const character = characters.find(({ data }) => {
    return data.slug === context.params.slug
  });

  // Remove o personagem da pagina atual da lista de personagens
  characters.splice(
    characters.findIndex((e) => {
      return e.data.slug === character.data.slug
    }),
    1
  );

  return {
    props: {
      character,
      characters,
    },
  };
};
