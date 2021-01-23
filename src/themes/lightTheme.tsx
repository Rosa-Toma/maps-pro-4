import { Theme } from "styled-components";
import { BiMoon } from "react-icons/bi";

const lightTheme: Theme = {
    isLight: true,
    icon: <BiMoon size="1.2em" />,
    palette: {
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
        },
        action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.04)",
            selected: "rgba(0, 0, 0, 0.08)",
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
        },
        background: {
            primary: "#FAFAFA",
            secondary: "#FFF",
        },
        map: {
            filter: "invert(0%);",
        },
        divider: "rgba(0, 0, 0, 0.12)",
    },
};

export default lightTheme;
