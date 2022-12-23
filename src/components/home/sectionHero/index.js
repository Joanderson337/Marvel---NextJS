import { SectionHeroStyle, AreaSocial, ContextText } from "./styles";
import { Container } from "../../../styles/global";
import { IconYouTube } from "../../../assets/youtube.svg";
import { IconInstagram } from "../../../assets/instagram.svg";
import Image from "next/image";

const socials = [
  {
    name: "YouTube",
    url: "#",
    icon: IconYouTube,
  },
  {
    name: "YouTube",
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
            {socials.map(({ icon, name, url }) => {
              return (
                <li key={`social-${name}`}>
                  <a href={url} target="_blank" rel="noreferrer">
                    <Image src={icon} alt={name} />
                  </a>
                </li>
              );
            })}
          </ul>
        </AreaSocial>
        <ContextText>
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
        </ContextText>
      </Container>
    </SectionHeroStyle>
  );
}
