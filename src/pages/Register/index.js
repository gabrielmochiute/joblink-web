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
import freelancer from "../../assets/freelancer.jpg";
import { api } from "../../services/api";
import { signIn } from "../../services/security";
import Check from "../../components/Check";
import animationData from "../../lotties/lottie-register.json";
import Lottie from "react-lottie";
import ReactDom from "react-dom";
import Alert from "../../components/Alert";

function Li() {
  return <li></li>;
}

function Register() {
  const history = useHistory();

  const [message, setMessage] = useState();

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
    profession: "",
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

        setMessage({
          title: "Ops...",
          description: "CPF ou E-mail já cadastrados ou inválidos",
        });
      }
    } else {
      if (step != 3) {
        return setStep(step + 1);
      } else {
        const formatedBirthDate = register.birthDate.split("-", 3);
        const newBirthDate = `${formatedBirthDate[2]}/${formatedBirthDate[1]}/${formatedBirthDate[0]}`;

        if (confirmPassword !== register.password)
          return alert("As senhas precisam ser iguais");

        try {
          const { cpf, name, email, password, gender, address, profession } =
            register;

          const response = await api.post("/freelancers", {
            cpf,
            name,
            email,
            password,
            birth_date: newBirthDate,
            gender,
            address,
            profession,
          });

          console.log(response.data);

          signIn(response.data);

          history.push("/feed");
        } catch (error) {
          console.error(error);

          setMessage({
            title: "Ops...",
            description: "CPF ou E-mail já cadastrados ou inválidos",
          });
        }
        return;
      }
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
        <Alert message={message} type="error" handleClose={setMessage} />
        <ModalContainer>
          <BannerRegister>
            <h1>Cadastro</h1>
            <Lottie options={defaultOptions} />
            <Link to="/login">
              Já possui cadastro? Clique aqui para se logar
            </Link>
            {/* <a href='https://br.freepik.com/vetores/desenho-animado'>Desenho animado vetor criado por vectorjuice - br.freepik.com</a> */}
          </BannerRegister>
          <RegisterContainer>
            <RegisterForm onSubmit={handleSubmit}>
              {step === 2 && (
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
              {step === 1 && (
                <ClientOrFreelancer>
                  <h1>Você é profissional ou cliente?</h1>
                  <ul
                    onChange={(e) => {
                      if (e.target.value === "freelancer")
                        setIsFreelancer(true);
                      else setIsFreelancer(false);
                    }}
                  >
                    <li>
                      <input
                        id="client"
                        name="userType"
                        type="radio"
                        label="Cliente"
                        value="client"
                        required
                      />
                      <h2>Cliente</h2>
                      <label htmlFor="client">
                        <img src={banner} alt="Cliente" />
                      </label>
                    </li>
                    <li>
                      <input
                        id="freelancer"
                        name="userType"
                        type="radio"
                        label="Profissional"
                        value="freelancer"
                        required
                      />
                      <h2>Profissional</h2>
                      <label htmlFor="freelancer">
                        <img src={freelancer} alt="Cliente" />
                      </label>
                    </li>
                  </ul>
                </ClientOrFreelancer>
              )}
              {step === 3 && (
                <FreelancerType>
                  <h1>Selecione o seu tipo de trabalho</h1>
                  <select id="profession" onChange={handleInput}>
                    <option>Tipo de trabalho</option>
                    <option value="mecanico">Mecânico</option>
                    <option value="tecnico">técnico</option>
                    <option value="advogado">advogado</option>
                  </select>
                  <Input
                    id="yearsExperience"
                    label="Anos de experiência(opcional)"
                    type="text"
                  />

                  <Input
                    id="yearsExperience"
                    label="Formação (opcional)"
                    type="text"
                  />
                </FreelancerType>
              )}
              <span>
                <ButtonNext disabled={step !== 1 && handleButton()}>
                  Next &rarr;
                </ButtonNext>
              </span>
              ;
            </RegisterForm>
          </RegisterContainer>
        </ModalContainer>
        <Squares className="squares"></Squares>
      </Overlay>
    </>
  );
}

export default Register;
