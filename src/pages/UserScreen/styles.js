import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
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

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  background-color: var(--white);
  padding: 15px 30px;
  border-bottom: 3px solid var(--font);

  > img {
    width: 50px;
    height: 50px;
  }

  > label {
    height: 100%;
    /* background-color: red; */

    display: flex;
    justify-content: center;
    align-items: flex-end;

    font-size: 28px;
    font-weight: 500;

    text-transform: uppercase;
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

export const ProfilePosts = styled.div`
  width: 100%;
  height: 300px;
  /* background-color: blue; */
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
