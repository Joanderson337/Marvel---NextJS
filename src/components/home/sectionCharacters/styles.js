import { styled } from "../../../styles";
import { Container } from "../../../styles/global";

export const SectionCharactersStyle = styled("section", {
  width: "100%",
  paddingTop: 56,
  paddingBottom: 76,
  [`${Container}`]: {
    "@lgScreen":{
      maxWidth: 1000,
    },
  
    "@table": {
      maxWidth: 620,
    },
  
    "@mobile": {
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    }
  },
});

export const TitleSection = styled("div", {
  display: "flex",
  alignItems: "center",
  span: {
    fontWeight: 400,
    fontSize: "1.8rem",
    lineHeight: "2.7rem",
    color: "$white",
    opacity: 0.4,
    marginRight: "11.3rem",
  },
  h2: {
    flex: 1,
    maxWidth: "21.6rem",
    borderLeft: "1px solid $red_800",
    paddingLeft: 16,
    fontWeight: 600,
    fontSize: "2.5rem",
    lineHeight: "3.5rem",
    color: "$white",
  },
});

export const CharacterList = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "40px 33px",
  marginTop: "5.6rem",

  "@lgScreen":{
    gridTemplateColumns: "repeat(3, 1fr)",
  },

  "@table": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@mobile": {
    gridTemplateColumns: "repeat(1, 1fr)",
  }
});

export const CardMarvel = styled("div", {
  width: "100%",
  height: 372,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
