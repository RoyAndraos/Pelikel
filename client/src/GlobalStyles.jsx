import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{

        @font-face {
  font-family: 'mom';
  src: url('/font/zai_OlivettiLettera22Typewriter.woff2') format('opentype');
}
        margin:0;
        color:black;
    }
    h1, h2{
        font-size: 20px;
    }
  
`;

export default GlobalStyles;
