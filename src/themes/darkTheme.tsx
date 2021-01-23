import { Theme } from "styled-components";
import { BiSun } from "react-icons/bi";

const darkTheme: Theme = {
    isLight: false,
    icon: <BiSun size="1.2em" />,
    palette: {
        text: {
            primary: "#FFF",
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
        },
        action: {
            active: "#FFF",
            hover: "rgba(255, 255, 255, 0.04)",
            selected: "rgba(255, 255, 255, 0.16)",
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
        },
        background: {
            primary: "#212121",
            secondary: "#333333",
        },
        map: {
            filter: "invert(100%);",
        },
        divider: "rgb(0, 0, 0, 0.25)",
    },
};

export default darkTheme;
