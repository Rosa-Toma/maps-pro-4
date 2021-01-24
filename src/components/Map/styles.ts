import styled from "styled-components";

export const Layout = styled.div`
    grid-area: map;

    filter: ${({ theme }) => theme.palette.map.filter};
    z-index: 1;
`;
