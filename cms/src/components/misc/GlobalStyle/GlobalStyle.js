import { createGlobalStyle } from 'styled-components'
import FontBold from '../../../assets/fonts/BRFirmaCW-Bold.woff2'
import FontSemiBold from '../../../assets/fonts/BRFirmaCW-SemiBold.woff2'
import FontRegular from '../../../assets/fonts/BRFirmaCW-Regular.woff2'
import FontMedium from '../../../assets/fonts/BRFirmaCW-Medium.woff2'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: font-bold;
    src: url(${FontBold});
  }
  @font-face {
    font-family: font-semibold;
    src: url(${FontSemiBold});
  }
  @font-face {
    font-family: font-regular;
    src: url(${FontRegular});
  }
  @font-face {
    font-family: font-medium;
    src: url(${FontMedium});
  }
  body {
    background: #f5f9fe;
    font-family: font-regular;
  }
`

export default GlobalStyle
