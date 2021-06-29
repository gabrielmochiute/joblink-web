import { ModalContainer, Overlay } from "./styles";

import animationData from "../../lotties/lottie-recommendations.json";
import Lottie from "react-lottie";

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
            <div id="post"></div>
          </div>
          <div id="lottie">
            <Lottie options={defaultOptions} width="50%" height="75%" />
          </div>
        </div>
        <div id="secondColumn">
          <h1>rECOMENDAÇÕES</h1>
          <div id="recommendations"></div>
        </div>
      </ModalContainer>
    </Overlay>
  );
}

export default Recommendations;
