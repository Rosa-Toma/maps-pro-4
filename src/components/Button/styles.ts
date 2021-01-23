import styled from "styled-components";

type Props = {
    width?: number;
    height?: number;
};

export const Layout = styled.button`
    grid-area: button;
    align-self: center;
    justify-self: center;

    cursor: pointer;
    outline: none;
    user-select: none;

    width: ${({ width }: Props) => (width ? `${width}px` : "auto")};
    height: ${({ height }: Props) => (height ? `${height}px` : "auto")};

    color: ${({ theme }) => theme.palette.text.primary};
    background-color: ${({ theme }) => theme.palette.background.secondary};
    border: solid 1px ${({ theme }) => theme.palette.divider};
    box-shadow: 1px 1px 1px ${({ theme }) => theme.palette.divider};

    &:hover {
        background-color: ${({ theme }) => theme.palette.action.hover};
        transition: background 0.2s;
    }
`;
