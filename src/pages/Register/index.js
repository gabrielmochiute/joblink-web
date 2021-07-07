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
  ClientType,
} from "./styles";
import React, { Profiler, useEffect, useRef, useState } from "react";
import InputMask from "react-input-mask";
import { Link, useHistory } from "react-router-dom";
import { cpf } from "cpf-cnpj-validator";

import Input from "../../components/input";
import banner from "../../assets/banner.jpg";
import freelancer from "../../assets/freelancer.jpg";
import { api } from "../../services/api";
import { signIn } from "../../services/security";
import { validSquaredImage } from "../../utils";
import Check from "../../components/Check";
import animationData from "../../lotties/lottie-newregister.json";
import Lottie from "react-lottie";
import Alert from "../../components/Alert";
import Loading from "../../components/Loading";
import Profile from "../../assets/perfil.png";
import Pen from "../../assets/pen.svg";

function Register() {
  const history = useHistory();

  const imageRef = useRef();

  const [message, setMessage] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const [step, setStep] = useState(1);

  const [image, setImage] = useState(null);

  const [isFreelancer, setIsFreelancer] = useState(false);

  const [categories, setCategories] = useState([]);

  const clientImageRef = useRef();

  const freelancerImageRef = useRef();

  const [confirmPassword, setConfirmPassword] = useState("");

  const [register, setRegister] = useState({
    cpf: "",
    name: "",
    email: "",
    birthDate: "",
    password: "",
    gender: "",
    address: "",
    profession: "",
    image: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step < 2) return setStep(step + 1);
    if (step >= 3 && isFreelancer === false) {
      const formatedBirthDate = register.birthDate.split("-", 3);
      const newBirthDate = `${formatedBirthDate[2]}/${formatedBirthDate[1]}/${formatedBirthDate[0]}`;

      const validatedCpf = cpf.isValid(register.cpf);

      if (!validatedCpf) return alert("Cpf inválido");

      if (confirmPassword !== register.password)
        return alert("As senhas precisam ser iguais");

      setIsLoading(true);

      try {
        const { cpf, name, email, password, gender, address } = register;

        const data = new FormData();

        data.append("cpf", cpf);
        data.append("name", name);
        data.append("email", email);
        data.append("password", password);
        data.append("gender", gender);
        data.append("address", address);
        data.append("birth_date", newBirthDate);

        if (image) data.append("image", image);

        const response = await api.post("/clients", data, {
          headers: {
            "Content-type": "multipart/form-data",
          },
        });

        signIn(response.data);

        setIsLoading(false);
        history.push("/feed");
      } catch (error) {
        console.error(error);
        setIsLoading(true);
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

        setIsLoading(true);
        try {
          const { cpf, name, email, password, gender, address, profession } =
            register;

          const data = new FormData();

          data.append("cpf", cpf);
          data.append("name", name);
          data.append("email", email);
          data.append("password", password);
          data.append("gender", gender);
          data.append("address", address);
          data.append("birth_date", newBirthDate);
          data.append("profession", profession);

          if (image) data.append("image", image);

          const response = await api.post("/freelancers", data, {
            headers: {
              "Content-type": "multipart/form-data",
            },
          });

          console.log(response.data);

          signIn(response.data);

          setIsLoading(false);
          history.push("/feed");
        } catch (error) {
          console.error(error);

          setIsLoading(false);
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

  const handleImage = (e) => {
    if (e.target.files[0]) {
      imageRef.current.src = URL.createObjectURL(e.target.files[0]);
      imageRef.current.style.display = "flex";
    } else {
      imageRef.current.src = "";
      imageRef.current.style.display = "none";
    }

    setImage(e.target.files[0]);
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

  const loadCategories = async () => {
    try {
      const response = await api.get("/professions");

      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    createSquare();
    loadCategories();
  }, []);

  const onlyNumbers = (str) => str.replace(/[^0-9]/g, "");

  const handleCpf = (e) => {
    // const formatedCpf = cpf.format(e.target.value);
    setRegister({ ...register, cpf: onlyNumbers(e.target.value) });
  };

  const chooseType = (type) => {
    if (type === "client") {
      clientImageRef.current.style.border = "solid 3px var(--primary)";
      freelancerImageRef.current.style.border = "none";
    } else {
      freelancerImageRef.current.style.border = "solid 3px var(--primary)";
      clientImageRef.current.style.border = "none";
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <Overlay>
        <Alert message={message} type="error" handleClose={setMessage} />
        <ModalContainer>
          <BannerRegister>
            <h1>Cadastro</h1>
            <Lottie options={defaultOptions} height="50%" />
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
                    {/* <Input
                      id="cpf"
                      label="CPF*"
                      mask="99.999.999/9999-99"
                      type="text"
                      value={register.cpf}
                      handler={handleCpf}
                      required
                    /> */}
                    <InputMask
                      placeholder="CPF(999.999.999-99)*"
                      id="cpf"
                      name="cpf"
                      mask="999.999.999-99"
                      value={register.cpf}
                      onChange={handleCpf}
                    />
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
                    type="local"
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
                        <img
                          src={banner}
                          alt="Cliente"
                          ref={clientImageRef}
                          onClick={() => chooseType("client")}
                        />
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
                        <img
                          src={freelancer}
                          alt="Cliente"
                          onClick={() => chooseType("freelancer")}
                          ref={freelancerImageRef}
                        />
                      </label>
                    </li>
                  </ul>
                </ClientOrFreelancer>
              )}
              {step === 3 ? (
                isFreelancer ? (
                  <FreelancerType>
                    <h1>Envie uma foto sua!</h1>
                    <div id="imageRow">
                      <img
                        alt="Pré-visualização"
                        ref={imageRef}
                        src={Profile}
                      />
                      <label htmlFor="image">
                        <img src={Pen} alt="Imagem de editar" />
                      </label>
                    </div>
                    <input id="image" type="file" onChange={handleImage} />
                    <div id="typeRow">
                      <h2>Selecione o seu tipo de trabalho</h2>
                      <select id="profession" onChange={handleInput}>
                        <option>Tipo de trabalho</option>

                        {categories.map((c) => (
                          <option value={c.id}>{c.name}</option>
                        ))}
                      </select>
                    </div>
                  </FreelancerType>
                ) : (
                  // <>
                  <ClientType>
                    <h1>Envie uma foto sua!</h1>
                    <div>
                      <img
                        alt="Pré-visualização"
                        ref={imageRef}
                        src={Profile}
                      />
                      <label htmlFor="image">
                        <img src={Pen} alt="Imagem de editar" />
                      </label>
                    </div>
                    <input id="image" type="file" onChange={handleImage} />
                  </ClientType>
                  // </>
                )
              ) : (
                ""
              )}
              <span>
                <ButtonNext disabled={step !== 1 && handleButton()}>
                  Próximo &rarr;
                </ButtonNext>
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
