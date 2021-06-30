import {
  ModalContainer,
  Overlay,
  CardRecommendation,
  CardOwner,
} from "./styles";

import animationData from "../../lotties/lottie-recommendations.json";
import Lottie from "react-lottie";
import Profile from "../../assets/perfil.png";
import ColoredStar from "../../assets/coloredStar.svg";

function Recommendations({ children, handleClose }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Overlay>
      <ModalContainer>
        <div id="firstColumn">
          <div id="yourPost">
            <h1>Sua Postagem!</h1>
            <CardOwner>
              <div id="titleImage">
                <img src={Profile} alt="Foto de perfil" />
                <div id="titlePost">
                  <h2>Por Você</h2>
                  <h1>Preciso de alguém para consertar meu carro</h1>
                </div>
              </div>
              <p>
                “Trabalho com advocacia há 9 anos pela OAB estou realizando
                serviços autônomos de advogado, faço orçamento de até 3000R$ de
                exigência dependendo da instância jurídica. Quem precisar, favor
                entrar em contato.”
              </p>
            </CardOwner>
          </div>
        </div>
        <div id="secondColumn">
          <h1>rECOMENDAÇÕES</h1>
          <div id="recommendations">
            <CardRecommendation>
              <div id="firstCardColumn">
                <img src={Profile} alt="Imagem de perfil" />
                <h1>Roberto Carlos</h1>
              </div>
              <div id="secondCardColumn">
                <div id="rating">
                  <h1>4.5</h1>
                  <img src={ColoredStar} alt="Estrela" />
                </div>
                <button>Contato</button>
              </div>
            </CardRecommendation>
            <CardRecommendation>
              <div id="firstCardColumn">
                <img src={Profile} alt="Imagem de perfil" />
                <h1>Roberto Carlos</h1>
              </div>
              <div id="secondCardColumn">
                <div id="rating">
                  <h1>4.5</h1>
                  <img src={ColoredStar} alt="Estrela" />
                </div>
                <button>Contato</button>
              </div>
            </CardRecommendation>
            <CardRecommendation>
              <div id="firstCardColumn">
                <img src={Profile} alt="Imagem de perfil" />
                <h1>Roberto Carlos</h1>
              </div>
              <div id="secondCardColumn">
                <div id="rating">
                  <h1>4.5</h1>
                  <img src={ColoredStar} alt="Estrela" />
                </div>
                <button>Contato</button>
              </div>
            </CardRecommendation>
            <CardRecommendation>
              <div id="firstCardColumn">
                <img src={Profile} alt="Imagem de perfil" />
                <h1>Roberto Carlos</h1>
              </div>
              <div id="secondCardColumn">
                <div id="rating">
                  <h1>4.5</h1>
                  <img src={ColoredStar} alt="Estrela" />
                </div>
                <button>Contato</button>
              </div>
            </CardRecommendation>
            <CardRecommendation>
              <div id="firstCardColumn">
                <img src={Profile} alt="Imagem de perfil" />
                <h1>Roberto Carlos</h1>
              </div>
              <div id="secondCardColumn">
                <div id="rating">
                  <h1>4.5</h1>
                  <img src={ColoredStar} alt="Estrela" />
                </div>
                <button>Contato</button>
              </div>
            </CardRecommendation>
            <CardRecommendation>
              <div id="firstCardColumn">
                <img src={Profile} alt="Imagem de perfil" />
                <h1>Roberto Carlos</h1>
              </div>
              <div id="secondCardColumn">
                <div id="rating">
                  <h1>4.5</h1>
                  <img src={ColoredStar} alt="Estrela" />
                </div>
                <button>Contato</button>
              </div>
            </CardRecommendation>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#F55D7F"
              fill-opacity="1"
              d="M0,160L48,138.7C96,117,192,75,288,48C384,21,480,11,576,26.7C672,43,768,85,864,117.3C960,149,1056,171,1152,160C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </ModalContainer>
    </Overlay>
  );
}

export default Recommendations;
