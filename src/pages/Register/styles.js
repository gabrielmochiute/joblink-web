import styled, { keyframes } from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background-color: #e5e5e5;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterAnimation = keyframes`
  0%{
    top: -450px;
    opacity: 0;
    /* transform: scale(0.5); */
  }
  100%{
    top: 0px;
    opacity: 1;
    /* transform: scale(1); */
  }
`;

export const ModalContainer = styled.section`
  animation: ${RegisterAnimation} 0.5s;
  width: 90%;
  height: 90%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 19;

  overflow-x: auto;

  background-color: white;
  box-shadow: 2px 5px 10px #00000060;
  border-radius: 4px;

  position: relative;
`;

export const BannerRegister = styled.div`
  width: 50vw;
  height: 100%;
  position: relative;
  /* background-color: burlywood; */

  /* display: flex; */
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    display: none;
  }

  > img {
    width: 100%;
    height: 100%;
  }
  > a {
    position: absolute;
    bottom: 25px;
    left: 0px;
    margin: 15px;
    text-decoration: none;
    color: transparent;
    background-image: linear-gradient(
      to bottom,
      var(--primary),
      var(--secondary)
    );
    -webkit-background-clip: text;
    font-size: 20px;
    transition: all 0.3s;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  > h1 {
    position: absolute;
    width: 100%;
    text-align: center;
    color: transparent;
    font-weight: 600;
    font-size: 28px;
    margin-top: 15px;
    text-transform: uppercase;
    user-select: none;
    letter-spacing: 1.5px;
    background-image: linear-gradient(
      to right,
      var(--primary),
      var(--secondary)
    );
    -webkit-background-clip: text;
  }
`;

export const RegisterContainer = styled.div`
  min-width: 55vw;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow: hidden;
  }
  height: 100%;
  overflow: hidden;
  padding-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: linear-gradient(to right, var(--secondary), var(--primary));
  > h1 {
    margin-top: 30px;
    color: white;
    font-size: 38px;
    font-weight: 400;
    letter-spacing: 1.2px;
  }
`;

export const RegisterForm = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  > input:not(:placeholder-shown) + label,
  > input:focus + label {
    color: white;
  }

  > select {
    border: 0;
    padding-left: 15px;
    border-radius: 3px;
    margin-top: 15px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #ededed;
    width: 80%;
    height: 50px;
    font-size: 16px;
    border-radius: 30px;
  }

  > span {
    width: 100%;
    height: 75px;
    padding: 0 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const InputRow = styled.div`
  width: 90%;
  /* background-color: red; */

  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 48%;
  }

  > select {
    width: 48%;
    height: 50px;

    margin-top: 15px;
    border: 0;
    border-radius: 15px;
    padding-left: 15px;
    padding-right: 15px;

    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #ededed;
  }
`;

export const ButtonNext = styled.button`
  width: 130px;
  height: 50px;
  color: white;
  font-size: 26px;
  background: none;
  border: none;
  font-weight: 200;
  position: absolute;
  bottom: 0px;
  right: 0px;
  margin: 15px;

  text-transform: uppercase;
  transition: all 0.6s;

  :disabled {
    opacity: 0.2;
  }

  :hover {
    text-decoration: underline;
  }
`;

export const ClientOrFreelancer = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 0 25px;
  /* background-color: #fff; */
  > h1 {
    font-size: 32px;
    color: var(--white);
    font-weight: 400;
    margin-bottom: 15px;
  }

  > ul {
    /* background-color: #fff; */
    list-style: inside;
    list-style-type: none;
    color: var(--white);

    > li {
      margin-bottom: 15px;
    }
  }
`;

export const FreelancerType = styled.div`
  width: 100%;
  min-height: 300px;
  overflow: auto;
  padding: 15px;

  > h1 {
    color: var(--white);
    font-weight: 400;
    font-size: 38px;
    margin-bottom: 25px;
  }

  > select {
    width: 90%;
    height: 50px;
    border-radius: 15px;
    font-size: 24px;
    color: var(--font);
    padding: 0px 10px;
  }
`;

const upAnimation = keyframes`
  0%{
    opacity: 0;
    transform: translateY(0);
  }
  50%{
    opacity: 1;
  }
  100%{
    transform: translateY(-800px) rotate(960deg);
  }
`;

export const Squares = styled.ul`
  > li {
    width: 40px;
    height: 40px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    opacity: 0.6;
    display: block;
    position: absolute;
    bottom: -40px;
    animation: ${upAnimation} 1s infinite;
    /* animation-direction: alternate; */
  }
`;
