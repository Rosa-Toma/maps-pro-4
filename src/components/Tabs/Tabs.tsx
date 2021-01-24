import { ReactNode } from "react";
import { Layout } from "./styles";

type Props = {
    children: ReactNode;
};

const Tabs = ({ children }: Props) => {
    return <Layout>{children}</Layout>;
};

export default Tabs;
