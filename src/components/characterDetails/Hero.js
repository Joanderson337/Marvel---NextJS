import Image from "next/image"

import { Container } from "../../styles/global"
import { HeroStyle, ImageCharacter, InfoCharacter } from "./styles"

export function CharacterHero({ dataCharacter }) {
  return (
    dataCharacter && (
      <HeroStyle>
        <Container>
          <ImageCharacter>
            <Image
              src={dataCharacter.data.imagem_personagem.url}
              width={486}
              height={631}
              alt="Imagem do personagem"
            />
          </ImageCharacter>
          <InfoCharacter>
            <span>A História</span>
            <div>
              <h1>{dataCharacter.data.nome_personagem}</h1>
     
            </div>
                <p>{dataCharacter.data.descricao_personagem[0].text}</p>
          </InfoCharacter>
        </Container>
      </HeroStyle>
    )
  );
}
