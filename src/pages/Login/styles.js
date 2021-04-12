import styled, { keyframes } from "styled-components";


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
  width: 100vw;
  height: 100vh;

  background-color: #E5E5E5;

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

`;

export const BannerLogin = styled.div`
  width: 55vw;
  height: 100%;
  background-color: burlywood;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  >img {
    width: 100%;
    height: 100%;
  }
  >a {
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

  h1{
    font-size: 32px;
    font-weight: bold;
    z-index: 19;
    position: relative
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
`;

export const InputContainerHolder = styled.div`
  /* background-color: blue; */
  width: 100%;
  height: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;


  >span{
    width: 80%;
    height: 50px;
  
    display: flex;
    justify-content: flex-end;

    >a{
      color: var(--darkGray);
      /* background-color: blue; */

      text-decoration: none;
      opacity: 80%;
      font-weight: 400;
      width: fit-content;
      height: fit-content;
    }
  }
`;