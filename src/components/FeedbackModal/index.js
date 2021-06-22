import { ModalContainer, Overlay } from "./styles";

function FeedbackModal({ title, children, handleClose }) {
  return (
    <Overlay>
      <ModalContainer>
        {/* <span onClick={handleClose}>&times;</span> */}
        {children}
      </ModalContainer>
    </Overlay>
  );
}

export default FeedbackModal;
