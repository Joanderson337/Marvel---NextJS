import {
  SectionCharactersStyle,
  TitleSection,
  CharacterList,
  CardMarvel,
} from "./styles";
import { Container } from "../../../styles/global";
import { CharacterCard } from "../../cardCharacter";
import LogoMarvel from "../../../assets/logo.svg";
import Image from "next/image";

export function SectionCharacters({data}) {
  return (
    <SectionCharactersStyle>
      <Container>
        <TitleSection>
          <span>What if</span>
          <h2>Personagens Marvel</h2>
        </TitleSection>
        <CharacterList>
        {data?.map((character) => {
            return (
              <CharacterCard
                key={character.id}
                name={character.data.nome_personagem}
                image={character.data.imagem_personagem.url}
                slug={character.data.slug}
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
