import {
  Banner,
  ErrorScreen,
  ProfileContent,
  ProfilePicture,
  ProfilePosts,
} from "./styles";
import Settings from "../../assets/settings_icon.svg";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function User({ user }) {
  return (
    <>
      <ProfileContent>
        <img src={Settings} />
        <div>
          <h1>{user.name}</h1>
          <h2>{user.address}</h2>
        </div>
        <label>Entrar em contato</label>
      </ProfileContent>
      <ProfilePosts></ProfilePosts>
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
    } catch (error) {
      // alert(error);
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
            <ProfilePicture src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
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
