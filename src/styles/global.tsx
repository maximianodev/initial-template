import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  body {
    color: ${props => props.theme.colors.colorText};
    background: ${props => props.theme.colors.background};
    font-size: 14px;
  }
  
  @media (max-width: 1024px) {
    html {
        font-size: 93.75%;
    }
  }
  @media (max-width: 768px) {
    html {
        font-size: 87.5%;
    }
  }
`

export { GlobalStyle }