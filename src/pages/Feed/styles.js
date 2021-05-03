import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const NavigationBar = styled.nav`
  width: 100vw;
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
  }

  > label {
    height: inherit;

    display: flex;
    align-items: center;
    justify-content: space-between;
    > img {
      width: 60px;
      height: 60px;
      border-radius: 50px;
    }
  }

  > ol {
    width: fit-content;
    /* background-color: blue; */
    @media (min-width: 1024px) {
      font-size: ${px2vw(16)};
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
  /* background-color: blue; */
`;

export const ServiceCard = styled.div`
  margin-top: 15px;
  margin-left: 15px;
  width: 600px;
  min-height: 600px;
  background-color: var(--white);
  box-shadow: 5px 5px 10px #00000020;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* position: relative; */

  /* background-color: black; */

  > p {
    width: 80%;
    height: fit-content;
    text-align: justify;
  }

  > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 200px;
    /* background-color: blue; */

    > h1 {
      font-size: 38px;
      overflow: hidden;
    }

    > img {
      width: 100px;
      height: 100px;
      border-radius: 100%;
    }
  }
`;

export const Wave = styled.div``;
