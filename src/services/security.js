import jwtDecode from "jwt-decode";
import { api } from "./api";

const USER_KEY = "@user";

export const signIn = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));

  //Setando o token como padrão em todas as requisições
  api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
};

export const signOut = () => {
  localStorage.removeItem(USER_KEY);

  api.defaults.headers.common["Authorization"] = undefined;
};

export const getUser = () => {
  const { client } = JSON.parse(localStorage.getItem(USER_KEY));

  return client;
};

export const setUser = (client) => {
  const user = JSON.parse(localStorage.getItem(USER_KEY));

  user.client = client;

  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const isSignedIn = () => {
  const user = JSON.parse(localStorage.getItem(USER_KEY));

  if (user && user.token) {
    //verificar se o token é válido
    const jwtDecoded = jwtDecode(user.token);

    const nowTime = (Date.now() / 1000) | 0;

    if (jwtDecoded.exp < nowTime) return signOut();

    api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
    return true;
  } else return false;
};
