import {
  Overlay,
  ModalContainer,
  BannerRegister,
  RegisterContainer,
  RegisterForm,
  ButtonNext,
  InputRow,
  ClientOrFreelancer,
  FreelancerType,
  Squares,
} from "./styles";
import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Input from "../../components/input";
import banner from "../../assets/banner.jpg";
import { api } from "../../services/api";
import { signIn } from "../../services/security";
import Check from "../../components/Check";
import animationData from "../../lotties/lottie-register.json";
import Lottie from "react-lottie";
import ReactDom from "react-dom";

function Li() {
  return <li></li>;
}

function Register() {
  const history = useHistory();

  const [step, setStep] = useState(1);

  const [isFreelancer, setIsFreelancer] = useState(false);

  const squaresRef = useRef();

  const [register, setRegister] = useState({
    cpf: "",
    name: "",
    email: "",
    birthDate: "",
    password: "",
    gender: "",
    address: "",
  });

  const handleButton = (e) => {
    const { cpf, name, email, birthDate, password } = register;

    if (
      !cpf ||
      !name ||
      !email ||
      !birthDate ||
      !password ||
      !confirmPassword ||
      !validPassword()
    )
      return true;
    else return false;
  };

  const validPassword = () => register.password === confirmPassword;

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step < 2) return setStep(step + 1);
    if (step >= 2 && isFreelancer === false) {
      const formatedBirthDate = register.birthDate.split("-", 3);
      const newBirthDate = `${formatedBirthDate[2]}/${formatedBirthDate[1]}/${formatedBirthDate[0]}`;

      if (confirmPassword !== register.password)
        return alert("As senhas precisam ser iguais");

      try {
        const { cpf, name, email, password, gender, address } = register;

        const response = await api.post("/clients", {
          cpf,
          name,
          email,
          password,
          birth_date: newBirthDate,
          gender,
          address,
        });

        console.log(response.data);

        signIn(response.data);

        //Implementar a autorização

        history.push("/feed");
      } catch (error) {
        console.error(error);

        alert(error.response.data.error);
      }
    } else {
      if (!step === 3) setStep(step + 1);
      return;
    }
  };

  const handleInput = (e) => {
    setRegister({ ...register, [e.target.id]: e.target.value });
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const createSquare = () => {
    const urlSquares = document.querySelector("ul.squares");
    console.log(urlSquares);

    for (let index = 0; index < 21; index++) {
      const li = document.createElement("li");

      const random = (min, max) => Math.random() * (max - min) + min;

      const size = Math.floor(random(10, 120));
      const delay = random(5, 0.1);
      const position = random(1, 99);
      const duration = random(24, 12);

      li.style.width = `${size}px`;
      li.style.height = `${size}px`;
      li.style.bottom = `-${size}px`;

      li.style.left = `${position}%`;
      li.style.animationDelay = `${delay}s`;
      li.style.animationDuration = `${duration}s`;
      li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

      urlSquares.appendChild(li);
    }
  };

  useEffect(() => {
    createSquare();
  }, []);

  return (
    <>
      <Overlay>
        <ModalContainer>
          <BannerRegister>
            <h1>Cadastro</h1>
            <Lottie options={defaultOptions} />
            <Link to="/">Já possui cadastro? Clique aqui para se logar</Link>
            {/* <a href='https://br.freepik.com/vetores/desenho-animado'>Desenho animado vetor criado por vectorjuice - br.freepik.com</a> */}
          </BannerRegister>
          <RegisterContainer>
            <RegisterForm onSubmit={handleSubmit}>
              {step === 1 && (
                <>
                  {" "}
                  <InputRow>
                    <Input
                      id="name"
                      label="Nome*"
                      value={register.name}
                      type="text"
                      handler={handleInput}
                      required
                    />
                    <Input
                      id="birthDate"
                      label="Data Nasc.*"
                      value={register.birthDate}
                      type="date"
                      handler={handleInput}
                      required
                    />
                  </InputRow>
                  <Input
                    id="email"
                    label="Email*"
                    type="email"
                    value={register.email}
                    handler={handleInput}
                    required
                  ></Input>
                  <InputRow>
                    <Input
                      id="cpf"
                      label="CPF*"
                      type="text"
                      value={register.cpf}
                      handler={handleInput}
                      required
                    ></Input>
                    <select id="gender" onChange={handleInput}>
                      <option>Selecione seu sexo*</option>
                      <option value="M">Masculino</option>
                      <option value="F">Feminino</option>
                      <option value="C">Confidencial</option>
                    </select>
                  </InputRow>
                  <Input
                    id="address"
                    label="Endereço*"
                    type="text"
                    handler={handleInput}
                    value={register.address}
                    required
                  />
                  <Input
                    id="password"
                    label="Senha*"
                    type="password"
                    handler={handleInput}
                    value={register.password}
                    required
                  />
                  <Input
                    id="validPassword"
                    label="Confirmar senha*"
                    type="password"
                    value={confirmPassword}
                    handler={handleConfirmPassword}
                  />
                </>
              )}
              {step === 2 && (
                <ClientOrFreelancer>
                  <h1>Você é profissional ou cliente</h1>
                  <ul
                    onChange={(e) => {
                      if (e.target.value === "freelancer")
                        setIsFreelancer(true);
                      else setIsFreelancer(false);
                    }}
                  >
                    <li>
                      <Check
                        id="UserOrFreelancer"
                        name="userType"
                        type="radio"
                        label="Cliente"
                        value="client"
                        required
                      />
                    </li>
                    <li>
                      <Check
                        id="UserOrFreelancer"
                        name="userType"
                        type="radio"
                        label="Profissional"
                        value="freelancer"
                        required
                      />
                    </li>
                  </ul>
                </ClientOrFreelancer>
              )}

              {step === 3 && (
                <FreelancerType>
                  <h1>Selecione o seu tipo de trabalho</h1>
                  <select>
                    <option>Tipo de trabalho</option>
                  </select>
                </FreelancerType>
              )}
              <span>
                <ButtonNext disabled={handleButton()}>Next &rarr;</ButtonNext>
              </span>
            </RegisterForm>
          </RegisterContainer>
        </ModalContainer>
        <Squares className="squares"></Squares>
      </Overlay>
    </>
  );
}

export default Register;
