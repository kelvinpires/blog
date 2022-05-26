import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    body {
        background-color: var(--light-purple);
        min-height: 100vh;
        position: relative;
    }
    html {
        font-size: 62.5%;
        font-family: 'Poppins', sans-serif;
        font-family: 'Roboto', sans-serif;
    }
    :root {
        --purple-bg: #290742;
        --dark-bg: #170027;
        --button-bg: #9e6dc2;
        --white: #fff;
        --light-purple: #fbf6ff;
        --green: #4fff4b;
        --text-color: #1e1e26;
    }
    
    
    html {
        font-size: 50%;
    }
    @media screen and (max-width: 886px) {
        html {
            font-size: 30%;
        }
    }
    
`;
