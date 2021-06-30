import styled from "styled-components";
import Waves from "../../assets/waves.svg";

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

    padding-top: 25px;

    #yourPost {
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      width: 100%;
      height: 100%;

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
    }
  }
  #secondColumn {
    position: relative;
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

      overflow: auto;
      z-index: 15;
    }

    > svg {
      position: absolute;
      bottom: 0px;
      z-index: 10;
    }
  }
`;

export const CardOwner = styled.div`
  width: 70%;
  height: fit-content;

  position: relative;
  transition: 0.3s;
  background-image: url(${Waves});
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;

  background-color: var(--white);
  box-shadow: 0px 0px 5px 2px #00000050;

  padding-bottom: 25px;
  margin-top: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1300px) {
    gap: 0px;
  }
  > p {
    margin-top: 15px;
    width: 100%;
    text-align: justify;
    padding: 0px 10%;
    font-size: 22px;
    color: var(--font);

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }

  #titleImage {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: var(--white);
    margin-bottom: 50px;
    margin-top: 10px;
    gap: 10px;

    img {
      width: 70px;
      height: 70px;
      border-radius: 100px;
      margin-left: 15px;
    }

    #titlePost {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      > h1 {
        font-weight: 400;
        font-size: 18px;
      }

      > h2 {
        font-weight: 400;
        font-size: 14px;
      }
    }
  }
`;

export const CardRecommendation = styled.div`
  width: 100%;
  height: 150px;
  /* background-color: darkblue; */
  margin-bottom: 15px;
  border-bottom: 2px solid #00000050;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  z-index: 15;

  #firstCardColumn,
  #secondCardColumn {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: solid blue 3px; */
  }

  #firstCardColumn {
    justify-content: center;
    > img {
      width: 75px;
      height: 75px;
      border-radius: 100%;
      border: solid 1px #00000050;
    }
    > h1 {
      font-weight: 300;
    }
  }

  #secondCardColumn {
    justify-content: space-between;
    padding: 15px 0px;
    #rating {
      display: flex;
      align-items: center;
      gap: 10px;
      > h1 {
        font-size: 36px;
        font-weight: 300;
      }

      > img {
        width: 40px;
        height: 40px;
      }
    }

    > button {
      width: fit-content;
      padding: 0px 10px;
      font-size: 28px;
      @media screen and (max-width: 1440px) {
        font-size: 16px;
      }

      @media screen and (max-width: 768px) {
        font-size: 12px;
      }
      border-radius: 50px;
    }
  }
`;
