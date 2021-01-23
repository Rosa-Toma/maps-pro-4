import styled from "styled-components";

export const Layout = styled.nav`
    grid-area: menu;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8em;

        text-transform: capitalize;
        text-decoration: none;

        width: 100px;
        height: 32px;

        color: ${({ theme }) => theme.palette.text.primary};
        background-color: ${({ theme }) => theme.palette.background.secondary};
        border: solid 1px ${({ theme }) => theme.palette.divider};
        box-shadow: 1px 1px 1px ${({ theme }) => theme.palette.divider};

        &:hover {
            background-color: ${({ theme }) => theme.palette.action.hover};
            transition: background 0.2s;
        }
    }
`;
