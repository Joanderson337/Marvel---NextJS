import {globalCss} from './index'

export const globalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    fontFamily: "Poppins, sans-serif",
  },
  html:{
    fontSize: "62.5%"
  },
  body:{
    "-webkit-font-smoothing": "antialiased",
    background: "linear-gradient(119.36deg, #010101 0%, #000000 100%)",
    color: "$while",
  },
  img: {
    maxWidth: "100%",
    display: "block",
  },
  button:{
    cursor: "pointer",
  }
})