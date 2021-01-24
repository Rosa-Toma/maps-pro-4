import { ReactNode } from "react";
import { Layout } from "./styles";

type Props = {
    children: ReactNode;
};

const TabPanel = ({ children }: Props) => {
    return <Layout>{children}</Layout>;
};

export default TabPanel;
