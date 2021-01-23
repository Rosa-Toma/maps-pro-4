import { Fragment } from "react";
import styled from "styled-components";

export const Layout = styled.div`
    display: grid;
    grid-template-areas:
        "sidebar toolbar"
        "sidebar map";

    grid-template-columns: 300px 1fr;
    grid-template-rows: 80px 1fr;
`;
