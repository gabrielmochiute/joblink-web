import {
  Banner,
  ErrorScreen,
  ProfileContent,
  ProfilePicture,
  ProfilePosts,
  SecondaryLine,
  Card,
  PublishType,
} from "./styles";
import Settings from "../../assets/settings_icon.svg";
import Profile from "../../assets/perfil.png";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { getUser } from "../../services/security";

function Notifications() {
  return <Card></Card>;
}

function User({ user }) {
  const signedUser = getUser();

  const [pendeciesCards, setPendeciesCards] = useState({
    whereUserIsFreelancer: [],
    whereUserIsPostOwner: [],
  });

  const history = useHistory();

  const [publishType, setPublishType] = useState("publish");

  const loadNotifications = async () => {
    // try {
    //   const response = await api.get("/notifications");
    //   console.log(response.data);
    //   setPendeciesCards([
    //     ...pendeciesCards,
    //     (whereUserIsPostOwner: response.data),
    //   ]);
    // } catch (error) {
    //   console.error(error);
    // }
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
          "pendeciesCards.map((c) => <Notifications />)"
        )}
      </ProfilePosts>
    </>
  );
}

function UserScreen() {
  const [user, setUser] = useState([]);
  const [success, setSuccess] = useState(false);
  let { id, type } = useParams();

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
      {success ? (
        <>
          <Banner>
            <ProfilePicture src={user.image ? user.image : Profile} />
          </Banner>
          <User user={user} />
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
