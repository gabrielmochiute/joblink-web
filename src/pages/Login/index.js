import {
  Overlay,
  ModalContainer,
  BannerLogin,
  FormLogin,
  Button,
  Circle,
  InputContainerHolder,
} from "./styles";
import Input from "../../components/input";
import banner from "../../assets/bannerLogin.jpg";

import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { signIn } from "../../services/security";
import Alert from "../../components/Alert";
import { LoadingBar } from "../../components/Loading/styles";

function Login() {
  const history = useHistory();
  const { innerWidth: width, innerHeight: height } = window;

  const [message, setMessage] = useState();

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

      history.push("/feed");
    } catch (error) {
      console.error(error);
      // alert(error.response.data.error);
      setMessage({ title: "Ops...", description: error.response.data.error });
    }

    console.log({ email: login.email, password: login.password });
  };

  const handleInput = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Overlay>
        <Alert message={message} type="error" handleClose={setMessage} />
        {/* <LoadingBar /> */}
        <ModalContainer>
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
            </InputContainerHolder>
            <Button>Entrar</Button>
            <span>
              <Link to="/register">Não possuo cadastro</Link>
            </span>
          </FormLogin>
          <BannerLogin
            style={width >= 1000 ? { display: "flex" } : { display: "none" }}
          >
            <img src={banner} />
            {/* <a href='https://br.freepik.com/vetores/desenho-animado'>Desenho animado vetor criado por vectorjuice - br.freepik.com</a> */}
          </BannerLogin>
        </ModalContainer>
      </Overlay>
    </>
  );
}

export default Login;
