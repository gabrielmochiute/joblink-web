import styled, { keyframes } from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  background-color: #e5e5e5;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterAnimation = keyframes`
  0%{
    top: -450px;
    opacity: 0;
    /* transform: scale(0.01) rotate(90deg); */
  }
  100%{
    top: 0px;
    opacity: 1;
    /* transform: scale(1) rotate(0deg); */
  }
`;

export const ModalContainer = styled.section`
  animation: ${RegisterAnimation} 0.5s;
  width: 90vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 19;

  overflow-x: auto;

  background-color: white;
  border-radius: 4px;

  position: relative;
`;

export const BannerRegister = styled.div`
  width: 50vw;
  height: 100%;
  /* background-color: burlywood; */

  /* display: flex; */
  justify-content: space-between;
  flex-direction: column;

  > img {
    width: 100%;
    height: 100%;
  }
  > a {
    position: relative;
  }
`;

export const RegisterContainer = styled.div`
  min-width: 55vw;
  height: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: linear-gradient(
    to bottom,
    var(--secondary),
    var(--primary)
  );
  > h1 {
    margin-top: 30px;
    color: white;
    font-size: 38px;
    font-weight: 400;
    letter-spacing: 1.2px;
  }
`;

export const RegisterForm = styled.form`
  width: 100%;
  height: 85%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  > input:not(:placeholder-shown) + label,
  > input:focus + label {
    color: white;
  }

  > select {
    border: 0;
    padding-left: 15px;
    border-radius: 3px;
    margin-top: 15px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #ededed;
    width: 80%;
    height: 50px;
    font-size: 16px;
    border-radius: 30px;
  }

  > span {
    width: 100%;
    height: 75px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > a {
      color: white;
      font-size: 22px;

      text-decoration: none;
      opacity: 80%;
      font-weight: 400;
      width: fit-content;
      height: fit-content;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export const ButtonNext = styled.button`
  width: 120px;
  height: 50px;
  color: white;
  font-size: 26px;
  background: none;
  border: none;
  font-weight: 200;

  text-transform: uppercase;
`;
