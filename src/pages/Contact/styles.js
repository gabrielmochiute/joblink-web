import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

export const MessagesContainer = styled.div`
  width: 100%;
  height: 500px;
  /* background-color: brown; */
  display: flex;
  justify-content: baseline;
  flex-direction: column;

  padding: 0px 2%;

  display: flex;
  flex-direction: column;
  gap: 15px;

  > label {
    width: fit-content;
    display: flex;
    flex-direction: column;

    > h1 {
      font-weight: 400;
      color: var(--secondary);
    }

    > div {
      width: 50%;
      height: 2px;
      background-color: var(--secondary);
    }
  }
`;

export const ContactBox = styled.div`
  width: 100%;
  min-height: 225px;
  overflow: hidden;
  background-color: var(--secondary);

  border-radius: 25px;
  color: var(--white);

  display: flex;
  justify-content: space-between;

  padding: 15px 25px;

  #titleName {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > label {
      display: flex;
      align-items: center;
      gap: 25px;

      > img {
        width: 125px;
        height: 125px;
        border-radius: 100%;
      }
      > div {
        > h1 {
          font-size: 44px;
          font-weight: 400;
        }

        > h2 {
          font-size: 36px;
          font-weight: 300;
        }
      }
    }

    > h2 {
      font-weight: 400;
    }
  }

  #contactButton {
    height: 100%;

    display: flex;
    align-items: flex-end;
    > button {
      background: none;
      border: none;
      border-bottom: 2px solid var(--white);
      font-size: 18px;
      text-transform: uppercase;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-weight: 600;
      letter-spacing: 2px;
      border-radius: 0px;

      :hover {
        background-color: var(--white);
        color: var(--secondary);
        border-radius: 15px;
      }
    }
  }
`;
