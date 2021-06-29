import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  position: relative;
  margin-top: 15px;

  > input {
    border: 0;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 3px;
    background-color: #ededed;
    color: var(--font);
  }

  > label {
    position: absolute;
    top: 0;
    left: 10px;
    color: var(--darkGray);
    display: flex;
    align-items: center;
    cursor: text;
    transition: 0.2s ease-in-out;
    pointer-events: none;
  }

  > input,
  > label {
    width: 100%;
    height: 50px;
    font-size: 16px;
    border-radius: 15px;
    /* margin-bottom: 30px; */
  }

  > input:focus {
    border-bottom: 2px solid var(--secondary);
  }

  > input:not(:placeholder-shown) + label,
  > input:focus + label {
    top: -45px;
    font-size: 20px;
    font-weight: 400;
    left: 0px;
    color: var(--darkGray);
  }

  /* > input:not(placeholder-shown) */
`;
