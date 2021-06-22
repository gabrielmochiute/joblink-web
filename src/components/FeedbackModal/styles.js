import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  background-color: #00000060;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 999;
`;

export const ModalContainer = styled.section`
  width: 1100px;
  height: 600px;
  margin-top: 15px;

  overflow-x: auto;

  background-color: white;
  border-radius: 5px;

  position: relative;

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
