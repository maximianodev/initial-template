import { createGlobalStyle, css } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    font-family: 'Poppins', sans-serif;
  }
  
  ${({ theme }) => css`
    body {
      color: ${theme.colors.colorText};
      background: ${theme.colors.background};
      font-size: 14px;
    }

    body * {
      &::selection {
        background: ${theme.colors.primary};
        color: ${theme.colors.light};
      } 
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
  `}
`

export { GlobalStyle }