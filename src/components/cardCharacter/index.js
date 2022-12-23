import Link from 'next/link'
import {StyleCard, ChacaracterCardStyle, ChacaracterInfo} from './styles'
import Image from 'next/image'

export function CardCharacter({image, name}){
  return(
    <StyleCard>
      <Link href="#">
          <ChacaracterCardStyle>
          <Image src={image} width={280} height={372} alt="imagem do personagem" />
         </ChacaracterCardStyle>
         <ChacaracterInfo>
          <div>
            <h3>{name}</h3>
            <span>Marvel Studios</span>
          </div>
            <span>What if</span>
         </ChacaracterInfo>
      </Link>
    </StyleCard>
  )
}