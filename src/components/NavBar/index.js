import { useHistory } from "react-router-dom";
import { getUser, signOut } from "../../services/security";
import { NavigationBar, SearchBar } from "./styles";
import { useState } from "react";
import { api } from "../../services/api";

import Bell from "../../assets/bell.svg";
import Chat from "../../assets/chat.svg";
import Home from "../../assets/home.svg";
import SearchIcon from "../../assets/search_icon.svg";
import Profile from "../../assets/perfil.png";

function NavBar() {
  const history = useHistory();

  const signedUser = getUser();

  const [search, setSearch] = useState("");

  const [reload, setReload] = useState(null);

  const handleSearch = async (e) => {
    setSearch(e.target.value);

    if (e.target.value.length === 0) setReload(Math.random());

    if (e.target.value.length < 4) return;

    try {
      const response = await api.get("/search", {
        params: { keyword: e.target.value },
      });

      // setCards(response.data);
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
    <NavigationBar>
      <label>
        <SearchBar onChange={handleSearch} value={search}>
          <input placeholder="Pesquisar" />
          <img src={SearchIcon} alt="Iconde de busca" />
        </SearchBar>
      </label>
      <img src={Bell} alt="Imagem do sino" />
      <img
        src={Chat}
        alt="Icone de chat"
        id="chatImage"
        onClick={() => {
          history.push("/contact");
        }}
      />
      <div id="userBar">
        <h2>{signedUser.user.name}</h2>
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
            src={signedUser.user.image || Profile}
          />
        </label>
      </div>
      <img
        src={Home}
        alt="Imagem da home"
        onClick={() => history.push("/feed")}
      />
    </NavigationBar>
  );
}

export default NavBar;
