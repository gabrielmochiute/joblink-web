import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
    --white: #ffffff;
    --dark: #000000;
    --darkGray: #C4C4C4;
    --gray: #EFEFEF;
    --light: #EDF2f4;
    --primary: #F78A2F;
    //E16600
    --secondary: #F55D7F;
    --font: #3A3A3A;  
    --urgency: #ffe712;
    --highUrgency: #FE0202;
  }
  
  
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  ::-webkit-scrollbar{
    width: 4px;
    border-radius: 15px;
    background-color: var(--darkGray);
  }

  ::-webkit-scrollbar-track{
    background-color: var(--darkGray);
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb{
    background: linear-gradient(to bottom, var(--primary), var(--secondary));
    border-radius: 15px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--light);
  }


  button {
    padding:10px;
    font-weight:bold;
    color: var(--light);
    background-image: linear-gradient(to right, var(--secondary), var(--primary));
    border: 1px solid var(--light);
    border-radius:4px;
    cursor: pointer;
    transition: all .2s ease-in;

    /* :hover{
      background-image: linear-gradient(to right ,var(--secondary),var(--secondary));
    } */
    :active{
      transform:scale(0.95);
    }
    :disabled{
      background-color: transparent;
      background-image: none;
      color: var(--darkGray);
    }
  }
`;
