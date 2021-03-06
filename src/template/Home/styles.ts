import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({theme}) => css`
    width: 100%;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: ${theme.fontSize.lengthLg3}
    }
  `}
`