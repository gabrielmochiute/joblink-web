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
          <img src={Profile} alt="Foto da pessoa" />
          <p>{message.message_description}</p>
        </OtherUserMessage>
      )}
    </>
  );
}

function Message() {
  const [reload, setReload] = useState(null);

  const [messages, setMessages] = useState([]);

  const [newMessage, setNewMessage] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [showFeedback, setShowFeedback] = useState(false);

  const [isThisFreelancer, setIsThisFreelancer] = useState(false);

  const [chat, setChat] = useState([]);

  const [feedback, setFeedBack] = useState({
    rating: "",
    description: "",
  });

  const [price, setPrice] = useState("");

  const { idChat } = useParams();

  const signedUser = getUser();

  const history = useHistory();

  const reloadMessages = () => {
    setTimeout(() => {
      handleReload();
      reloadMessages();
    }, 5000);
  };

  const handleReload = () => {
    setReload(Math.random());
  };

  const loadChat = async () => {
    try {
      const response = await api.get(`/chats/${idChat}`);
      setChat(response.data[0]);

      // if (response.data[0].Service.Post.is_announcement == 1) {
      if (signedUser.user.id != response.data[0].Service.Post.User.id)
        setIsThisFreelancer(true);
      // }
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

  useEffect(() => {
    loadMessages();
    reloadMessages();
    loadChat();
  }, [reload]);

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

  console.log(chat);

  const feedbackSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.put(
        `/feedback/post/${chat.Service.Post.id}/service/${chat.Service.id}`,
        {
          rating: feedback.rating,
          feedback: feedback.description,
        }
      );

      setShowFeedback(undefined);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSetPriceSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(
        `/post/${chat.Service.Post.id}/service/${chat.Service.id}`,
        {
          service_cost: price,
        }
      );

      setShowModal(false);

      alert(`O serviço agora custa ${price}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(chat);

  const payment = async (history) => {
    try {
      const response = await api.put(
        `/payment/post/${chat.Service.Post.id}/service/${chat.Service.id}`
      );

      const redirect = response.data.preference.body.init_point;

      window.open(`${redirect}`, "Mercado pago", "width=1200,height=1000");
      // history.push();

      // window.href(`${redirect}`);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

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

            <form onSubmit={handleSetPriceSubmit}>
              <label>
                <h1>Preço estipulado R$: </h1>
                <input
                  type="number"
                  placeholder="00,00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </label>
              <button>Enviar</button>
            </form>
          </PriceModal>
        </Modal>
      )}

      {showFeedback && (
        <FeedbackModal>
          <Feedback onSubmit={feedbackSubmit}>
            <div id="textContainer">
              <h1>
                Deixe seu <span>Feedback!</span>
              </h1>
              <h4>Selecione a avaliação do serviço</h4>
              <div id="stars">
                <ul
                  onChange={(e) =>
                    setFeedBack({ ...feedback, rating: e.target.value })
                  }
                >
                  <input name="ratingStars" value="1" type="radio" required />
                  <input name="ratingStars" value="2" type="radio" required />
                  <input name="ratingStars" value="3" type="radio" required />
                  <input name="ratingStars" value="4" type="radio" required />
                  <input name="ratingStars" value="5" type="radio" required />
                </ul>
                <h4>{feedback.rating}</h4>
              </div>

              <div id="inputFeedback">
                <h2>Comentário</h2>
                <input
                  onChange={(e) =>
                    setFeedBack({
                      ...feedback,
                      description: e.target.value,
                    })
                  }
                  value={feedback.description}
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
      )}

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
          {isThisFreelancer ? (
            <h3
              onClick={() => {
                setShowModal(true);
              }}
            >
              Estipular o preço
            </h3>
          ) : (
            // <h3
            //   onClick={() => {
            //     if (window.confirm("Tem certeza?")) setShowFeedback(true);
            //   }}
            // >
            //   Finalizar serviço e dar feedback
            // </h3>
            <h3 onClick={() => payment(history)}>Pagar</h3>
          )}
        </ProfileBar>
        <GradientLine />

        <MessagesContainer>
          {messages.map((m) => (
            <Chat message={m} signedUser={signedUser} key={m.id} />
          ))}

          {messages == "" && (
            <h1>Parece que você ainda não tem nenhuma mensagem</h1>
          )}
        </MessagesContainer>

        <SendMessageContainer onSubmit={handleSubmit}>
          <img src={Plus} alt="Botão de mais" />
          <label>
            <input
              placeholder="Mande alguma coisa!"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              required
            />
            <button>
              <img src={Send} alt="Botão enviar" />
            </button>
          </label>
        </SendMessageContainer>
      </MainContainer>
    </Overlay>
  );
}

export default Message;
