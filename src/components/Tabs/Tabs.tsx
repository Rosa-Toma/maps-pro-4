import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const Tabs = ({ children }: Props) => {
    return <div>{children}</div>;
};

export default Tabs;
