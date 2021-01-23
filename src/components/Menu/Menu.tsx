import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const Menu = ({ children }: Props) => {
    return <nav>{children}</nav>;
};

export default Menu;
