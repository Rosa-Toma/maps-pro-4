import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        background: ${({ theme }) => theme.palette.background.primary};
        color: ${({ theme }) => theme.palette.text.primary};
        font-family: verdana;
    }
`;

export const Layout = styled.div`
    display: grid;
    grid-template-areas:
        "header"
        "main";

    grid-template-rows: 50px calc(100vh - 50px);
`;
