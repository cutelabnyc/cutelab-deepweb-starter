import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    header {
        padding: 20px;
        background-color: rgb(0, 0, 0);
        color: #15FF00;
        font-family: Inconsolata;
    }
    main {
        margin: 20px;
        background-color: rgb(255, 255, 255);
        font-family: Inconsolata;
    }
    footer {
        margin: 20px;
        background-color: rgb(255, 255, 255);
        font-family: Inconsolata;
    }
`;
