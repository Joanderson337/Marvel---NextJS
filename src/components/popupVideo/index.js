import Image from "next/image";
import { StylePopupVideo } from "./styles";
import IconPlay from '../../assets/play.svg'

export function PopupVideo({text, thumb}){
  return(
    <>
    <StylePopupVideo>
      <span>{text}</span>
      <button style={{background: `url(${thumb} no-repeat center center)`}}>
        <div>
          <Image src={IconPlay} alt='icon play' />
        </div>
      </button>
    </StylePopupVideo >
    </>
  )
}