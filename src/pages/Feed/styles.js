import styled, { keyframes } from "styled-components";
import px2vw from "../../utils/px2vw";
import Waves from "../../assets/waves.svg";

const CardAnimation = keyframes`
  0%{
    opacity: 0;
    transform: scale(0.80);
    
  }
  50% {
    transform: scale(1);
    
  }
  100%{
    opacity: 1;
  }
`;

export const NavigationBar = styled.nav`
  position: fixed;
  z-index: 99;
  transition: 0.7s;
  width: 100%;
  height: 75px;

  background-color: #ffffff;

  display: flex;
  justify-content: space-around;
  align-items: center;

  box-shadow: 5px 5px 10px #00000020;

  > img {
    width: 75px;
    height: inherit;
    /* border-radius: 50px; */
    position: absolute;
    right: 0;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  > label {
    height: inherit;

    display: flex;
    align-items: center;
    justify-content: space-between;
    > img {
      width: 60px;
      height: 60px;
      margin-right: 15px;
      border-radius: 50px;
    }
  }

  > ol {
    width: fit-content;
    /* background-color: blue; */
    @media (min-width: 1024px) {
      font-size: ${px2vw(16)};
    }

    @media screen and (max-width: 468px) {
      display: none;
    }

    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > li {
      color: var(--primary);
      margin-right: 10px;
      text-transform: capitalize;
      user-select: none;
      transition: 0.5s;

      :hover {
        cursor: pointer;
        border-bottom: var(--secondary) 1px solid;
      }
    }
  }
`;

export const SearchBar = styled.div`
  position: relative;

  @media (min-width: 1024px) {
    width: ${px2vw(800)};
  }
  overflow: hidden;
  height: 60%;
  display: flex;
  align-items: center;
  border-radius: 30px;
  background-color: var(--gray);
  /* background: blue; */

  > input {
    width: 100%;
    height: 100%;
    padding-left: 25px;
    padding-right: 60px;
    font-size: 24px;
    background: none;
    background-color: none;
    border: none;
    overflow: hidden;
    border-radius: 50px;

    :focus {
      border: solid 3px var(--primary);
    }
  }

  > img {
    @media (min-width: 32px) {
      width: ${px2vw(64)};
    }
    height: 32px;
    position: absolute;
    right: 25px;
    user-select: none;
  }
`;

export const FeedContainer = styled.article`
  width: 100%;
  min-height: 500px;
  padding: 0 25px;
  padding-top: 100px;
  transition: 0.9s;

  display: flex;
  justify-content: flex-start;
  align-content: space-between;
  gap: 30px;
  align-items: stretch;
  flex-wrap: wrap;
  /* flex-direction: column; */

  /* display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 2fr 2fr;
  grid-auto-rows: auto; */

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ServiceCard = styled.div`
  animation: ${CardAnimation} 0.4s ease-in;

  position: relative;
  transition: 2s;
  background-image: url(${Waves});
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: white;

  width: 600px;
  height: fit-content;

  @media screen and (max-width: 768px) {
    width: 500px;
  }
  @media screen and (max-width: 468px) {
    width: 300px;
  }

  height: fit-content;

  box-shadow: 5px 5px 10px #00000020;
  border-radius: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* position: relative; */

  /* background-color: black; */

  > p {
    width: 90%;
    height: fit-content;
    text-align: justify;
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: 500;
    color: var(--font);
    /* background-color: var(--white); */
    padding: 0 10%;
    border-radius: 15px;
  }
  > label {
    width: 90%;
    height: fit-content;

    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 768px) {
      justify-content: center;
      > button {
        width: 80%;
        font-size: 20px;
        /* background-color: blue; */
      }
    }

    > button {
      @media screen and (max-width: 768px) {
        width: 80%;
        font-size: 18px;
        border-bottom: solid 2px var(--primary);
        /* background-color: blue; */
      }

      width: fit-content;
      height: fit-content;
      padding: 5px;

      right: 0;

      height: 50px;
      font-size: 24px;
      background: none;
      color: var(--dark);
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
      margin-bottom: 30px;
      border: none;
      padding: 0px 15px;

      :hover {
        background-color: var(--secondary);
        color: var(--white);
      }
    }
  }
`;

export const ImageTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  border-radius: 15px 15px 0px 0px;
  margin-bottom: 60px;
  margin-top: 50px;
  gap: 15px;

  /* background-color: pink; */

  > label {
    flex: 5;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    > h1 {
      /* background-color: rosybrown; */
      text-align: start;
      font-size: 28px;
      font-weight: 500;
      @media screen and (max-width: 768px) {
        font-size: 24px;
      }
      color: var(--white);
      overflow: hidden;
      display: flex;
      align-items: center;
    }

    > h4 {
      /* background-color: plum; */
      font-weight: 500;
      text-transform: capitalize;
      color: var(--white);
      font-size: 18px;

      @media screen and (max-width: 768px) {
        font-size: 12px;
      }
      user-select: none;

      :hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  > div {
    /* background-color: purple; */
    /* height: 100%; */
    width: 20%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    text-align: start;
    > img {
      width: 100%;
      height: 100%;
      margin-bottom: 15px;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        width: 70px;
        height: 70px;
      }

      border-radius: 100%;
    }
  }
`;

export const Urgency = styled.div`
  width: 160px;
  height: 50px;
  /* background-color: #fff; */
  user-select: none;

  position: absolute;
  top: 0;
  right: 0;

  margin-right: 5px;
  margin-top: 5px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  > img {
    width: 50px;
    height: 50px;
  }

  > h2 {
    text-transform: uppercase;
  }
`;

export const CardImage = styled.img`
  width: 75%;
  /* padding: 15px; */
  border: solid var(--gray) 3px;
  height: fit-content;
  margin-bottom: 15px;
`;
