import { ReactNode } from "react";
import { Layout } from "./styles";

type Props = {
    onClick: () => void;
    width?: number;
    height?: number;
    icon?: ReactNode;
    title?: string;
};

const Button = ({ icon, ...props }: Props) => {
    return <Layout {...props}>{icon}</Layout>;
};

export default Button;
