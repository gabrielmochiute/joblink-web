import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 999;

  width: 0px;
  height: fit-content;
  padding-left: 16px;
  /* padding-right: 16px; */
  margin: 5px;

  transition: width 0.4s;

  border-radius: 8px;
  background-image: ${(props) =>
    props.type === "error"
      ? "linear-gradient(to right, var(--secondary), var(--primary))"
      : "linear-gradient(to bottom, var(--secondary), var(--primary))"};

  white-space: nowrap;
  overflow: hidden;
  color: white;

  > h1 {
    /* text-align: center; */
    font-size: 24px;
    margin: 5px;
    font-weight: 500;
  }

  > p {
    /* text-align: center; */
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  > span {
    position: absolute;
    top: 5px;
    right: 10px;

    font-size: 32px;

    cursor: pointer;
    transition: 0.2s;

    :hover {
      color: var(--dark);
    }
  }
`;
