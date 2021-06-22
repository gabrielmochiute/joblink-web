import {
  Banner,
  ErrorScreen,
  ProfileContent,
  ProfilePicture,
  ProfilePosts,
  SecondaryLine,
  Card,
  PublishType,
  CardOwner,
} from "./styles";
import Settings from "../../assets/settings_icon.svg";
import Accept from "../../assets/accept.svg";
import Reject from "../../assets/reject.svg";
import Profile from "../../assets/perfil.png";

import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { getUser } from "../../services/security";
import { format } from "date-fns";
import Alert from "../../components/Alert";
import NavBar from "../../components/NavBar";

function Notifications({ card, setMessage, history }) {
  const acceptService = async () => {
    try {
      const response = await api.post(`/createChat/service/${card.id}`);

      history.push("/contact");
      console.log(response);
    } catch (error) {
      console.log(error);
      setMessage({
        title: "Algo deu errado...",
        description: error.response.data.Unauthorized,
      });
    }
  };

  return (
    <>
      {!card.is_accepted && (
        <CardOwner>
          <div id="titleImage">
            <img src={Profile} alt="Foto de perfil" />
            <h1>{card.User.name} se interessou no seu pedido</h1>
          </div>

          <div id="yourPost">
            <img src={Profile} alt="Foto de perfil" />
            <h1>
              Por Você{" "}
              {format(new Date(card.updatedAt), "dd/MM/yyyy 'às' HH:mm")}
            </h1>
          </div>
          <p>"{card.Post.description}"</p>
          <div id="acceptButton">
            <label id="reject">
              <img src={Reject} alt="Imagem de rejeitar" />
              <button>Recusar</button>
            </label>
            <label id="accept">
              <img src={Accept} alt="Imagem de aceitar" />
              <button onClick={acceptService}>Aceitar</button>
            </label>
          </div>
        </CardOwner>
      )}
    </>
  );
}

function User({ user, setMessage, history }) {
  const signedUser = getUser();

  const [pendeciesCards, setPendeciesCards] = useState({
    whereUserIsFreelancer: [],
    whereUserIsPostOwner: [],
  });

  const [publishType, setPublishType] = useState("publish");

  const loadNotifications = async () => {
    try {
      const response = await api.get("/notifications");
      console.log(response.data);
      setPendeciesCards({
        ...pendeciesCards,
        whereUserIsPostOwner: response.data.pendencies.whereUserIsPostOwner,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadNotifications();
  }, []);

  return (
    <>
      <ProfileContent>
        {signedUser.user.id == user.id ? <img src={Settings} /> : ""}

        <div>
          <h1>{user.name}</h1>
          <h2>Barueri - SP</h2>
        </div>

        {signedUser.user.id == user.id ? (
          ""
        ) : (
          <button
            onClick={() =>
              history.push(`/contact/${user.id}/${signedUser.user.id}`)
            }
          >
            Entrar em contato
          </button>
        )}
      </ProfileContent>
      <PublishType>
        <h1 onClick={() => setPublishType("publish")}>Publicações</h1>
        {signedUser.user.id == user.id && (
          <h1 onClick={() => setPublishType("pendencies")}>Pendências</h1>
        )}
      </PublishType>
      <SecondaryLine />
      <ProfilePosts>
        {publishType === "publish" ? (
          <Card></Card>
        ) : (
          <>
            {pendeciesCards.whereUserIsPostOwner.map((m) => (
              <Notifications
                card={m}
                key={m.id}
                setMessage={setMessage}
                history={history}
              />
            ))}
          </>
        )}
      </ProfilePosts>
    </>
  );
}

function UserScreen() {
  const [user, setUser] = useState([]);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const { id, type } = useParams();

  const getUser = async () => {
    try {
      const response = await api.get(`/${type}/${id}`);

      setUser(response.data);
      setSuccess(true);
      console.log(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Alert message={message} type="error" handleClose={setMessage} />
      {success ? (
        <>
          <NavBar />
          <Banner>
            <ProfilePicture src={user.image ? user.image : Profile} />
          </Banner>
          <User user={user} setMessage={setMessage} history={history} />
        </>
      ) : (
        <>
          <ErrorScreen>
            <h1>Usuário não encontrado :(</h1>
            <h2>
              Verifique se o ID na URL está correto, caso continue com o erro,
              entre em <a href="/">contato</a>.
            </h2>
          </ErrorScreen>
        </>
      )}
    </>
  );
}

export default UserScreen;
