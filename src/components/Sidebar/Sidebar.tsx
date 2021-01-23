import { ReactNode } from "react";
import { Layout } from "./styles";

type Props = {
    children: ReactNode;
};

const Sidebar = ({ children }: Props) => {
    return <Layout>{children}</Layout>;
};

export default Sidebar;
