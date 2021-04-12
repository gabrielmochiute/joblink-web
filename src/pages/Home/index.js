import { useHistory } from "react-router";
import { getUser, signOut } from "../../services/security";
import { Button, MainBox, MainTitle } from "./styles";

function Home () {
  const history = useHistory();

  const user = getUser();
  console.log(user);
  
  const handleSignOut = () => {
    signOut();

    history.replace("/");
  };

  return <>
    <MainBox>
      <MainTitle>Bem vindo ao Joblink {user.clientName}!</MainTitle>
      <Button onClick={handleSignOut}>Sair</Button>
    </MainBox>
  </>;
}

export default Home;