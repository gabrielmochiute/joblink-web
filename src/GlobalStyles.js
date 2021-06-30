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
    font-family: Roboto,-apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

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
    
    background-color: var(--light);
  }


  button {
    
    font-weight:400;
    text-transform: uppercase;
    color: var(--white);
    border: 1px solid var(--light);
    border-radius:4px;
    cursor: pointer;
    transition: all .2s ease-in;
    background: var(--secondary);
    border: solid 1.5px var(--secondary);

    :hover{
      background: var(--white);
      color: var(--secondary);
      
    }
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
