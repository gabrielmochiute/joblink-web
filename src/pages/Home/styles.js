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
  /* padding: 0px ; */
`;

export const Introduction = styled.section`
  width: 100%;
  min-height: 500px;
  overflow: hidden;
  /* background-color: red; */
  padding: 50px 5%;

  .joblink {
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
  width: 30vw;
  visibility: visible;
  opacity: 1;
  transition: 0.6s ease-in;
  @media screen and (max-width: 900px) {
    visibility: hidden;
    opacity: 0;
  }
  height: 600px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
  background-image: url(${Circles});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: right;

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  > div {
    padding-top: 15px;
    width: fit-content;
    /* background-color: brown; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    > h1,
    h2 {
      width: 100%;
      font-size: 24px;
      font-weight: 500;
      /* background-color: cadetblue; */
      > a {
        text-decoration: none;
      }
    }

    > h1 {
      > a {
        color: var(--white);
      }
    }

    > h2 {
      background-color: var(--white);

      > a {
        color: var(--primary);
        text-decoration: none;
      }
      padding: 0px 15px;
      border-radius: 15px;
    }
  }
`;

export const About = styled.section`
  width: 90%;
  height: fit-content;
  /* overflow: hidden; */
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0px 5%; */

  > div {
    width: 60vw;
    height: 90%;
    /* background-color: cadetblue; */
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;

    > h1 {
      font-weight: 500;
      font-size: 64px;
      color: var(--primary);
      margin-bottom: 25px;
    }

    > p {
      font-size: 34px;
      text-align: justify;
      color: var(--font);
    }
  }

  .lottieHome {
    width: 40vw;
    height: 100%;
  }
`;

export const GradientLine = styled.div`
  width: 90%;
  height: 5px;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  margin-bottom: 15px;
  border-radius: 15px;
  /* margin: 0px 5%; */
`;

export const OurServices = styled.div`
  width: 90%;
  min-height: 500px;
  overflow: hidden;
  /* background-color: rebeccapurple; */
  margin-bottom: 150px;

  display: flex;
  flex-direction: column;

  > h1 {
    font-weight: 500;
    text-align: center;
    font-size: 42px;
    margin-bottom: 25px;
    color: var(--font);
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
    margin-top: 25px;
  }
`;

export const Cards = styled.div`
  width: 300px;
  height: fit-content;
  /* background-color: royalblue; */
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > img {
    width: 90%;
  }

  > h1 {
    font-weight: 500;
    margin-bottom: 25px;
    color: var(--font);
  }

  > p {
    font-size: 24px;
    color: var(--font);
  }
`;

export const OurApp = styled.section`
  width: 100%;
  height: 500px;
  background-color: var(--primary);
  /* position: relative; */

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > div {
    padding: 0px 30px;
    height: 100%;
    /* background-color: salmon; */
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    > h1 {
      color: var(--white);
      font-size: 38px;
      font-weight: 600;
      /* background-color: salmon; */
      margin-bottom: 50px;
    }
    > label {
      display: flex;
      justify-content: start;
      /* background-color: salmon; */
      gap: 15px;
      > img {
        width: 40%;
      }
    }
  }

  .appImg {
    height: 120%;
  }
`;

export const Colaboradores = styled.div`
  width: 100%;
  min-height: 500px;
  overflow: hidden;
  padding: 15px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  gap: 25px;

  > div {
    width: 90%;
    /* background-color: silver; */
  }

  .title {
    width: fit-content;
    margin-bottom: 25px;
    /* background-color: silver; */

    > h1 {
      width: fit-content;
      font-size: 50px;
      color: var(--font);
      /* background-color: salmon; */
    }

    > div {
      width: 50%;
      height: 3px;
      background: linear-gradient(to right, var(--primary), var(--secondary));
      border-radius: 15px;
    }
  }

  .colaboradores {
    width: 100%;
    height: 500px;
    /* background-color: silver; */
    justify-content: center;

    > label {
      margin-bottom: 50px;
      > img {
        width: fit-content;
        height: fit-content;
        text-align: center;
      }
      display: flex;
      /* flex-wrap: wrap; */
      justify-content: center;
      align-items: center;
      gap: 50px;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  min-height: 600px;
  overflow: hidden;
  text-transform: uppercase;

  color: var(--white);
  background-color: var(--font);

  display: flex;
  justify-content: baseline;
  align-items: center;
  flex-direction: column;

  > h1 {
    border-bottom: 2px solid var(--primary);
    /* background-color: tomato; */
    width: 90%;
    height: fit-content;
    margin-top: 15px;
  }

  .footerContainer {
    width: 90%;
    min-height: 500px;
    overflow: hidden;
    /* background-color: skyblue; */

    display: flex;
    justify-content: space-between;

    > ul {
      width: 50%;
      height: fit-content;
      /* background-color: thistle; */
      padding-top: 15px;

      > li {
        width: 100%;
        height: 40px;
        text-transform: capitalize;
        font-size: 24px;
      }
    }

    .socialNetworks {
      width: 50%;
      height: 500px;
      /* background-color: tomato; */
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      flex-direction: column;
      padding-top: 15px;

      .socialLogos {
        > img {
          width: 75px;
          height: 75px;
          margin-left: 15px;
        }
      }

      .LogoServiceLeaders {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    }
  }
`;

export const Copyright = styled.div`
  background-color: #222222;
  width: 100%;
  height: 30px;
  text-align: center;
  color: var(--white);

  > h3 {
    font-weight: 300;
    font-size: 24px;
  }
`;
