import {
  GradientLine,
  MainContainer,
  MessagesContainer,
  ProfileBar,
  YourMessage,
  OtherUserMessage,
  SendMessageContainer,
  Overlay,
} from "./styles";
import Return from "../../assets/return.svg";
import Profile from "../../assets/perfil.png";
import Plus from "../../assets/plus_icon.svg";
import Send from "../../assets/send.svg";

import { useEffect, useState, useRef } from "react";
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

  const [chat, setChat] = useState([]);

  const { idChat } = useParams();

  const signedUser = getUser();

  const history = useHistory();

  useEffect(() => {
    loadChat();
    loadMessages();
    reloadMessages();
  }, [reload]);

  useEffect(() => {});

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
      console.log(response.data[0]);
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
            <h1>Roberto Almeida Santos</h1>
            <h2>Cliente</h2>
          </label>
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
