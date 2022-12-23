import {
  SectionCharactersStyle,
  TitleSection,
  CharacterList,
  CardMarvel,
} from "./styles";
import { Container } from "../../../styles/global";
import { CharacterCard } from "../../cardCharacter";
import LogoMarvel from "../../../assets/logo.svg";
import ImagemCharacter from "../../../assets/character.jpg";
import Image from "next/image";

const characters = [
  {
    name: "teste",
    image: ImagemCharacter,
    slug: "/",
  },
  {
    name: "teste",
    image: ImagemCharacter,
    slug: "/",
  },
  {
    name: "teste",
    image: ImagemCharacter,
    slug: "/",
  },
  {
    name: "teste",
    image: ImagemCharacter,
    slug: "/",
  },
  {
    name: "teste",
    image: ImagemCharacter,
    slug: "/",
  },
  {
    name: "teste",
    image: ImagemCharacter,
    slug: "/",
  },
  {
    name: "teste",
    image: ImagemCharacter,
    slug: "/",
  },
];

export function SectionCharacters() {
  return (
    <SectionCharactersStyle>
      <Container>
        <TitleSection>
          <span>What if</span>
          <h2>Personagens Marvel</h2>
        </TitleSection>
        <CharacterList>
        {characters?.map(({image, name, slug}) => {
            return (
              <CharacterCard
                key={name}
                name={name}
                image={image}
                slug={slug}
              />
            );
          })}
          <CardMarvel>
            <Image src={LogoMarvel} alt="logo da marvel" />
          </CardMarvel>
        </CharacterList>
      </Container>
    </SectionCharactersStyle>
  );
}
