import { Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    header {
        padding: 20px;
        background-color: #000000;
        color: #15FF00;
        font-family: Inconsolata;
    }

    main {
        margin: 20px;
        background-color: #FFFFFF;
        font-family: Inconsolata;
    }

    footer {
        padding: 20px;
        background-color: #000000;
        color: #15FF00;
        font-family: Inconsolata;
    }
`;

export const StyledLink = styled(Link)`
    color: #000000;
    &:hover {
        color: #15FF00;
    }
`;
