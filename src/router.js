import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Register from "./pages/Register";
import { isSignedIn } from "./services/security";
import UserScreen from "./pages/UserScreen";
import Teste from "./pages/Teste";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Message from "./pages/Message";

function PrivateRoute({ children, ...rest }) {
  if (isSignedIn()) {
    return <Route {...rest}>{children}</Route>;
  } else {
    return <Redirect to="/" />;
  }
}

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <PrivateRoute path="/Post">
          <Post />
        </PrivateRoute>

        <PrivateRoute path="/feed">
          <Feed />
        </PrivateRoute>
        <PrivateRoute path="/find/:type/:id">
          <UserScreen />
        </PrivateRoute>

        <PrivateRoute path="/contact/:idChat">
          <Message />
        </PrivateRoute>

        <Route path="/teste">
          <Teste />
        </Route>

        <PrivateRoute path="/contact">
          <Contact />
        </PrivateRoute>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
