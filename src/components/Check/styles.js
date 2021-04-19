import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: crimson; */

  > input {
    background-color: #ededed;
    width: 5vw;
    height: 5vh;
    /* border-radius: 100px; */
  }

  > label {
    font-size: 3.5vh;
    align-items: center;
    width: 100%;
    padding-left: 15px;
    height: 40px;
    font-weight: 500;
  }
`;
