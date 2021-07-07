import animationData from "../../lotties/lottie-train-background.json";
import Lottie from "react-lottie";
import { ContactBox, MessagesContainer, Overlay } from "./styles";
import Profile from "../../assets/perfil.png";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";
import { getUser } from "../../services/security";

import NavBar from "../../components/NavBar";
import Loading from "../../components/Loading";

function Chat({ chat, history, signedUser }) {
  return (
    <>
      <ContactBox>
        <div id="titleName">
          <label>
            <img
              src={
                chat.Service.Post.User.id == signedUser.user.id
                  ? chat.Service.User.image || Profile
                  : chat.Service.Post.User.image || Profile
              }
              alt="Imagem de perfil"
            />
            <div>
              <h1>
                {chat.Service.Post.User.id == signedUser.user.id
                  ? chat.Service.User.name
                  : chat.Service.Post.User.name}
              </h1>
              <h2>
                {chat.Service.Post.User.id == signedUser.user.id
                  ? "Profissional"
                  : "Cliente"}
              </h2>
            </div>
          </label>
          <h2>{`De "${chat.Service.Post.title}"`}</h2>
        </div>
        <div id="contactButton">
          <button
            type="button"
            onClick={() => {
              history.push(`/contact/${chat.id}`);
            }}
          >
            Contato
          </button>
        </div>
      </ContactBox>
    </>
  );
}

function Contact() {
  const signedUser = getUser();
  const history = useHistory();

  const [serviceMessages, setServiceMessages] = useState([]);
  const [postMessages, setPostMessages] = useState([]);
  const [types, setTypes] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const loadChats = async () => {
    setIsLoading(true);

    try {
      const response = await api.get("/chats");

      setServiceMessages(...serviceMessages, response.data.queryChatsByService);
      setPostMessages(...serviceMessages, response.data.queryChatsByPosts);
      setIsLoading(false);
      console.log({ Resposta: response.data });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadChats();
  }, []);

  console.log("service", serviceMessages);
  console.log("post", postMessages);

  return (
    <>
      <Overlay>
        {isLoading && <Loading />}
        <NavBar />
        <Lottie options={defaultOptions} id="lottie" height="400px" />
        <MessagesContainer>
          <label>
            <div>
              <h1>Suas conversas</h1>
              <div />
            </div>
            {signedUser.isFreelancer && (
              <div id="type">
                <button onClick={() => setTypes(0)}>Seus serviços</button>
                <button onClick={() => setTypes(1)}>Suas postagens</button>
              </div>
            )}
          </label>
          {types === 0
            ? serviceMessages.map((c) => (
                <Chat
                  key={c.id}
                  chat={c}
                  history={history}
                  signedUser={signedUser}
                />
              ))
            : postMessages.map((c) => (
                <Chat
                  key={c.id}
                  chat={c}
                  history={history}
                  signedUser={signedUser}
                />
              ))}
        </MessagesContainer>
      </Overlay>
    </>
  );
}

export default Contact;
