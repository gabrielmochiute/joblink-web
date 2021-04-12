import { Overlay, ModalContainer, BannerLogin, FormLogin, Button, Circle, InputContainerHolder } from "./styles";
import Input from "../../components/input";
import banner from "../../assets/bannerLogin.jpg";

import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { signIn } from "../../services/security";

function Login() {
  const history = useHistory();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/sessions", login);

      signIn(response.data);

      //Implementar a autorização

      history.push("/home");
    } catch (error) {
      console.error(error);
      alert( error.response.data.error);
    }
    
    console.log({"email":login.email, "password":login.password});
  };

  const handleInput = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };


  return(
    <>
      <Overlay>
        <ModalContainer>
          <BannerLogin>
            <img src={banner}/>
            {/* <a href='https://br.freepik.com/vetores/desenho-animado'>Desenho animado vetor criado por vectorjuice - br.freepik.com</a> */}
          </BannerLogin>
          <FormLogin onSubmit={handleSubmit}>
            <div>
              <Circle></Circle>
            </div>
            <h1>SIGN IN</h1>
            <InputContainerHolder>
              <Input
                id="email"
                label="Email"
                type="email"
                value={login.email}
                handler={handleInput}
                required
              ></Input>
              <Input
                id="password"
                label="Password"
                type="password"
                value={login.password}
                handler={handleInput}
                required
              ></Input>
              <span>
                <Link to="/register">Não possuo cadastro</Link>
              </span>
            </InputContainerHolder>
            <Button>Login</Button>
          </FormLogin>
        </ModalContainer>
      </Overlay>
    </>
  );
}

export default Login;