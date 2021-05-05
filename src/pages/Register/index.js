import {
  Overlay,
  ModalContainer,
  BannerRegister,
  RegisterContainer,
  RegisterForm,
  ButtonNext,
} from "./styles";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Input from "../../components/input";
import banner from "../../assets/banner.jpg";
import { api } from "../../services/api";
import { signIn } from "../../services/security";

function Register() {
  const history = useHistory();

  // const [stage, setStage] = useState();

  const [register, setRegister] = useState({
    cpf: "",
    name: "",
    email: "",
    birthDate: "",
    password: "",
    gender: "M",
    address: "Teste teste teste",
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
  };

  const handleInput = (e) => {
    setRegister({ ...register, [e.target.id]: e.target.value });
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <>
      <Overlay>
        <ModalContainer>
          <BannerRegister>
            <img src={banner} />
            {/* <a href='https://br.freepik.com/vetores/desenho-animado'>Desenho animado vetor criado por vectorjuice - br.freepik.com</a> */}
          </BannerRegister>
          <RegisterContainer>
            <h1>REGISTER</h1>

            <RegisterForm onSubmit={handleSubmit}>
              <Input
                id="name"
                label="Nome"
                value={register.name}
                type="text"
                handler={handleInput}
                required
              />
              <Input
                id="birthDate"
                label="Data Nasc."
                value={register.birthDate}
                type="date"
                handler={handleInput}
                required
              />
              <Input
                id="email"
                label="Email"
                type="email"
                value={register.email}
                handler={handleInput}
                required
              ></Input>
              <Input
                id="cpf"
                label="CPF"
                type="text"
                value={register.cpf}
                handler={handleInput}
                required
              ></Input>
              <Input
                id="password"
                label="Senha"
                type="password"
                handler={handleInput}
                value={register.password}
                required
              />
              <Input
                id="validPassword"
                label="Confirmar senha"
                type="password"
                value={confirmPassword}
                handler={handleConfirmPassword}
              />
              <span>
                <Link to="/">Já possuo cadastro</Link>
                <ButtonNext disabled={handleButton()}>Next &rsaquo;</ButtonNext>
              </span>
            </RegisterForm>
          </RegisterContainer>
        </ModalContainer>
      </Overlay>
    </>
  );
}

export default Register;
