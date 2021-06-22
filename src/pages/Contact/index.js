import animationData from "../../lotties/lottie-train-background.json";
import Lottie from "react-lottie";
import { ContactBox, MessagesContainer, Overlay } from "./styles";
import NavBar from "../../components/NavBar";
import Profile from "../../assets/perfil.png";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";

function Chat({ chat, history }) {
  return (
    <>
      <ContactBox>
        <div id="titleName">
          <label>
            <img src={Profile} alt="Imagem de perfil" />
            <div>
              <h1>{chat.Service.User.name}</h1>
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

      setServiceMessages(response.data.queryChatsByPosts);

      console.log({ Resposta: response.data });
    } catch (error) {
      console.error(error);
    }
  };
  console.log({ "Variável de estado": serviceMessages });

  useEffect(() => {
    loadChats();
  }, []);

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
            <Chat chat={c} history={history} />
          ))}
        </MessagesContainer>
      </Overlay>
    </>
  );
}

export default Contact;
