import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import {
  Introduction,
  MainContainer,
  About,
  LoginRegister,
  GradientLine,
  OurServices,
  Cards,
  OurApp,
  Colaboradores,
  Footer,
  Copyright,
} from "./styles";
import Service from "../../assets/services.svg";
import OurAppImg from "../../assets/OurApp.png";
import Googleplay from "../../assets/googleplay.svg";
import Applestore from "../../assets/applestore.svg";
import Lottiefiles from "../../assets/lottie.png";
import GoogleMaps from "../../assets/googlemaps.png";
import MercadoPago from "../../assets/mercadopago.png";
import PaySeguro from "../../assets/payseguro.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import Instagram from "../../assets/instagram.png";
import LogoServiceLeaders from "../../assets/logo_service.svg";

import animationData from "../../lotties/lottie-home.json";

function Home() {
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
      <MainContainer>
        <Introduction>
          <div className="joblink">
            <h1>O seu serviço bem aqui</h1>
            <h2> experimente o joblink!</h2>
            <h3>Entre no joblink e começe agora.</h3>
            <label>
              <Link to="/register">
                <button>Tente agora</button>
              </Link>
              <Link to="/login">Já possui cadastro?</Link>
            </label>
          </div>
          <LoginRegister>
            <div>
              <h1>
                <Link to="/login">ENTRAR</Link>
              </h1>
              <h2>
                <Link to="/register">REGISTRAR</Link>
              </h2>
            </div>
          </LoginRegister>
        </Introduction>
        <About>
          <div className="lottieHome">
            <Lottie options={defaultOptions} />
          </div>
          <div>
            <h1>O que é o Joblink?</h1>
            <p>
              O Joblink é uma plataforma que busca facilitar a vida de
              profissionais que trabalham de forma própria. Experimente agora!
            </p>
          </div>
        </About>
        <GradientLine />
        <OurServices>
          <h1>Tipos de serviços que oferecemos</h1>
          <div>
            <Cards>
              <img src={Service} />
              <h1>Consertos em geral</h1>
              <p>Consertos de eletrônicos, carros, máquinas e etc</p>
            </Cards>
            <Cards>
              <img src={Service} />
              <h1>Consertos em geral</h1>
              <p>Consertos de eletrônicos, carros, máquinas e etc</p>
            </Cards>
            <Cards>
              <img src={Service} />
              <h1>Consertos em geral</h1>
              <p>Consertos de eletrônicos, carros, máquinas e etc</p>
            </Cards>
            <Cards>
              <img src={Service} />
              <h1>Consertos em geral</h1>
              <p>Consertos de eletrônicos, carros, máquinas e etc</p>
            </Cards>
            <Cards>
              <img src={Service} />
              <h1>Consertos em geral</h1>
              <p>Consertos de eletrônicos, carros, máquinas e etc</p>
            </Cards>
            <Cards>
              <img src={Service} />
              <h1>Consertos em geral</h1>
              <p>Consertos de eletrônicos, carros, máquinas e etc</p>
            </Cards>
          </div>
        </OurServices>
        <OurApp>
          <div>
            <h1>Baixe o nosso aplicativo mobile</h1>
            <label>
              <img src={Googleplay} />
              <img src={Applestore} />
            </label>
          </div>
          <img src={OurAppImg} className="appImg" />
        </OurApp>
        <Colaboradores>
          <div>
            <div className="title">
              <h1>Colaboradores</h1>
              <div />
            </div>
          </div>
          <div>
            <div className="colaboradores">
              <label>
                <img src={PaySeguro} />
                <img src={GoogleMaps} />
              </label>
              <label>
                <img src={Lottiefiles} />
                <img src={MercadoPago} />
              </label>
            </div>
          </div>
        </Colaboradores>

        <Footer>
          <h1>Joblink</h1>
          <div className="footerContainer">
            <ul>
              <li>Sobre nós</li>
              <li>Documentação</li>
              <li>Serviços</li>
            </ul>
            <div className="socialNetworks">
              <div className="socialLogos">
                <img src={Facebook} />
                <img src={Twitter} />
                <img src={Instagram} />
              </div>
              <div className="LogoServiceLeaders">
                <img src={LogoServiceLeaders} />
                <h2>Service leaders</h2>
              </div>
            </div>
          </div>
        </Footer>
        <Copyright>
          <h3>Joblink 2021 © Todos os direitos reservados</h3>
        </Copyright>
      </MainContainer>
    </>
  );
}

export default Home;
