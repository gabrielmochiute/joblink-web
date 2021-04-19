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
  width: 95vw;
  height: 90vh;
  background-color: white;
  padding-top: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  > h1 {
    font-size: 4vh;
    text-transform: uppercase;
    border-bottom: solid 2px black;
  }
`;

export const Forms = styled.form`
  height: 100%;
  width: 100%;
  /* background-color: blueviolet; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
  /* background-color: blue; */
  margin-top: 50px;
  padding: 0 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    /* background-image: none; */
    border: none;
    background: none;
    color: black;
    width: fit-content;
    height: fit-content;
    font-size: 36px;
    font-weight: 600;
  }
`;

export const Steps = styled.div`
  /* background-color: blue; */
  width: 30vw;
  height: 15vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    to bottom,
    transparent 40%,
    black 50%,
    transparent 50%
  );
  > div {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    padding-top: 5px;

    box-shadow: 1px 1px 5px black;
    background-color: var(--light);
    text-align: center;
    font-size: 56px;
  }
`;
