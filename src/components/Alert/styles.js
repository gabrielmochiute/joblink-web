import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 30%;
  right: 30%;
  z-index: 9999;

  /* width: 300px; */
  height: 0px;
  margin: 5px;

  transition: height 0.4s;

  border-radius: 8px;
  background-image: ${(props) =>
    props.type === "error"
      ? "linear-gradient(to right, var(--secondary), var(--primary))"
      : "linear-gradient(to bottom, var(--secondary), var(--primary))"};

  white-space: nowrap;
  overflow: hidden;
  color: white;

  > h1 {
    text-align: center;
    font-size: 24px;
    margin: 5px;
  }

  > p {
    text-align: center;
    font-size: 18px;
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
