import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Layout } from "./styles";
import logoLight from "assets/images/logoLight.webp";
import logoDark from "assets/images/logoDark.webp";

type Props = {
    width?: number;
    height?: number;
};

const Logo = ({ ...props }: Props) => {
    const theme = useContext(ThemeContext);
    
    return <Layout {...props} src={theme.isLight ? logoDark : logoLight} alt="logo" />;
};

export default Logo;
