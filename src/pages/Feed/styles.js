import styled from "styled-components";

export const NavigationBar = styled.nav`
  width: 100vw;
  height: 75px;
  background-color: #ffffff;

  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 5px 5px 10px #00000020;

  > img {
    width: 60px;
    height: 60px;
    border-radius: 50px;
  }
  > ol {
    width: fit-content;
    /* background-color: blue; */
    font-size: calc(12px + (8 / 1200) * 100 * 1vw);

    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > li {
      color: var(--primary);
      margin-right: 10px;
      text-transform: capitalize;
    }
  }
`;

export const SearchBar = styled.div`
  position: relative;
  min-width: 50%;
  height: 60%;
  overflow: auto;
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
  }

  > img {
    min-width: 32px;
    height: 32px;
    position: absolute;
    right: 25px;
    user-select: none;
  }
`;
