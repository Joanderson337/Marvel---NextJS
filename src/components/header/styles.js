import { styled } from "../../styles";

import { Container } from "../../styles/global";

export const HeaderStyle = styled("header", {
  position: "absolute",
  top: 0,
  width: "100%",
  height: 96,
  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
  display: "flex",
  alignItems: "center",
  zIndex: 2023,
  [`${Container}`]: {
    height: "100%",
    borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
    display: "flex",
    alignItems: "center",
  },
  ".logo": {
    position: "relative",
    paddingLeft: 23,
  }
});
