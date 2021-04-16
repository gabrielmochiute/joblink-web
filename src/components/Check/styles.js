import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  > input {
    background-color: #ededed;
    width: 50px;
    height: 50px;
    /* border-radius: 100px; */
  }

  > label {
    font-size: 26px;
    align-items: center;
    width: 100%;
    padding-left: 15px;
    height: 40px;
    font-weight: 500;
  }
`;
