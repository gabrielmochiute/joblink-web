import {
  GradientLine,
  MainContainer,
  MessagesContainer,
  ProfileBar,
  YourMessage,
  OtherUserMessage,
  SendMessageContainer,
} from "./styles";
import Return from "../../assets/return.svg";
import Profile from "../../assets/perfil.png";

function SignedUserMessage({ message }) {
  return (
    <>
      <YourMessage>
        <p>{message}</p>
        <img src={Profile} />
      </YourMessage>
    </>
  );
}

function DestinyUserMessage({ message }) {
  return (
    <>
      <OtherUserMessage>
        <img src={Profile} />
        <p>{message}</p>
      </OtherUserMessage>
    </>
  );
}

function Contact() {
  return (
    <>
      <MainContainer>
        <ProfileBar>
          <img src={Return} />
          <label>
            <h1>Fulano de Tal</h1>
            <h2>Profissional</h2>
          </label>
        </ProfileBar>
        <GradientLine />

        <MessagesContainer>
          <SignedUserMessage message="Teste 1" />
          <SignedUserMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt massa venenatis neque pretium, eget consequat felis commodo. Nam diam nulla, suscipit iaculis tincidunt eget, scelerisque ac ex. Sed sed pretium diam, lacinia maximus odio. Nulla facilisi. Duis ut elit et risus egestas rutrum lacinia non diam. Integer tristique ac justo id maximus. Etiam quis tortor quis velit placerat feugiat eget porta ligula. Maecenas convallis tortor id elementum pellentesque. Nullam ullamcorper augue quis turpis ornare viverra." />
          <DestinyUserMessage message="Teste 1" />
          <SignedUserMessage message="Teste 3" />
          <DestinyUserMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt massa venenatis neque pretiumLorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt massa venenatis neque pretium" />
          <DestinyUserMessage message="Nulla in dictum quam. Aliquam erat volutpat. Ut maximus ultrices magna, ut gravida metus posuere porta. Phasellus luctus fringilla augue, nec dictum purus aliquam at." />
        </MessagesContainer>

        <SendMessageContainer></SendMessageContainer>
      </MainContainer>
    </>
  );
}

export default Contact;
