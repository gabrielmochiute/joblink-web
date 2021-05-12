import styled, { keyframes } from "styled-components";
import Background from "../../assets/background.svg";

const LoginAnimation = keyframes`
  0%{
    left: -450px;
    opacity: 0;
    /* transform: scale(0.01) rotate(90deg); */
  }
  100%{
    left: 0px;
    opacity: 1;
    /* transform: scale(1) rotate(0deg); */
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-image: url(${Background});
  background-position: bottom;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.section`
  animation: ${LoginAnimation} 0.5s;
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

  box-shadow: 5px 10px 10px #00000020;
`;

export const BannerLogin = styled.div`
  transition: 0.7s;
  width: 55vw;
  height: 100%;

  background-color: burlywood;
  visibility: visible;
  opacity: 100;

  @media screen and (max-width: 768px) {
    visibility: hidden;
    opacity: 0;
    position: absolute;
  }
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

export const FormLogin = styled.form`
  width: 45vw;
  height: 100%;
  /* background-color: blue; */

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 32px;
    font-weight: bold;
    z-index: 19;
    position: relative;
  }

  > span {
    width: 80%;
    height: 100px;
    /* background-color: violet; */
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 20px;

    > a {
      transition: all 0.6s;
      color: var(--darkGray);
      /* background-color: blue; */
      display: flex;
      justify-content: center;
      align-items: flex-end;

      text-decoration: none;
      opacity: 80%;
      font-weight: 400;
      width: fit-content;
      height: fit-content;

      :hover {
        transform: scale(1.025);
        text-decoration: underline;
      }
    }
  }
`;

export const Circle = styled.div`
  background-color: blue;
  width: 75px;
  height: 75px;
  z-index: 18;
  border-radius: 100%;
  background-image: linear-gradient(to right, var(--secondary), var(--primary));
  position: relative;
  bottom: -25px;
  right: -60px;
`;

export const Button = styled.button`
  width: 200px;
  height: 45px;

  border-radius: 30px;

  font-size: 18px;
  font-weight: 200;
  background: linear-gradient(to right, var(--secondary), var(--primary));
  transition: 0.1s ease-in;
`;

export const InputContainerHolder = styled.div`
  /* background-color: blue; */

  width: 100%;
  height: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  > div {
    > input {
      box-shadow: 2px 5px 10px #00000040;
      border-radius: 15px;
    }
  }
`;
