import styled from "styled-components";

export const Layout = styled.div`
    display: grid;
    grid-template-areas:
        "sidebar toolbar"
        "sidebar map";

    grid-template-columns: 400px 1fr;
    grid-template-rows: 100px calc(100vh - 150px);
`;
