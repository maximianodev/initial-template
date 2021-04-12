import { ThemeContext } from 'styled-components'
import { useContext } from 'react'
import * as S from './styles'
import Image from 'next/image'

interface Props {
    toggleTheme: () => void;
}

function Header(props: Props) {
    const { colors, title } = useContext(ThemeContext)

    return (
        <S.Container>
            Hello World
            <S.Button
                onClick={props.toggleTheme}
            >
                {
                    title === 'dark' ? <Image src="/images/lua.svg" alt="lua" width="40px" height="40px" />
                        :
                        <Image src="/images/sol.svg" alt="lua" width="40px" height="40px" />
                }
            </S.Button>
        </S.Container>
    )
}

export default Header