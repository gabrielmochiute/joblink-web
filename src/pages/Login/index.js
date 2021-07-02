import {
  Overlay,
  ModalContainer,
  BannerLogin,
  FormLogin,
  Button,
  Circle,
  InputContainerHolder,
  Wave,
} from "./styles";
import Input from "../../components/input";
import banner from "../../assets/bannerLogin.jpg";
import Lottie from "react-lottie";
import animationData from "../../lotties/lottie-login.json";

import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { signIn } from "../../services/security";
import Alert from "../../components/Alert";
import Loading from "../../components/Loading";

function Login() {
  const history = useHistory();

  const [message, setMessage] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const response = await api.post("/sessions", login);

      signIn(response.data);

      //Implementar a autorização

      setIsLoading(false);
      history.push("/feed");
    } catch (error) {
      console.error(error);
      // alert(error.response.data.error);
      setIsLoading(false);
      setMessage({ title: "Ops...", description: error.response.data.error });
    }

    console.log({ email: login.email, password: login.password });
  };

  const handleInput = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {isLoading && <Loading />}
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
          <BannerLogin>
            {/* <img src={banner} /> */}
            <Lottie options={defaultOptions} />
            {/* <a href='https://br.freepik.com/vetores/desenho-animado'>Desenho animado vetor criado por vectorjuice - br.freepik.com</a> */}
          </BannerLogin>
        </ModalContainer>
        <Wave>
          <div className="wave1"></div>
          <div className="wave2"></div>
          <div className="wave3"></div>
          <div className="wave4"></div>
        </Wave>
      </Overlay>
    </>
  );
}

export default Login;
