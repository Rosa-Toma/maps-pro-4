import "styled-components";

declare module "styled-components" {
    export interface Theme {
        isLight: boolean;
        icon: ReactNode;
        palette: {
            text: {
                primary: string;
                secondary: string;
                disabled: string;
            };
            action: {
                active: string;
                hover: string;
                selected: string;
                disabled: string;
                disabledBackground: string;
            };
            background: {
                primary: string;
                secondary: string;
            };
            map: {
                filter: string;
            };
            divider: string;
        };
    }
}
