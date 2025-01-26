import { createGlobalStyle } from "styled-components";

export const cores = {
    branco: '#FFFFFF',
    amarelo: '#F7CA11',
    roxo: '#3442B5',
    cinza: '#3F3F40',
    roxoEscuro: '#271C47',
    pretoClaro: '#222222B5',
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: bordex-box;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${cores.branco};
    }
`

