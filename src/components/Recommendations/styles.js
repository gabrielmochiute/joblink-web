import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  background-color: #00000060;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const ModalContainer = styled.section`
  z-index: 100;
  width: 80vw;
  height: 95vh;

  overflow-x: auto;

  background-color: white;
  border-radius: 5px;

  position: relative;

  transition: 0.4s;

  display: flex;
  align-items: center;
  justify-content: center;

  #firstColumn {
    width: 50%;
    height: 100%;
    background-color: var(--font);

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    #yourPost,
    #lottie {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      width: 100%;
    }

    #yourPost {
      height: 60%;

      > h1 {
        width: 70%;
        color: var(--white);
        font-weight: 400;
        border-left: solid 3px var(--white);
        padding-left: 15px;
        font-size: 38px;
        @media screen and (max-width: 1440px) {
          font-size: 24px;
        }

        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }

      #post {
        width: 70%;
        height: 80%;
        background-color: #fff;
      }
    }

    #lottie {
      height: 40%;
    }
  }
  #secondColumn {
    width: 50%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    /* background-color: var(--darkGray); */

    position: relative;
    > h1 {
      position: absolute;
      top: 5px;
      right: 15px;

      width: 80%;
      text-align: end;
      color: var(--secondary);
      text-transform: uppercase;
      font-style: italic;
      font-size: 20px;
      font-weight: 500;

      @media screen and (max-width: 1440px) {
        font-size: 16px;
      }

      @media screen and (max-width: 768px) {
        font-size: 8px;
      }
    }

    #recommendations {
      width: 80%;
      height: 90%;
      background-color: var(--white);
      border: solid 1px #00000050;
    }
  }
`;
