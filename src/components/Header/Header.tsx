import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const Header = ({ children }: Props) => {
    return <header>{children}</header>;
};

export default Header;
