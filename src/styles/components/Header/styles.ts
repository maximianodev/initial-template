import styled, { css } from 'styled-components'

const Container = styled.div`
    ${({ theme }) => css`
        height: 60px;
        padding: 0 30px;

        color: #fff;
        background: ${theme.colors.primary};

        display: flex;
        align-items: center;
        justify-content: space-between;
    `}
`

export { Container }