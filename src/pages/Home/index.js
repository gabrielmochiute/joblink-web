import { useHistory } from "react-router";
import { getUser, signOut } from "../../services/security";
import { Overlay, Container, Forms, CheckList, Next, Steps } from "./styles";
import Check from "../../components/Check";
import { useState } from "react";

function Urgency() {
  return (
    <>
      <CheckList>
        <Check
          id="verylow"
          label="Indiferente (Pode ser quando houver alguém disponível)."
          type="radio"
          name="radioType"
          required
        />
        <Check
          id="low"
          label="Baixa (Preciso nas próximas semanas ou nos próximos meses)."
          type="radio"
          name="radioType"
        />
        <Check
          id="medium"
          label="Média (Preciso nas próximas semanas)."
          type="radio"
          name="radioType"
        />
        <Check
          id="high"
          label="Alta (Preciso agora ou nos próximos dias)."
          type="radio"
          name="radioType"
        />
        <Check
          id="urgency"
          label="Urgente (O mais rápido possível)."
          type="radio"
          name="radioType"
        />
      </CheckList>
    </>
  );
}

function Home() {
  const history = useHistory();

  const [step, setStep] = useState(1);

  const user = getUser();
  console.log(user);

  const handleSignOut = () => {
    signOut();

    history.replace("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(step + 1);
    // alert(step);
  };

  return (
    <>
      <Overlay>
        <Container>
          <h1>Qual é a urgência do seu serviço?</h1>
          <Forms onSubmit={handleSubmit}>
            {step === 1 && <Urgency />}
            {step === 2 && <h1>Parte 2</h1>}
            <Next>
              <Steps>
                <span
                  style={
                    step >= 1
                      ? {
                          background:
                            "linear-gradient(to right, var(--darkGray), var(--darkGray))",
                        }
                      : {}
                  }
                />
                <div
                  style={
                    step >= 1
                      ? { background: "var(--primary)" }
                      : { background: "var(--darkGray)" }
                  }
                >
                  1
                </div>
                <div
                  style={
                    step >= 2
                      ? { background: "var(--primary)" }
                      : { background: "var(--darkGray)" }
                  }
                >
                  2
                </div>
                <div
                  style={
                    step >= 3
                      ? { background: "var(--primary)" }
                      : { background: "var(--darkGray)" }
                  }
                >
                  3
                </div>
              </Steps>
              <button>
                <span>NEXT</span>
              </button>
            </Next>
          </Forms>
        </Container>
      </Overlay>
    </>
  );
}

export default Home;
