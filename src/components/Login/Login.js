import React, { useState } from "react";
import { userContext } from "../../Utils/Context";
import AuthForm from "./AuthForm";
import Main from "../Main/Main";
import NavBar from "../Main/NavBar";
function Login() {
  const { Provider } = userContext;
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([]);
  const contextValues = { loggedIn, setLoggedIn, data, setData };
  return (
    <Provider value={contextValues}>
      <NavBar />
      {loggedIn ? <Main /> : <AuthForm />}
    </Provider>
  );
}

export default Login;
