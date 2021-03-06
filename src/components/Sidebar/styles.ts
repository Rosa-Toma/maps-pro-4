import styled from "styled-components";

export const Layout = styled.div`
    grid-area: sidebar;

    display: grid;
    grid-template-areas:
        "tabs"
        "tabPanel";
    grid-template-rows: 100px;
    box-shadow: 3px 3px 3px ${({ theme }) => theme.palette.divider};

    z-index: 2;
`;
