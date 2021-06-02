import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const ProfileBar = styled.nav`
  width: 100%;
  height: 10vh;
  overflow: hidden;
  /* background-color: burlywood; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 0px 25px;
  margin-bottom: 15px;

  > img {
    width: 50px;
    height: 50px;
    background-color: var(--gray);
    border-radius: 100%;
    padding: 8px;
    cursor: pointer;
  }

  > label {
    > h1 {
      color: var(--primary);
      font-size: 26px;
      font-weight: 500;
    }

    > h2 {
      color: var(--secondary);
      font-weight: 500;
      font-size: 20px;
    }
  }
`;

export const GradientLine = styled.div`
  width: 94%;
  height: 3px;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  border-radius: 25px;
  margin: 0 auto;
`;

export const MessagesContainer = styled.div`
  width: 100%;
  min-height: 300px;
  max-height: 80vh;
  overflow: auto;
  padding: 15px 3%;
`;

export const YourMessage = styled.div`
  width: fit-content;
  min-height: 60px;
  margin-left: auto;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: flex-start;

  > p {
    min-width: 200px;
    max-width: 600px;

    padding: 0px 15px;
    padding-bottom: 15px;
    min-height: 50px;
    border-radius: 15px;
    overflow: hidden;
    background-color: var(--primary);
    color: var(--white);
    text-align: justify;
    font-weight: 500;
    font-size: 26px;
  }

  > img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }
`;

export const OtherUserMessage = styled.div`
  width: fit-content;
  min-height: 60px;
  overflow: hidden;
  margin-right: auto;
  margin-bottom: 15px;
  border-radius: 15px;
  display: flex;
  gap: 15px;
  justify-content: space-between;

  > p {
    min-width: 200px;
    max-width: 600px;

    padding: 0px 15px;
    padding-bottom: 15px;
    min-height: 50px;
    border-radius: 15px;
    overflow: hidden;
    background-color: var(--gray);
    color: var(--font);
    text-align: justify;
    font-weight: 500;
    font-size: 26px;
  }

  > img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }
`;

export const SendMessageContainer = styled.div`
  width: 100%;
  height: 10vh;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  border-radius: 50px 50px 0px 0px;
`;
