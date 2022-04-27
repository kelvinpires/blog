import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
        --login-button: #3C91E6;
        --login-button-hover: #5FBFF9;
        --title: #0C1B33;
    }
`;
