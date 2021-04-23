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
  min-height: 90vh;
  background-color: white;
  overflow: hidden;

  padding-top: 50px;
  padding-left: 5vw;
  padding-right: 5vw;

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
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

export const CheckList = styled.div`
  /* background-color: blue; */
  width: inherit;
  min-height: 50vh;
  overflow: hidden;

  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  /* margin-top: 100px; */
`;

export const Next = styled.div`
  width: 100%;
  height: 10vh;
  /* background-color: blue; */
  margin-top: 50px;
  padding: 0 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    display: inline-block;
    position: relative;
    z-index: 0;
    background-image: none;
    border: none;
    background: none;
    width: fit-content;
    height: fit-content;
    font-size: 36px;
    font-weight: 600;
    transition: 0.8s;

    > span {
      position: relative;
      z-index: 0;
      background: black;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: black;
      transition: all 0.9s;
    }
    :hover {
      background-image: none;
      color: var(--secondary);
      > span {
        position: relative;
        z-index: 0;
        background: linear-gradient(to right, var(--secondary), var(--primary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: black;
      }
    }
  }
`;

export const Steps = styled.div`
  min-width: 15vw;
  height: inherit;
  /* background-color: blue; */

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 2s;

  > span {
    width: 15vw;
    height: 5px;
    position: absolute;
    /* background: linear-gradient(
      to right,
      var(--primary) 50%,
      var(--darkGray) 50%
    ); */
  }

  > div {
    width: 80px;
    height: 80px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 2s;
    z-index: 19;
    user-select: none;
    /* padding-top: 5px; */

    /* box-shadow: 1px 1px 5px black; */
    background-color: var(--darkGray);
    text-align: center;
    font-size: 5vh;
    color: #ffffff;
  }
`;
