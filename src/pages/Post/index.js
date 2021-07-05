import { useHistory } from "react-router";
import { getUser, signOut } from "../../services/security";

import {
  Overlay,
  Container,
  Forms,
  CheckList,
  Next,
  Steps,
  TitleDescriptionContainer,
  StepsButtons,
  ContainerImage,
  TypePostContainer,
  SelectContainer,
} from "./styles";
import Check from "../../components/Check";
import { useEffect, useRef, useState } from "react";
import Request from "../../assets/requisitar.jpg";
import Announcement from "../../assets/anunciar.jpg";
import Loading from "../../components/Loading";
import Recommendations from "../../components/Recommendations";
import { api } from "../../services/api";

function Urgency({ handleInput }) {
  return (
    <>
      <CheckList onChange={handleInput}>
        <Check
          id="urgency"
          label="Indiferente (Pode ser quando houver alguém disponível)."
          type="radio"
          name="radioType"
          value="1"
          // handler={handleInput}
          required
        />
        <Check
          id="urgency"
          label="Baixa (Preciso nas próximas semanas ou nos próximos meses)."
          type="radio"
          value="2"
          name="radioType"
          // handler={handleInput}
        />
        <Check
          id="urgency"
          label="Média (Preciso nas próximas semanas)."
          type="radio"
          name="radioType"
          value="3"
          // handler={handleInput}
        />
        <Check
          id="urgency"
          label="Alta (Preciso agora ou nos próximos dias)."
          type="radio"
          name="radioType"
          value="4"
          // handler={handleInput}
        />
        <Check
          id="urgency"
          label="Urgente (O mais rápido possível)."
          type="radio"
          name="radioType"
          value="5"
          // handler={handleInput}
        />
      </CheckList>
    </>
  );
}

function TitleAndDescription({ handleInput, form }) {
  return (
    <>
      <TitleDescriptionContainer>
        <label>Digite o titulo do seu serviço.</label>
        <input id="title" onChange={handleInput} value={form.title} required />
        <label>
          {form.is_announcement
            ? "Descreva o que você faz"
            : "Descreva o que você quer"}
        </label>
        <textarea
          id="description"
          value={form.description}
          onChange={handleInput}
          required
        ></textarea>
      </TitleDescriptionContainer>
    </>
  );
}

function Type({ setForm, form }) {
  const requestContainer = useRef();
  const announcementContainer = useRef();

  const selected = (option) => {
    if (option === "request") {
      requestContainer.current.style.background = "var(--primary)";
      announcementContainer.current.style.background = "none";
      setForm({ ...form, is_announcement: false });
    } else {
      announcementContainer.current.style.background = "var(--primary)";
      requestContainer.current.style.background = "none";
      setForm({ ...form, is_announcement: true });
    }
  };

  return (
    <>
      <TypePostContainer>
        <div>
          <h1>Requisitar</h1>
          <img
            src={Request}
            alt="Imagem de requisição"
            ref={requestContainer}
            onClick={() => selected("request")}
          />
        </div>
        <div>
          <h1>Anunciar</h1>
          <img
            src={Announcement}
            alt="Imagem de anunciamento"
            ref={announcementContainer}
            onClick={() => selected("announcement")}
          />
        </div>
      </TypePostContainer>
    </>
  );
}

function Select({ categories, handleInput }) {
  return (
    <SelectContainer>
      <select id="category" onChange={handleInput}>
        <option>Selecione a categoria do seu serviço aqui</option>
        {categories.map((c) => (
          <option id={c.id} key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
    </SelectContainer>
  );
}

function Post() {
  const history = useHistory();

  const signedUser = getUser();

  const [categories, setCategories] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [postId, setPostId] = useState();

  const [showRecommendations, setShowRecommendations] = useState(false);

  const [step, setStep] = useState(1);

  const [nearFreelancers, setNearFreelancers] = useState([]);

  const [form, setForm] = useState({
    urgency: "",
    title: "",
    description: "",
    attendance: "false",
    category: "1",
    is_announcement: "",
  });

  const loadCategories = async () => {
    try {
      const response = await api.get("/professions");

      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadCategories();
    if (!signedUser.isFreelancer) setStep(2);
    setForm({ ...form, is_announcement: false });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step < 4) return setStep(step + 1);
    setIsLoading(true);

    // alert(step);

    try {
      const response = await api.post("/posts", form);

      setPostId(response.data.post.id);
      getNearFreelancers();
      setShowRecommendations(true);
      setIsLoading(false);

      console.log(response);
      //   history.push("/feed");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const getNearFreelancers = async () => {
    try {
      const response = await api.get("/getNearFreelancers");

      setNearFreelancers([...nearFreelancers, ...response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <>
      {showRecommendations && (
        <Recommendations
          postTitle={form.title}
          postDescription={form.description}
          freelancers={nearFreelancers}
          handleClose={() => history.push("/feed")}
          postCategory={form.category}
          postId={postId}
        />
      )}
      <Overlay>
        {isLoading && <Loading />}
        <Container>
          <h1>
            {step === 1
              ? "Anúncio ou requisição?"
              : step === 2
              ? "Qual é a urgência do seu serviço?"
              : step === 3
              ? "Selecione a categoria do seu serviço"
              : "Descreva o tipo de serviço você precisa"}
          </h1>
          <Forms onSubmit={handleSubmit} onChange={console.log(form)}>
            {step === 1 && <Type setForm={setForm} form={form} />}
            {step === 2 && <Urgency handleInput={handleInput} />}
            {step === 3 && (
              <Select categories={categories} handleInput={handleInput} />
            )}
            {step === 4 && (
              <TitleAndDescription handleInput={handleInput} form={form} />
            )}
            <Next>
              <Steps>
                <span
                // style={
                //   step >= 1
                //     ? {
                //         background:
                //           "linear-gradient(to right, var(--darkGray), var(--darkGray))",
                //       }
                //     : {}
                // }
                />
                {signedUser.isFreelancer && (
                  <div
                    style={
                      step >= 1
                        ? { background: "var(--primary)" }
                        : { background: "var(--darkGray)" }
                    }
                  >
                    {signedUser.isFreelancer && "1"}
                  </div>
                )}

                <div
                  style={
                    step >= 2
                      ? { background: "var(--primary)" }
                      : { background: "var(--darkGray)" }
                  }
                >
                  {signedUser.isFreelancer ? "2" : "1"}
                </div>
                <div
                  style={
                    step >= 3
                      ? { background: "var(--primary)" }
                      : { background: "var(--darkGray)" }
                  }
                >
                  {signedUser.isFreelancer ? "3" : "2"}
                </div>

                <div
                  style={
                    step >= 4
                      ? { background: "var(--primary)" }
                      : { background: "var(--darkGray)" }
                  }
                >
                  {signedUser.isFreelancer ? "4" : "3"}
                </div>
                {/* <StepsButtons>
                  {step >= 2 && <span>BACK</span>} */}

                {/* </StepsButtons> */}
              </Steps>
              <StepsButtons>
                {step >= 2 && (
                  <span onClick={() => setStep(step - 1)}>Voltar</span>
                )}
                <button>
                  <span>{step < 4 ? "avançar" : "enviar"}</span>
                </button>
              </StepsButtons>
            </Next>
          </Forms>
        </Container>
      </Overlay>
    </>
  );
}

export default Post;
