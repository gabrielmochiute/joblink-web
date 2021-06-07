import styled, { keyframes } from "styled-components";
import ChatBackground from "../../assets/ChatBackground.svg";

export const MainAnimation = keyframes`
  0%{
    opacity: 0;
    position: absolute;
    top: -500px;
  }
  100% {
    opacity: 1;
    position: absolute;
    top: 0px;
  }
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${ChatBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MainContainer = styled.div`
  box-shadow: 5px 5px 5px 5px #00000040;
  animation: ${MainAnimation} 0.6s ease-out;

  width: 90vw;
  height: 90vh;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const ProfileBar = styled.nav`
  width: 100%;
  height: 15vh;
  overflow: hidden;
  /* background-color: burlywood; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 0px 25px;
  margin-bottom: 15px;

  > img {
    width: 50px;
    height: 50px;
    background-color: var(--gray);
    border-radius: 100%;
    padding: 8px;
    cursor: pointer;
  }

  > label {
    > h1 {
      color: var(--primary);
      font-size: 26px;
      font-weight: 500;
    }

    > h2 {
      color: var(--secondary);
      font-weight: 500;
      font-size: 20px;
    }
  }
`;

export const GradientLine = styled.div`
  width: 94%;
  height: 3px;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  border-radius: 25px;
  margin: 0 auto;
`;

export const MessagesContainer = styled.div`
  width: 100%;
  min-height: 300px;
  max-height: 80vh;
  overflow: auto;
  padding: 15px 3%;
`;

export const YourMessage = styled.div`
  width: fit-content;
  min-height: 60px;
  margin-left: auto;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  align-items: flex-start;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  border-radius: 50px 50px 0px 50px;

  > p {
    min-width: 100px;
    max-width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 15px 25px;
    overflow: hidden;
    color: var(--white);
    text-align: justify;
    font-weight: 350;
    font-size: 26px;
  }
`;

export const OtherUserMessage = styled.div`
  width: fit-content;
  min-height: 60px;
  overflow: hidden;
  margin-right: auto;
  margin-bottom: 15px;
  border-radius: 15px;
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;

  > p {
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 200px;
    max-width: 600px;

    padding: 15px 25px;

    min-height: 50px;
    border-radius: 50px;
    overflow: hidden;
    background-color: var(--gray);
    color: var(--font);
    text-align: justify;
    font-weight: 350;
    font-size: 26px;
  }

  > img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }
`;

export const SendMessageContainer = styled.form`
  width: 100%;
  height: 8vh;
  /* background: linear-gradient(to right, var(--primary), var(--secondary)); */
  background-color: var(--gray);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  > img {
    width: 60px;
  }

  > label {
    width: 90%;
    height: 90%;
    position: relative;

    display: flex;
    align-items: center;

    > input {
      transition: border 0.1s, border-color 4s;
      padding: 0 25px;
      color: var(--font);
      font-size: 32px;
      width: 100%;
      height: 90%;
      border-radius: 50px;
      border: none;
      background-color: #ffffff50;

      /* :focus {
        border-color: white;
        border: solid 3px;
      } */

      /* Mudar a cor do placeholder em todos os navegadores*/

      /* ::-webkit-input-placeholder {
        color: #ffffff90;
      }

      :-moz-placeholder {
        
        color: #ffffff90;
      }

      ::-moz-placeholder {
        
        color: #ffffff90;
      }

      :-ms-input-placeholder {
        color: #ffffff90;
      } */
    }

    > button {
      position: absolute;
      right: 0;

      width: 60px;
      height: 60px;
      border-radius: 50px;
      border: none;

      /* padding: 15px; */
      > img {
        width: 75%;
        height: 75%;
      }
      /* background-color: #ffffff30;
      background-position: center;
      background-repeat: no-repeat; */

      background: linear-gradient(to right, var(--primary), var(--secondary));
    }
  }
`;
