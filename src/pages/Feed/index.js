import {
  NavigationBar,
  SearchBar,
  FeedContainer,
  ServiceCard,
  ImageTitle,
  CardImage,
  Urgency,
  AddPostButton,
  OverlayCard,
} from "./styles";
import { api } from "../../services/api";
import SearchIcon from "../../assets/search_icon.svg";

import UrgencyImage from "../../assets/urgency.svg";
import HighUrgencyImage from "../../assets/highUrgency.svg";
import { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router";
import { getUser, signOut } from "../../services/security";
import { format } from "date-fns"
import SignOut from "../../assets/sign_out.svg";
import Logo from "../../assets/logo_branca.png";
import Alert from "../../components/Alert";

function ServiceCards({ post, history, setMessage, services, signedUser }) {
  const cardRef = useRef();

  const [typeUser, setTypeUser] = useState("clients");

  const [contact, setContact] = useState("Aceitar");

  const [isAccepted, setIsAccepted] = useState(false);

  // const [acceptedService, setAcceptedService] = useState(false);

  // const [acceptedService, setAcceptedService] = useState();

  useEffect(() => {
    setTypeUser(post.User.is_freelancer ? "freelancers" : "clients");
    // cardRef.current.style.border = "solid 12px red";
  }, []);

  const sendToUserPage = () => {
    history.push(`/find/${typeUser}/${post.User.id}`);
  };

  console.log({ card: post.id, serviço: services });

  const startService = async () => {
    try {
      const response = await api.post(`/post/${post.id}/service`);

      console.log(response);

      setMessage({
        title: "Sucesso",
        description: `O usuário já foi notificado sobre sua solicitação!`,
      });
      setContact("Aceito!");
      // alert("sucesso");
    } catch (error) {
      setMessage({
        title: "Ops...",
        description: error.response.data.Unauthorized,
      });
      console.log();
    }
    // console.log(signedUser);
  };

  let progress;
  let acceptedService;
  let havePermission = true;

  // if (services.find((s) => s.Post.id === post.id)) {
  //   //Se é o dono do post

  //   if (signedUser.user.id === post.User.id) {
  //     progress = "Em andamento";
  //     // console.log(acceptedService);
  //   } else {
  //     return null;
  //   }
  // }

  //Verificando se o serviço já foi aceito
  services.find((s) => {
    if (s.Post.id === post.id) {
      if (
        signedUser.user.id == post.User.id ||
        signedUser.user.id == s.User.id
      ) {
        cardRef.current.style.display = "flex";
      } else havePermission = false;

      //Guardando dentro da variável o serviço
      acceptedService = s;

      console.log({ serviço: acceptedService });
    }
  });

  return (
    <>
      {havePermission && (
        <ServiceCard>
          <OverlayCard ref={cardRef}>
            <h1>Em progresso</h1>
          </OverlayCard>
          {progress}
          {post.urgency >= 4 ? (
            <Urgency
              style={
                post.urgency === 4
                  ? { color: "var(--urgency)" }
                  : { color: "var(--highUrgency)" }
              }
            >
              <h2>URGENTE</h2>
              {post.urgency === 4 ? (
                <>
                  <img alt="Imagem de nivel de urgência" src={UrgencyImage} />
                </>
              ) : (
                <>
                  <img
                    alt="Imagem de nivel de urgência"
                    src={HighUrgencyImage}
                  />
                </>
              )}
            </Urgency>
          ) : (
            ""
          )}

          <ImageTitle>
            <div onClick={sendToUserPage}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC" />
            </div>
            <label>
              <h4 onClick={sendToUserPage}>
              por {post.User.name === signedUser.user.name ? "Você" : post.User.name} às {format(new Date(post.updatedAt), "dd/MM/yyyy 'às' HH:mm")}
              </h4>
              <h1>{post.title}</h1>
            </label>
          </ImageTitle>
          {post.image ? (
            <>
              <CardImage src={post.image} />
            </>
          ) : (
            ""
          )}
          <p>{post.description}</p>
          <label>
            {/*Verificando se o usuário que está logado é o dono da postagem, 
          caso seja ele tem a opção de entrar em contato com o profissional que aceitou sua postage*/}
            {signedUser.user.id !== post.User.id && (
              <button
                onClick={() => {
                  if (window.confirm("Tem certeza?")) {
                    startService();
                  }
                }}
              >
                {contact}
              </button>
            )}
          </label>
        </ServiceCard>
      )}
    </>
  );
}

function Feed() {
  const history = useHistory();

  const [message, setMessage] = useState();

  const [cards, setCards] = useState([]);

  const [search, setSearch] = useState("");

  const [reload, setReload] = useState(null);

  const [services, setServices] = useState([]);

  const [empty, setIsEmpty] = useState("");

  const signedUser = getUser();

  const loadCards = async () => {
    try {
      const response = await api.get("/feed");

      if (response.data == "") {
        setIsEmpty(
          "Não nenhum serviço atualmente, experimente fazer uma solicitação"
        );
        // alert("sim");
      }

      setCards([...response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const loadServices = async () => {
    try {
      const response = await api.get("/services");

      setServices([...response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadCards();
    loadServices();
  }, [reload]);

  const handleSearch = async (e) => {
    setSearch(e.target.value);

    if (e.target.value.length === 0) setReload(Math.random());

    if (e.target.value.length < 4) return;

    try {
      const response = await api.get("/search", {
        params: { keyword: e.target.value },
      });

      setCards(response.data);
    } catch (error) {
      // alert(error);
      console.error(error);
    }
  };

  const handleSignOut = () => {
    signOut();

    history.replace("/");
  };

  return (
    <>
      <Alert message={message} type="error" handleClose={setMessage} />
      <NavigationBar>
        <label>
          <img
            onClick={() =>
              history.push(
                `/find/${signedUser.isFreelancer ? "freelancers" : "clients"}/${
                  signedUser.user.id
                }`
              )
            }
            alt="Imagem de Perfil"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC"
          />
          <SearchBar onChange={handleSearch} value={search}>
            <input placeholder="Pesquisar" />
            <img src={SearchIcon} alt="Iconde de busca" />
          </SearchBar>
        </label>

        <img src={SignOut} alt="Icone de sair" onClick={handleSignOut} />
        <img alt="Logo" src={Logo} />
      </NavigationBar>

      <FeedContainer>
        {empty}
        {cards.map((p) => (
          <ServiceCards
            post={p}
            history={history}
            setMessage={setMessage}
            services={services}
            signedUser={signedUser}
          />
        ))}

        {/* <ServiceCards image="teste" /> */}

        {/* <ServiceCards /> */}
      </FeedContainer>
      <AddPostButton onClick={() => history.push("/post")}>+</AddPostButton>
    </>
  );
}

export default Feed;
