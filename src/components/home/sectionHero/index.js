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

export function SectionHero({ data }) {
  console.log(data);
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
            <h3>{data.subtitle_hero}</h3>
            <h1>{data.title_hero}</h1>
            <p>{data.description_hero[0].text}</p>
            <a href={data.url_button.url} target="_blank" rel="noreferrer">
              {data.label_button}
            </a>
          </div>
          <PopupVideo text={data.label_trailer} thumb={data.thumb_trailer.url} />
        </ContentText>
      </Container>
    </SectionHeroStyle>
  );
}
