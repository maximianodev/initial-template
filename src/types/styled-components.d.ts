import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            primary: string,
            primcolorAccentary: string,
            background: string,
            light: string,
            dark: string,
            colorGrey: string,
            colorText: string,
            colorLabel: string,
            colorDisabled: string,
        },
        device: {
            maxMobile: string,
            maxTablet: string
        },
        fontSize: {
            lengthSm1: string,
            lengthSm2: string,
            lengthSm3: string,
            lengthMd1: string,
            lengthMd2: string,
            lengthMd3: string,
            lengthLg1: string,
            lengthLg2: string,
            lengthLg3: string
        }
    }

    export interface CustomTheme {
        title: string,
        colors: {
            primary: string,
            primcolorAccentary: string,
            colorText: string,
            background: string,
        }
    }
}