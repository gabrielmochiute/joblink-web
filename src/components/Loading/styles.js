import styled, { keyframes } from "styled-components";

const LoadingAnimation = keyframes`
  0%{
    width: 0%;
  }
  100%{
    width: 100%;
  }
`;

export const LoadingBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: blue;
  position: absolute;
  top: 0;
`;

export const Bar = styled.div`
  height: inherit;
  width: 0px;
  background-color: black;
  animation: ${LoadingAnimation} 5s;
`;
