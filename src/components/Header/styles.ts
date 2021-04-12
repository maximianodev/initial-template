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
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    background: transparent;

    border-radius: 10px;
    border: none;
    cursor: pointer;
    &:focus {
        box-shadow: 0 0 0 3px rgb(66 153 225 / 60%);
    }
`

export { Container, Button }