import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, body, input {
    font-family: Poppins;
    padding: 0;
    margin: 0
  }
  a {
    text-decoration: none;
  }
`

export default GlobalStyle
