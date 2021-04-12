import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  background-color: #E5E5E5;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.section`
  width: 90vw;
  height: 90vh;
  padding: 20px;

  z-index: 19;

  overflow-x: auto;

  background-color: white;
  border-radius: 4px;

  position: relative;

`;
