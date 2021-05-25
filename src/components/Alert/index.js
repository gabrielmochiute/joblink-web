import { useEffect, useRef } from "react";
import { Container } from "./styles";

function Alert({ message, type, handleClose }) {
  const containerRef = useRef();

  useEffect(() => {
    if (message) {
      containerRef.current.style.height = "120px";

      setTimeout(() => {
        handleClose(undefined);
      }, 5000);
    } else {
      containerRef.current.style.height = "0px";
    }
  }, [message]);

  return (
    <Container type={type} ref={containerRef}>
      {message && (
        <>
          <span onClick={() => handleClose(undefined)}>&times;</span>
          <h1>{message.title}</h1>
          <p>{message.description}</p>
        </>
      )}
    </Container>
  );
}

export default Alert;
