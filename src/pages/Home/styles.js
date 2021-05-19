import styled from "styled-components";
import Circles from "../../assets/home_circles.svg";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 900px;
  overflow: hidden;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Introduction = styled.section`
  width: 100%;
  min-height: 1000px;
  overflow: hidden;
  /* background-color: red; */
  padding: 50px 50px;

  > div {
    /* padding-top: 50px; */
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    > h1,
    h2,
    h3 {
      width: 700px;
      font-size: 64px;
      /* background-color: green; */
      font-weight: 500;
    }
    > h2 {
      color: var(--primary);
    }
    > h3 {
      font-size: 34px;
      font-weight: 300;
      margin-top: 15px;
      margin-bottom: 25px;
    }
    > label {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      > a {
        text-decoration: none;
        color: var(--font);
        font-size: 18px;

        > button {
          width: 200px;
          height: 50px;

          color: var(--font);
          text-decoration: none;
          font-size: 24px;

          background-color: none;
          background-image: none;
          background: none;

          border: solid 2px var(--font);
          border-radius: 15px;

          cursor: pointer;
          transition: 0.8s;
          :hover {
            border-color: var(--secondary);
            color: var(--secondary);
          }
        }
      }
    }
  }
`;

export const LoginRegister = styled.div`
  width: 40vw;
  visibility: visible;
  opacity: 1;
  transition: 0.6s ease-in;
  @media screen and (max-width: 900px) {
    visibility: hidden;
    opacity: 0;
  }
  height: 1000px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
  background-image: url(${Circles});
  /* background-color: green; */
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: right;
`;

export const About = styled.section`
  width: 100%;
  height: 500px;
  background-color: red;
`;
