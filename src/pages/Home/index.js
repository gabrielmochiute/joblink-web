import { Introduction, MainContainer, About } from "./styles";
import Circles from "../../assets/home_circles.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <MainContainer>
        <Introduction>
          <div>
            <h1>O seu serviço bem aqui</h1>
            <h1> experimente o joblink!</h1>
            <h2>Entre no joblink e começe agora.</h2>
            <label>
              <Link to="/register">
                <button>Tente agora</button>
              </Link>
              <Link to="/login">Já possui cadastro?</Link>
            </label>
          </div>
          <img src={Circles} />
        </Introduction>
        <About></About>
      </MainContainer>
    </>
  );
}

export default Home;
