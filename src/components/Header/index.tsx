import { ThemeContext } from 'styled-components'
import { useContext } from 'react'
import * as S from './styles'
import Switch from 'react-switch'
import { shade } from 'polished';

interface Props {
    toggleTheme: () => void;
}

function Header(props: Props) {
    const { colors, title } = useContext(ThemeContext)

    return (
        <S.Container>
            Hello World
            <Switch
                onChange={props.toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.1, colors.primary)}
                onColor={colors.primcolorAccentary}
            />
        </S.Container>
    )
}

export default Header