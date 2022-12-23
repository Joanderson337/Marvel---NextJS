import Image from "next/image";
import { Container } from "../../../styles/global";
import { AreaSocial, ContentText, SectionHeroStyle } from "./styles";

import IconYoutube from "../../../assets/youtube.svg";
import IconInstagram from "../../../assets/instagram.svg";
import { PopupVideo } from "../../popupVideo";

const socials = [
  {
    name: "Youtube",
    url: "#",
    icon: IconYoutube,
  },
  {
    name: "Instagram",
    url: "#",
    icon: IconInstagram,
  },
];

export function SectionHero() {
  return (
    <SectionHeroStyle>
      <Container>
        <AreaSocial>
          <ul>
            {socials.map(({ name, url, icon }) => {
              return (
                <li key={`social-${name}`}>
                  <a href={url} target="_blank" rel="noreferrer">
                    <Image src={icon} alt="Youtube" />
                  </a>
                </li>
              );
            })}
          </ul>
        </AreaSocial>
        <ContentText>
          <div className="left">
          <h3>COMING SON</h3>
            <h1>Lorem ipsum dolor sit amet, elit consectetur</h1>
            <p>
              Maecenas tristique eu quam sed pretium. Pellentesque sagittis elit
              et porttitor consequat. Nam augue turpis, tincidunt commodo lacus
              at, auctor suscipit ex
            </p>
            <a href="" target="_blank">Saiba mais</a>
          </div>
          <PopupVideo />
        </ContentText>
      </Container>
    </SectionHeroStyle>
  );
}
