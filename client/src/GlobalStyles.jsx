import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body{
    /* height:100%;
    background-image: url("/background.svg");
    background-repeat: repeat; */
}
    *{
        @font-face {
  font-family: 'mom';
  src: url('/font/Mom.woff2') format('opentype');
}
        margin:0;
        color:whitesmoke;
    }
    h1, h2{
        font-size: 20px;
    }
`;

export default GlobalStyles;
