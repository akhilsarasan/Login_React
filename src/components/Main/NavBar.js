import React, { useContext } from "react";
import { userContext } from "../../Utils/Context";
function NavBar() {
  const { loggedIn, setLoggedIn } = useContext(userContext);
  const submit = () => setLoggedIn(false);

  return <div>{loggedIn && <button onClick={submit}>logout</button>}</div>;
}

export default NavBar;
