import { ReactNode, ReactNodeArray } from "react";
import { Layout, Title } from "./styles";

type Props = {
    children: ReactNode;
    title: string;
};

const Tools = ({ children, title }: Props) => {
    return (
        <Layout>
            <Title>{title}</Title>
            <div>{children}</div>
        </Layout>
    );
};

export default Tools;
