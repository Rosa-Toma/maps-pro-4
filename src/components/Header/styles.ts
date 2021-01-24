import styled from "styled-components";

export const Layout = styled.header`
    grid-area: header;

    display: grid;
    grid-template-areas: "logo . menu button";
    grid-template-columns: 150px 1fr 500px 100px;

    background-color: ${({ theme }) => theme.palette.background.secondary};
    box-shadow: 5px 5px 5px ${({ theme }) => theme.palette.divider};
`;
