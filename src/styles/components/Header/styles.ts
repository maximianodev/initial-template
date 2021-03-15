import styled from 'styled-components'

export const Container = styled.div`
    height: 60px;
    padding: 0 30px;

    color: #fff;
    background: ${props => props.theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: space-between;
`