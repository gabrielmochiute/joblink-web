import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  background-color: #00000060;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const ModalContainer = styled.section`
  z-index: 100;
  width: 1200px;
  height: 600px;

  overflow-x: auto;

  background-color: white;
  border-radius: 5px;

  position: relative;

  transition: 0.9s;

  display: flex;
  align-items: center;
  justify-content: center;

  #firstColumn {
    width: 50%;
    height: 100%;
    background-color: gray;
  }
  #secondColumn {
    width: 50%;
    height: 100%;
    background-color: aqua;
  }
`;
