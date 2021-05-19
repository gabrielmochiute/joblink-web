import { Introduction, MainContainer } from "./styles";
import Circles from "../../assets/home_circles.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <MainContainer>
        <Introduction></Introduction>
        <h1>O seu serviço bem aqui experimente o joblink!</h1>
        <h2>Entre no joblink e começe agora.</h2>
        <button>Tente agora</button>
        <Link to="/login">Já possui cadastro</Link>
        <img src={Circles} />
      </MainContainer>
    </>
  );
}

export default Home;
