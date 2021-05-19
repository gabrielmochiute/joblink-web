import { Introduction, MainContainer, About, LoginRegister } from "./styles";
import Circles from "../../assets/home_circles.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <MainContainer>
        <Introduction>
          <div>
            <h1>O seu serviço bem aqui</h1>
            <h2> experimente o joblink!</h2>
            <h3>Entre no joblink e começe agora.</h3>
            <label>
              <Link to="/register">
                <button>Tente agora</button>
              </Link>
              <Link to="/login">Já possui cadastro?</Link>
            </label>
          </div>
          <LoginRegister>{/* <img src={Circles} /> */}</LoginRegister>
        </Introduction>
        <About></About>
      </MainContainer>
    </>
  );
}

export default Home;
