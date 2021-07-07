import {
  FeedContainer,
  ServiceCard,
  ImageTitle,
  CardImage,
  Urgency,
  AddPostButton,
  OverlayCard,
} from "./styles";
import { api } from "../../services/api";

import UrgencyImage from "../../assets/urgency.svg";
import HighUrgencyImage from "../../assets/highUrgency.svg";
import { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router";
import { getUser } from "../../services/security";
import { format } from "date-fns";

import Alert from "../../components/Alert";
import NavBar from "../../components/NavBar";
import Loading from "../../components/Loading";
import Profile from "../../assets/perfil.png";
import Recommendations from "../../components/Recommendations";

function ServiceCards({
  post,
  history,
  setMessage,
  services,
  signedUser,
  setIsLoading,
}) {
  const cardRef = useRef();

  const [typeUser, setTypeUser] = useState("clients");

  const [contact, setContact] = useState("Aceitar");

  const [isAccepted, setIsAccepted] = useState(false);

  // const [acceptedService, setAcceptedService] = useState(false);

  // const [acceptedService, setAcceptedService] = useState();

  useEffect(() => {
    setTypeUser(post.User.is_freelancer ? "freelancers" : "clients");

    // cardRef.current.style.border = "solid 12px red";
  }, []);

  const sendToUserPage = () => {
    history.push(`/find/${typeUser}/${post.User.id}`);
  };

  console.log({ card: post.id, serviço: services });

  const startService = async () => {
    setIsLoading(true);

    try {
      const response = await api.post(`/post/${post.id}/service`);

      console.log(response);

      setMessage({
        title: "Sucesso",
        description: `O usuário já foi notificado sobre sua solicitação!`,
      });
      setIsLoading(false);
      setContact("Aceito!");
      // alert("sucesso");
    } catch (error) {
      setIsLoading(false);
      setMessage({
        title: "Ops...",
        description: error.response.data.Unauthorized,
      });
      console.log();
    }
    // console.log(signedUser);
  };

  let progress;
  let acceptedService;
  let havePermission = true;

  // if (services.find((s) => s.Post.id === post.id)) {
  //   //Se é o dono do post

  //   if (signedUser.user.id === post.User.id) {
  //     progress = "Em andamento";
  //     // console.log(acceptedService);
  //   } else {
  //     return null;
  //   }
  // }

  //Verificando se o serviço já foi aceito
  services.find((s) => {
    if (s.Post.id === post.id && s !== undefined) {
      if (
        signedUser.user.id == post.User.id ||
        signedUser.user.id == s.User.id
      ) {
      } else havePermission = false;

      //Guardando dentro da variável o serviço
      acceptedService = s;

      console.log(
        `Serviço aceito do card ${s.post}` + { serviço: acceptedService }
      );
    }
  });

  return (
    <>
      {havePermission && (
        <ServiceCard>
          {acceptedService != null && (
            <OverlayCard ref={cardRef}>
              <h1>Em progresso</h1>
            </OverlayCard>
          )}

          {progress}
          {post.urgency >= 4 ? (
            <Urgency
              style={
                post.urgency === 4
                  ? { color: "var(--urgency)" }
                  : { color: "var(--highUrgency)" }
              }
            >
              <h2>URGENTE</h2>
              {post.urgency === 4 ? (
                <>
                  <img alt="Imagem de nivel de urgência" src={UrgencyImage} />
                </>
              ) : (
                <>
                  <img
                    alt="Imagem de nivel de urgência"
                    src={HighUrgencyImage}
                  />
                </>
              )}
            </Urgency>
          ) : (
            ""
          )}

          <ImageTitle>
            <div onClick={sendToUserPage}>
              <img src={post.User.image || Profile} alt="Imagem de perfil" />
            </div>
            <label>
              <h4 onClick={sendToUserPage}>
                por{" "}
                {post.User.name === signedUser.user.name
                  ? "Você"
                  : post.User.name}{" "}
                em {format(new Date(post.updatedAt), "dd/MM/yyyy 'às' HH:mm")}
              </h4>
              <h1>{post.title}</h1>
            </label>
          </ImageTitle>
          {post.image ? (
            <>
              <CardImage src={post.image} />
            </>
          ) : (
            ""
          )}
          <p>{post.description}</p>
          <label>
            {/*Verificando se o usuário que está logado é o dono da postagem, 
          caso seja ele tem a opção de entrar em contato com o profissional que aceitou sua postage*/}
            {signedUser.user.id !== post.User.id && (
              <button
                onClick={() => {
                  if (window.confirm("Tem certeza?")) {
                    startService();
                  }
                }}
              >
                {contact}
              </button>
            )}
          </label>
        </ServiceCard>
      )}
    </>
  );
}

function Feed() {
  const history = useHistory();

  const [message, setMessage] = useState();

  const [cards, setCards] = useState([]);

  const [reload, setReload] = useState(null);

  const [services, setServices] = useState([]);

  const [empty, setIsEmpty] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signedUser = getUser();

  const loadCards = async () => {
    setIsLoading(true);
    try {
      const response = await api.get("/feed");

      if (response.data == "") {
        setIsEmpty(
          "Não nenhum serviço atualmente, experimente fazer uma solicitação"
        );
        // alert("sim");
      }

      setCards([...response.data]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const loadServices = async () => {
    try {
      const response = await api.get("/services");

      setServices([...response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadCards();
    loadServices();
  }, [reload]);

  return (
    <>
      <Alert message={message} type="error" handleClose={setMessage} />
      <NavBar />
      {isLoading && <Loading />}

      {/* <Recommendations /> */}
      <FeedContainer>
        {empty}
        {cards.map((p) => (
          <ServiceCards
            key={p.id}
            post={p}
            history={history}
            setMessage={setMessage}
            services={services}
            signedUser={signedUser}
            setIsLoading={setIsLoading}
          />
        ))}

        {/* <ServiceCards image="teste" /> */}

        {/* <ServiceCards /> */}
      </FeedContainer>

      <AddPostButton onClick={() => history.push("/post")}>+</AddPostButton>
    </>
  );
}

export default Feed;
