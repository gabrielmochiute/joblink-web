import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
    --dark: #000000;
    --darkGray: #C4C4C4;
    --light: #EDF2f4;
    --primary: #F78A2F;
    --secondary: #ED5354;
  }
  
  
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  ::-webkit-scrollbar{
    width: 4px;
    background-color: var(--darkGray);
  }

  ::-webkit-scrollbar-track{
    background-color: var(--darkGray);
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb{
    background-color: var(--light);
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
    transition: .6s ease-in;

    :hover{
      background-image: linear-gradient(to right, var(--secondary), var(--secondary));
    }
    :active{
      transform:scale(0.95);
    }
    :disabled{
      background-color: transparent;
      color: var(--darkGray);
    }
  }
`;
