import styled from "styled-components";

export const Layout = styled.div`
    grid-area: toolbar;
    display: grid;
    grid-template-areas: "1 2 3 4 5 6";
    grid-template-columns: 320px 420px 145px 145px 240px 240px;

    box-shadow: 2px 2px 2px ${({ theme }) => theme.palette.divider};
    z-index: 2;
`;
