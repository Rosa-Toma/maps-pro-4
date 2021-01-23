import { Fragment } from "react";
import styled from "styled-components";

export const Layout = styled(Fragment)`
    display: grid;
    grid-template-areas:
        "header"
        "main";

    grid-template-rows: 50px calc(100vh - 50px);
`;
