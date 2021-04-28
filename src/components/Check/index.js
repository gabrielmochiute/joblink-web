import { Container } from "./styles";

function Check({ id, label, type, handler, name, ...rest }) {
  return (
    <>
      <Container>
        <input
          id={id}
          {...rest}
          type="checkbox"
          onChange={handler}
          type={type}
          name={name}
        />
        <label>{label}</label>
      </Container>
    </>
  );
}

export default Check;
