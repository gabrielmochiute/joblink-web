import {
  GradientLine,
  MainContainer,
  MessagesContainer,
  ProfileBar,
  YourMessage,
  OtherUserMessage,
  SendMessageContainer,
  Overlay,
  PriceModal,
  Feedback,
} from "./styles";
import Lottie from "react-lottie";
import animationData from "../../lotties/lottie-pay.json";
import feedbackAnimationData from "../../lotties/lottie-feedback.json";
import Return from "../../assets/return.svg";
import Profile from "../../assets/perfil.png";
import Plus from "../../assets/plus_icon.svg";
import Alert from "../../assets/alertWhite.svg";
import Send from "../../assets/send.svg";
import Modal from "../../components/Modal";
import FeedbackModal from "../../components/FeedbackModal";

import { useEffect, useState } from "react";
import { getUser } from "../../services/security";
import { useHistory, useParams } from "react-router";
import { api } from "../../services/api";

function Chat({ message, signedUser }) {
  return (
    <>
      {message.message_author === signedUser.user.id ? (
        <YourMessage>
          <p>{message.message_description}</p>
        </YourMessage>
      ) : (
        <OtherUserMessage>
          <img src={Profile} />
          <p>{message.message_description}</p>
        </OtherUserMessage>
      )}
    </>
  );
}

// function SignedUserMessage({ message }) {
//   return (
//     <>
//       <YourMessage>
//         <p>{message}</p>
//         <img src={Profile} />
//       </YourMessage>
//     </>
//   );
// }

// function DestinyUserMessage({ message }) {
//   return (
//     <>
//       <OtherUserMessage>
//         <img src={Profile} />
//         <p>{message}</p>
//       </OtherUserMessage>
//     </>
//   );
// }

function Message() {
  const [reload, setReload] = useState(null);

  const [messages, setMessages] = useState([]);

  const [newMessage, setNewMessage] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [chat, setChat] = useState([]);

  const { idChat } = useParams();

  const signedUser = getUser();

  const history = useHistory();

  useEffect(() => {
    loadChat();
    loadMessages();
    // reloadMessages();
  }, [reload]);

  const reloadMessages = () => {
    setTimeout(() => {
      handleReload();
      reloadMessages();
    }, 5000);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const feedbackDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: feedbackAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleReload = () => {
    setReload(Math.random());
  };

  const loadChat = async () => {
    try {
      const response = await api.get(`/chats`);

      const thisChat = response.data.queryChatsByPosts.map((c) => {
        if (c.id == idChat) {
          return c;
        }
      });

      setChat(thisChat[0]);
      console.log(thisChat[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const loadMessages = async () => {
    try {
      const response = await api.get(`/chat/${idChat}/messages`);

      setMessages(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        `/service/${chat.Service.id}/chat/${idChat}/message`,
        { description: newMessage }
      );

      const messageAdded = {
        id: response.data.id,
        message_author: signedUser.user.id,
        message_description: newMessage,
      };

      setMessages([...messages, messageAdded]);

      setNewMessage("");
      console.log(messages);
    } catch (error) {
      console.error(error);
    }
  };

  // if (signedUser.user.name !== freelancer && signedUser.user.id != client) {
  //   history.replace("/");
  //   // console.log(
  //   //   `O ${signedUser.user.name} não é igual ao ${freelancer} e o id ${signedUser.user.id} não é igual ao ${client}`
  //   // );
  // }

  return (
    <Overlay>
      {showModal && (
        <Modal handleClose={() => setShowModal(undefined)}>
          <PriceModal>
            <label>
              <Lottie options={defaultOptions} width="100%" height="300px" />
              <h2>Coloque o preço do seu serviço</h2>
              <h1>Verifique se o cliente está de acordo!</h1>
            </label>

            <div>
              <label>
                <h1>Preço estipulado R$:</h1>
                <input type="number" placeholder="00,00" />
              </label>
              <button>Enviar</button>
            </div>
          </PriceModal>
        </Modal>
      )}

      <FeedbackModal>
        <Feedback>
          <div id="textContainer">
            <h1>
              Deixe seu <span>Feedback!</span>
            </h1>
            <h4>Selecione a avaliação do serviço</h4>
            <div id="stars">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
              <h4>4,5</h4>
            </div>

            <div id="inputFeedback">
              <h2>Comentário</h2>
              <input
                type="text"
                placeholder="Deixe seu comentário (obrigatório)"
              />
            </div>
            <div id="warning">
              <img src={Alert} alt="Imagem de aviso" />
              <p>
                Atenção! É importante que seu feedback seja sincero pro nosso
                sistema pois isso afeta diretamente a reputação de o
                profissionais na nossa plataforma
              </p>
            </div>
          </div>
          <div id="imageContainer">
            <h1>Feedback</h1>
            <Lottie
              options={feedbackDefaultOptions}
              width="100%"
              height="300px"
            />
            <button>enviar</button>
          </div>
        </Feedback>
      </FeedbackModal>

      <MainContainer>
        <ProfileBar>
          <img
            src={Return}
            onClick={() => {
              history.replace("/feed");
            }}
            alt="Return"
          />
          <label>
            <h1>
              {/* {signedUser.user.id === chat.Service.User.id
                ? chat.Service.User.name
                : chat.Service.Post.User.name} */}
              Roberto
            </h1>
            <h2>Cliente</h2>
          </label>
          <h3
            onClick={() => {
              setShowModal(true);
            }}
          >
            Estipular o preço
          </h3>
        </ProfileBar>
        <GradientLine />

        <MessagesContainer>
          {/* <SignedUserMessage message="Teste 1" />
          <SignedUserMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt massa venenatis neque pretium, eget consequat felis commodo. Nam diam nulla, suscipit iaculis tincidunt eget, scelerisque ac ex. Sed sed pretium diam, lacinia maximus odio. Nulla facilisi. Duis ut elit et risus egestas rutrum lacinia non diam. Integer tristique ac justo id maximus. Etiam quis tortor quis velit placerat feugiat eget porta ligula. Maecenas convallis tortor id elementum pellentesque. Nullam ullamcorper augue quis turpis ornare viverra." />
          <DestinyUserMessage message="Teste 1" />
          <SignedUserMessage message="Teste 3" />
          <DestinyUserMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt massa venenatis neque pretiumLorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt massa venenatis neque pretium" />
          <DestinyUserMessage message="Nulla in dictum quam. Aliquam erat volutpat. Ut maximus ultrices magna, ut gravida metus posuere porta. Phasellus luctus fringilla augue, nec dictum purus aliquam at." /> */}

          {messages.map((m) => (
            <Chat message={m} signedUser={signedUser} key={m.id} />
          ))}

          {messages == [] && (
            <h1>Parece que você ainda não tem nenhuma mensagem</h1>
          )}
        </MessagesContainer>

        <SendMessageContainer onSubmit={handleSubmit}>
          {/* <form > */}
          <img src={Plus} />
          <label>
            <input
              placeholder="Mande alguma coisa!"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              required
            />
            <button>
              <img src={Send} />
            </button>
          </label>
          {/* </form> */}
        </SendMessageContainer>
      </MainContainer>
    </Overlay>
  );
}

export default Message;
