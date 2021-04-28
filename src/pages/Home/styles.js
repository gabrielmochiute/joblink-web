import styled from "styled-components";

export const Overlay = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
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
  position: absolute;

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
    width: 50px;
    height: 50px;
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

export const StepsButtons = styled.div`
  > button,
  span {
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
    text-transform: uppercase;

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

  > span {
    font-size: 4vh;
    user-select: none;
    transition: 0.5s;

    :hover {
      cursor: pointer;
    }
  }
`;

export const TitleDescriptionContainer = styled.div`
  width: 100%;
  min-height: fit-content;
  overflow: hidden;
  /* background-color: blue; */

  padding: 0px 2vw;

  > label {
    font-size: 3vh;
  }

  > textarea,
  input {
    width: 100%;

    font-size: 3vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    border-radius: 30px;
    border: 0;

    padding: 10px 15px;

    background-color: #ededed;
    overflow: hidden;
    transition: all 0.3s;
  }

  > textarea {
    min-height: 30vh;
    overflow: auto;
    margin-bottom: 8px;
    resize: none;
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: blue; */

  > img {
    width: 60vw;
    height: 45vh;
    margin-bottom: 15px;
  }

  /* background-color: blue; */
  > input {
    display: none;
  }
  > label {
    width: fit-content;
    height: 50px;

    padding: 0px 15px;
    border-radius: 15px;
    font-size: 32px;
    /* background: linear-gradient(to right, var(--secondary), var(--primary));
 */
    border-bottom: solid 5px var(--secondary);
    /* color: white; */
    text-align: center;
    transition: 0.5s;
    cursor: pointer;

    :hover {
      color: white;
      background-color: var(--primary);
      /* border-color: var(--primary); */
    }
  }
`;
