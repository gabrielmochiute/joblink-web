import styled, { keyframes } from "styled-components";
import ChatBackground from "../../assets/ChatBackground.svg";

export const MainAnimation = keyframes`
  0%{
    opacity: 0;
  }
  100% {
    opacity: 1;
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
  animation: ${MainAnimation} 0.9s ease-in;

  width: 90vw;
  height: 90vh;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const ProfileBar = styled.nav`
  width: 95%;
  height: 100px;
  overflow: hidden;
  /* background-color: burlywood; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  position: relative;

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

  > h3 {
    color: var(--secondary);
    position: absolute;
    right: 0;
    bottom: 0;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.2s;
    padding: 5px 10px;

    :hover {
      color: var(--white);
      background-color: var(--secondary);
      border-radius: 50px;
    }

    :active {
      background-color: var(--white);
    }
  }
`;

export const GradientLine = styled.div`
  width: 95%;
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

export const PriceModal = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: linear-gradient(to bottom, var(--white) 50%, var(--font) 50%);
  > label {
    > h1,
    h2 {
      font-weight: 400;
      text-align: center;
      color: var(--white);
    }

    > h1 {
      color: var(--primary);
      font-weight: 500;
    }
  }

  > form {
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    > label {
      display: flex;
      justify-content: center;
      align-items: center;

      gap: 15px;

      > h1 {
        font-weight: 400;

        text-transform: capitalize;
        font-size: 28px;
        color: var(--white);

        user-select: none;
      }
      > input {
        width: 25%;
        height: 50px;
        background: none;
        background-color: none;

        padding: 0px 15px;

        border: none;

        border-bottom: solid 2px var(--secondary);

        font-size: 28px;

        color: var(--white);
      }
    }

    > button {
      color: var(--secondary);
      background: none;
      border: none;

      text-transform: uppercase;
      font-weight: 600;
      font-size: 32px;

      letter-spacing: 2px;

      padding: 0px 25px;

      margin: 15px 0px;

      :hover {
        background-color: var(--secondary);
        color: var(--white);
        border-radius: 20px;
      }
    }
  }
`;

export const Feedback = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: linear-gradient(to bottom, var(--white) 50%, var(--font) 50%);

  padding: 15px;

  #textContainer {
    width: 45%;
    height: 100%;
    position: relative;
    /* background-color: aqua; */
    color: var(--font);

    display: flex;
    flex-direction: column;
    gap: 20px;

    > h1 {
      margin-top: 20px;
      font-size: 38px;
      font-weight: 500;

      > span {
        color: var(--primary);
      }
    }

    > h4 {
      color: var(--darkGray);
      font-weight: 400;
    }

    #inputFeedback {
      display: flex;
      flex-direction: column;

      > h2 {
        font-weight: 400;
      }

      > input {
        border: none;
        border-bottom: solid 2px var(--secondary);
        background: none;

        font-size: 20px;
        padding: 5px 10px;
      }
    }

    #stars {
      display: flex;
      gap: 15px;

      font-size: 32px;
      > ul {
        display: flex;
        list-style: none;

        > li {
          width: 30px;
        }
      }

      > h4 {
        font-weight: 400;
        color: var(--darkGray);
        font-size: 24px;
      }
    }

    #warning {
      position: absolute;
      bottom: 0px;
      left: 0px;

      display: flex;
      color: var(--white);
      align-items: center;
      justify-content: center;
    }
  }

  #imageContainer {
    width: 55%;
    height: 100%;
    /* background-color: blue; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;

    > h1 {
      position: absolute;
      top: 0px;
      right: 0px;
      color: var(--secondary);
      text-transform: uppercase;
      font-style: italic;
      font-size: 18px;
    }

    > button {
      background: none;
      border: none;
      position: absolute;
      bottom: 0px;
      right: 0px;
      color: var(--secondary);
      text-transform: uppercase;

      font-weight: 500;
      font-size: 28px;

      padding: 2px 15px;

      :hover {
        background-color: var(--secondary);
        color: var(--white);
        border-radius: 20px;
      }
    }
  }
`;
