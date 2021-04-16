import styled from "styled-components";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to bottom,
    var(--primary),
    var(--secondary)
  );

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.article`
  width: 45vw;
  height: 70vh;
  background-color: white;
  padding-top: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  > h1 {
    font-size: 38px;
    text-transform: uppercase;
    border-bottom: solid 2px black;
  }
`;

export const Forms = styled.form`
  height: 80%;
  width: 80%;
`;

export const CheckList = styled.div`
  /* background-color: blue; */
  width: inherit;
  height: 300px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  /* margin-top: 100px; */
`;

export const Next = styled.div`
  width: 100%;
  height: 70px;
  background-color: blue;
  margin-top: 50px;
`;
