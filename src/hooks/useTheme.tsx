import { useState } from "react";
import { darkTheme, lightTheme } from "themes";

const useTheme = () => {
    const [theme, setTheme] = useState(lightTheme);

    const updateTheme = () => {
        if (theme.isLight) {
            setTheme(darkTheme);
        } else {
            setTheme(lightTheme);
        }
    };

    return [theme, updateTheme] as const;
};

export default useTheme;
