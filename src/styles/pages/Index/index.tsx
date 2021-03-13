import styled from 'styled-components'

const Container = styled.div`
  background: #f5f5f5;
  h1 {
    color: ${({ theme }) => theme.colors.primary}
  }
  
`
export { Container }