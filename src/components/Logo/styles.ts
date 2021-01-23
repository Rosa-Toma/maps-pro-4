import styled from "styled-components";

type Props = {
    width?: number;
    height?: number;
};

export const Layout = styled.img`
    grid-area: logo;

    width: ${({ width }: Props) => (width ? `${width}px` : "auto")};
    height: ${({ height }: Props) => (height ? `${height}px` : "auto")};
`;
