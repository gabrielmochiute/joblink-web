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
          <Lottie options={defaultOptions} height="300px" width="300px" />
        </div>
        <div id="secondColumn"></div>
      </ModalContainer>
    </Overlay>
  );
}

export default Recommendations;
