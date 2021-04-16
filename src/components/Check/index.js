import { Container } from "./styles";

function Check({ id, label, type, name, ...rest }) {
  return (
    <>
      <Container>
        <input id={id} {...rest} type="checkbox" type={type} name={name} />
        <label htmlFor={id}>{label}</label>
      </Container>
    </>
  );
}

export default Check;
