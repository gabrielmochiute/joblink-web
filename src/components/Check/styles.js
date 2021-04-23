import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  height: 5vh;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  /* background-color: crimson; */
  /* border-left: solid 2px var(--secondary); */
  > input {
    background-color: blue;
    width: 2vw;
    height: inherit;
    /* position: absolute; */
    /* border-radius: 100px; */
  }

  > label {
    font-size: 3.5vh;
    width: fit-content;
    padding-left: 15px;
    height: inherit;
    font-weight: 500;

    display: flex;
    align-items: center;
  }
`;
