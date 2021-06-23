import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  background-color: #00000060;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 99;

  transition: 0.6s;
`;

export const ModalContainer = styled.section`
  z-index: 100;
  width: 500px;
  height: 600px;
  margin-top: 15px;

  overflow-x: auto;

  background-color: white;
  border-radius: 5px;

  position: relative;

  transition: 0.9s;

  > span {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 38px;
    cursor: pointer;
    transition: 0.3s;

    z-index: 19;
    :hover {
      color: var(--secondary);
    }
  }
`;
