import styled, { keyframes } from "styled-components";
import Background from "../../assets/wave.png";

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

const WaveAnimation = keyframes`
  0%{
    background-position-x: 0; 
  }
  0%{
    background-position-x: 1000px; 
  }
`;

const WaveAnimation2 = keyframes`
  0%{
    background-position-x: 0; 
  }
  0%{
    background-position-x: -1000px; 
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;

  background-color: #ffffff66;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wave = styled.section`
  > div {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-image: url(${Background});
    background-size: 1000px 100px;
  }

  .wave1 {
    animation: ${WaveAnimation} 30s linear infinite;
    z-index: 100;
    opacity: 1;
    animation-delay: 0s;
    bottom: 0;
  }
  .wave2 {
    animation: ${WaveAnimation2} 15s linear infinite;
    z-index: 99;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 10px;
  }
  .wave3 {
    animation: ${WaveAnimation2} 30s linear infinite;
    z-index: 98;
    opacity: 0.2;
    animation-delay: -2s;
    bottom: 15px;
  }
  .wave4 {
    animation: ${WaveAnimation2} 5s linear infinite;
    z-index: 97;
    opacity: 0.7;
    animation-delay: -2s;
    bottom: 20px;
  }
`;

export const ModalContainer = styled.section`
  animation: ${LoginAnimation} 0.5s;
  width: 90vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;

  overflow-x: auto;

  background-color: white;
  border-radius: 4px;

  position: relative;

  box-shadow: 5px 10px 10px #00000020;
`;

export const BannerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  transition: 0.7s;
  width: 55vw;
  height: 100%;
  user-select: none;

  /* background-color: burlywood; */
  visibility: visible;
  opacity: 100;

  @media screen and (max-width: 768px) {
    visibility: hidden;
    opacity: 0;
    position: absolute;
  }
`;

export const FormLogin = styled.form`
  width: 45vw;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
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
    color: var(--font);
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
      box-shadow: 0px 2px 10px #00000040;
      border-radius: 15px;
    }
  }
`;
