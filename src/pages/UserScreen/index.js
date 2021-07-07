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
  ClientCard,
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
import { validSquaredImage } from "../../utils";

import Loading from "../../components/Loading";
import Alert from "../../components/Alert";
import NavBar from "../../components/NavBar";

function Notifications({
  card,
  setMessage,
  history,
  setIsLoading,
  signedUser,
}) {
  const acceptService = async () => {
    setIsLoading(true);
    try {
      const response = await api.post(`/createChat/service/${card.id}`);
      setIsLoading(false);
      history.push("/contact");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setMessage({
        title: "Algo deu errado...",
        description: error.response.data.Unauthorized,
      });
    }
  };

  // console.log("Aqui gabriel", card);

  return (
    <>
      {!card.is_accepted && (
        <CardOwner>
          <div id="titleImage">
            <img src={card.User.image || Profile} alt="Foto de perfil" />
            <h1>{card.User.name} se interessou no seu pedido</h1>
          </div>

          <div id="yourPost">
            <img src={signedUser.user.image || Profile} alt="Foto de perfil" />
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

function User({ user, setMessage, history, setIsLoading }) {
  const signedUser = getUser();

  const [pendeciesCards, setPendeciesCards] = useState({
    whereUserIsFreelancer: [],
    whereUserIsPostOwner: [],
  });

  const [publishType, setPublishType] = useState("publish");

  const loadNotifications = async () => {
    setIsLoading(true);
    try {
      const response = await api.get("/notifications");

      setPendeciesCards({
        ...pendeciesCards,
        whereUserIsPostOwner: response.data.pendencies.whereUserIsPostOwner,
        whereUserIsFreelancer: response.data.pendencies.whereUserIsFreelancer,
      });
      // setPendeciesCards({
      //   ...pendeciesCards,
      // });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  console.log(signedUser);

  useEffect(() => {
    loadNotifications();
  }, []);

  const acceptService = async (id) => {
    setIsLoading(true);
    try {
      const response = await api.post(`/createChat/service/${id}`);
      setIsLoading(false);
      history.push("/contact");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setMessage({
        title: "Algo deu errado...",
        description: error.response.data.Unauthorized,
      });
    }
  };

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
                setIsLoading={setIsLoading}
                signedUser={signedUser}
              />
            ))}
            {pendeciesCards.whereUserIsFreelancer.map((m) => (
              <ClientCard>
                <div id="titleImage">
                  <img src={Profile} alt="Foto de perfil" />
                  <div id="titlePost">
                    <h2>Por {m.Post.User.name}</h2>
                    <h1>Desejo solicitar serviços seus</h1>
                  </div>
                </div>
                <p>“{m.Post.description}”</p>
                <div id="acceptButton">
                  <label id="reject">
                    <img src={Reject} alt="Imagem de rejeitar" />
                    <button>Recusar</button>
                  </label>
                  <label id="accept">
                    <img src={Accept} alt="Imagem de aceitar" />
                    <button onClick={() => acceptService(m.id)}>Aceitar</button>
                  </label>
                </div>
              </ClientCard>
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
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const signedUser = getUser();

  const { id, type } = useParams();

  const getThisUser = async () => {
    setIsLoading(true);

    try {
      const response = await api.get(`/${type}/${id}`);

      setUser(response.data);
      setSuccess(true);
      setIsLoading(false);
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

  const changeImage = async (e) => {
    if (!e.target.files) return;

    try {
      await validSquaredImage(e.target.files[0]);

      const data = new FormData();

      data.append("image", e.target.files[0]);

      setIsLoading(true);

      const type = signedUser.isFreelancer ? "freelancers" : "clients";

      const response = await api.put(`/${type}`, data);

      // setStudent({ ...student, image: response.data.image });
      // handleReload();

      // setUser({ ...student, image: response.data.image });
    } catch (error) {
      alert(error);
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getThisUser();
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <Alert message={message} type="error" handleClose={setMessage} />
      {success ? (
        <>
          <NavBar />
          <Banner>
            {/* <div> */}
            {/* <label htmlFor="newImage"> */}
            {/* <img src={Profile} alt="Imagem para editar" /> */}
            {/* </label> */}
            <ProfilePicture
              src={user.image ? user.image : Profile}
              onDoubleClick={() => changeImage(user)}
            />
            {/* <input id="newImage" type="file" onChange={changeImage} /> */}
            {/* </div> */}
          </Banner>
          <User
            user={user}
            setMessage={setMessage}
            history={history}
            setIsLoading={setIsLoading}
          />
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
