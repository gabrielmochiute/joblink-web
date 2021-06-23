import animationData from "../../lotties/lottie-train-background.json";
import Lottie from "react-lottie";
import { ContactBox, MessagesContainer, Overlay } from "./styles";
import NavBar from "../../components/NavBar";
import Profile from "../../assets/perfil.png";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";
import { getUser } from "../../services/security";

function Chat({ chat, history, signedUser }) {
  return (
    <>
      <ContactBox>
        <div id="titleName">
          <label>
            <img src={Profile} alt="Imagem de perfil" />
            <div>
              {/* <h1>
                {chat.Service.User.id != signedUser.user.id
                  ? chat.Service.User.name
                  : chat.Service.Post.User.name}
              </h1> */}
              <h2>Profissional</h2>
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
  const [serviceMessages, setServiceMessages] = useState([]);
  const [postMessages, setPostMessages] = useState([]);

  const history = useHistory();
  const signedUser = getUser();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const loadChats = async () => {
    try {
      const response = await api.get("/chats");

      setServiceMessages(response.data.queryChatsByService);
      setPostMessages(response.data.queryChatsByPosts);

      console.log({ Resposta: response.data });
    } catch (error) {
      console.error(error);
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
        <NavBar />
        <Lottie options={defaultOptions} id="lottie" height="400px" />
        <MessagesContainer>
          <label>
            <h1>Suas conversas</h1>
            <div />
          </label>
          {serviceMessages.map((c) => (
            <Chat
              key={c.id}
              chat={c}
              history={history}
              signedUser={signedUser}
            />
          ))}
          {postMessages.map((c) => (
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
