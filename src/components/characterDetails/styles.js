import { styled } from "../../styles";

import { Container } from "../../styles/global";

import BgDetail from "../../assets/bg-details.jpg";

export const HeroStyle = styled("section", {
  paddingTop: 96,
  background: `url(${BgDetail.src}) no-repeat top center`,
  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
  backgroundAttachment: "fixed",
  [`${Container}`]: {
    display: "flex",
    alignItems: "flex-start",
    borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
    borderRight: "1px solid rgba(255, 255, 255, 0.2)",

    "@mobile": {
      flexDirection: "column",
      alignItems: "center",
    },

    "@table": {
      flexDirection: "column",
      alignItems: "center",
    },

  },

});

export const ImageCharacter = styled("div", {
  flex: 1,
  width: "100%",
  maxWidth: 486,
  height: 555,
  borderRadius: 5,
  overflow: "hidden",
});

export const InfoCharacter = styled("div", {
  flex: 1,
  paddingLeft: 32,
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  paddingTop: 154,
  "@mobile": {
    paddingTop: 50,
  },
  "@table": {
    paddingTop: 50,
  },
  span: {
    display: "block",
    marginTop: 5,
    fontWeight: 400,
    fontSize: "1.8rem",
    lineHeight: "2.7rem",
    color: "#ACABB7",
    opacity: 0.6,
    marginRight: 19,
  },
  p: {
    fontWeight: 400,
    fontSize: "1.6rem",
    lineHeight: "2.4rem",
    color: "$gray_400",
    
  "@mobile": {
    marginBottom: 20,
  }
  },
  "& > div": {
    position: "relative",
    flex: 1,
    maxWidth: 520,
    paddingLeft: 22,
    "&:before": {
      content: "",
      position: "absolute",
      top: 12,
      left: 0,
      width: 4,
      height: 46,
      backgroundColor: "$red_800",
    },
    h1: {
      fontWeight: 600,
      fontSize: "6.1rem",
      lineHeight: "7.1rem",
      color: "$white",
      marginBottom: 13,
      "@mobile": {
        fontSize: "2.1rem",
      }
    },
  },
});
