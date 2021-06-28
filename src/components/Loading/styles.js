import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    /* transform: translateX(100px) */
    left: 0px;
    background-color: var(--primary);
    
  }
  25% {
    
    background-color: var(--secondary);
  }
  50% {
    /* transform: translateX(500px) */
    left: 400px;
    background-color: var(--primary);

  }
  75% {
    background-color: var(--secondary);
  }
  100% {
    left: 0px;
    background-color: var(--primary);

  }
`;

export const LoadingBar = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000090;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10000;

  > h1 {
    color: var(--white);
    font-weight: 400;
    margin-bottom: 15px;
  }

  #line-base {
    height: 15px;
    width: 500px;
    background-color: var(--darkGray);
    position: relative;
    border-radius: 50px;
  }

  #line {
    height: 15px;
    width: 100px;
    /* background-color: var(--primary); */
    position: absolute;

    border-radius: 50px;
    top: 0px;
    animation: ${loadingAnimation} linear 2.5s;
    animation-iteration-count: infinite;
  }
`;
