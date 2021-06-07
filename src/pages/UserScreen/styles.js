import styled from "styled-components";
import Waves from "../../assets/waves.svg";

export const Banner = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
`;

export const ErrorScreen = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--white);
  > h1 {
    font-weight: 100;
    font-size: 42px;
    margin-bottom: 15px;
  }
  > h2 {
    font-weight: 100;
    font-size: 24px;
    > a {
      color: var(--white);
    }
  }
`;

export const ProfilePicture = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 100%;
  border: solid 3px var(--white);
  position: absolute;
  bottom: -100px;
  box-shadow: 0px 5px 5px #00000060;
  z-index: 19;
`;

export const ProfileContent = styled.div`
  height: 350px;
  width: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  background-color: var(--white);
  padding: 15px 30px;
  /* border-bottom: 3px solid var(--font); */

  > img {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 15px;
    left: 15px;
  }

  > button {
    height: fit-content;
    background: none;
    border: none;

    color: var(--font);

    display: flex;
    justify-content: center;
    align-items: flex-end;

    font-size: 28px;
    font-weight: 500;

    text-transform: uppercase;

    position: absolute;
    bottom: 15px;
    right: 15px;

    cursor: pointer;
    transition: 0.6s;

    :hover {
      color: var(--secondary);
    }
  }

  > div {
    height: 300px;
    padding-top: 100px;
    text-align: center;

    > h1 {
      font-weight: 400;
      margin-bottom: 5px;
    }
    > h2 {
      font-weight: 200;
    }
  }
`;

export const SecondaryLine = styled.div`
  width: 90%;
  height: 3px;
  background-color: var(--secondary);
  border-radius: 25px;
  margin: 0 auto;
`;

export const ProfilePosts = styled.div`
  width: 100%;
  height: 700px;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 15px;
  /* background-color: blue; */
`;

export const Card = styled.div`
  width: 700px;
  height: 800px;

  position: relative;
  transition: 2s;
  background-image: url(${Waves});
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: white;

  background-color: var(--white);
  box-shadow: 0px 0px 5px 2px #00000050;
`;
