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

import { useEffect, useState } from "react";
import { getUser } from "../../services/security";
import { useHistory, useParams } from "react-router";

function Chat({ message, signedUser }) {
  return (
    <>
      {message.messageAuthor === signedUser.user.name ? (
        <YourMessage>
          <p>{message.messageDescription}</p>
        </YourMessage>
      ) : (
        <OtherUserMessage>
          <img src={Profile} />
          <p>{message.messageDescription}</p>
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

function Contact() {
  const [messages, setMessages] = useState([]);

  const [newMessage, setNewMessage] = useState("");

  let { freelancer, client } = useParams();

  const signedUser = getUser();

  const history = useHistory();

  useEffect(() => {
    setMessages([
      {
        id: 1,
        messageAuthor: "Marcio Herobrine",
        messageDescription: "Olá",
      },
      {
        id: 2,
        messageAuthor: "Manoel Ketchup",
        messageDescription: "Tudo bem?",
      },
      {
        id: 3,
        messageAuthor: "Manoel Ketchup",
        messageDescription:
          "Nam hendrerit augue in mi ultricies pretium. In ac convallis quam. Sed in nunc erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur cursus mollis tellus quis elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
      },
      {
        id: 3,
        messageAuthor: "Marcio Herobrine",
        messageDescription: "Minha geladeira quebrou",
      },
      {
        id: 3,
        messageAuthor: "Marcio Herobrine",
        messageDescription: "Tem como fazer algo?",
      },
      {
        id: 3,
        messageAuthor: "Manoel Ketchup",
        messageDescription: "...",
      },
      {
        id: 3,
        messageAuthor: "Manoel Ketchup",
        messageDescription: "Qual é o problema?",
      },
      {
        id: 3,
        messageAuthor: "Marcio Herobrine",
        messageDescription: "Não liga mais",
      },
    ]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageAdded = {
      id: 1,
      messageAuthor: signedUser.user.name,
      messageDescription: newMessage,
    };

    setMessages([...messages, messageAdded]);

    setNewMessage("");
    console.log(messages);
  };

  if (signedUser.user.name !== freelancer && signedUser.user.id != client) {
    history.replace("/");
    // console.log(
    //   `O ${signedUser.user.name} não é igual ao ${freelancer} e o id ${signedUser.user.id} não é igual ao ${client}`
    // );
  }

  return (
    <Overlay>
      <MainContainer>
        <ProfileBar>
          <img
            src={Return}
            onClick={() => {
              history.replace("/feed");
            }}
          />
          <label>
            <h1>Flávinho Pneu</h1>
            <h2>Profissional</h2>
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
            <Chat message={m} signedUser={signedUser} />
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
            <button onClick={() => console.log(signedUser.user.name)}>
              <img src={Send} />
            </button>
          </label>
          {/* </form> */}
        </SendMessageContainer>
      </MainContainer>
    </Overlay>
  );
}

export default Contact;
