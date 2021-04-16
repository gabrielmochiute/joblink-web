import { useHistory } from "react-router";
import { getUser, signOut } from "../../services/security";
import { Overlay, Container, Forms, CheckList, Next } from "./styles";
import Check from "../../components/Check";
import Input from "../../components/input";

function Home() {
  const history = useHistory();

  const user = getUser();
  console.log(user);

  const handleSignOut = () => {
    signOut();

    history.replace("/");
  };

  return (
    <>
      <Overlay>
        <Container>
          <h1>Que tipo de serviço deseja?</h1>
          <Forms>
            <CheckList>
              <Check
                id="consertos"
                label="Consertos em geral"
                type="radio"
                name="radioType"
              />
              <Check
                id="desenvolvimento"
                label="Desenvolvimento"
                type="radio"
                name="radioType"
              />
              <Check
                id="limpeza"
                label="Limpeza"
                type="radio"
                name="radioType"
              />
            </CheckList>
            <Next>
              <div></div>
              <button>NEXT</button>
            </Next>
          </Forms>
        </Container>
      </Overlay>
    </>
  );
}

export default Home;
