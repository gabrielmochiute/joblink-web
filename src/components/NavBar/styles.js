import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const NavigationBar = styled.nav`
  position: fixed;
  z-index: 99;
  transition: 0.7s;
  width: 100%;
  height: 75px;

  background-color: var(--font);

  display: flex;
  justify-content: space-around;
  align-items: center;

  box-shadow: 5px 5px 15px #00000030;

  > img {
    width: 75px;
    height: inherit;
    /* border-radius: 50px; */
    /* position: absolute; */
    /* right: 0; */

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  > label {
    height: inherit;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > img {
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: 0.2s;

    :hover {
      box-sizing: content-box;
      border-bottom: 1px var(--white) solid;
      border-radius: 1px;
    }
  }

  #userBar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 15px;

    > label {
      position: relative;

      > img {
        width: 50px;
        height: 50px;
        margin-right: 15px;
        border-radius: 50px;
        cursor: pointer;
      }

      > div {
        width: 300px;
        background-color: brown;
        height: 150px;
      }
    }

    > h2 {
      font-weight: 300;
      color: var(--white);
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
        border-bottom: var(--white) 1px solid;
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
  background-color: #00000030;
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
    transition: 0.2s;

    :focus {
      border: solid 1px var(--white);
      border-radius: 15px;
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
