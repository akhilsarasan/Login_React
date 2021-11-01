import React from "react";

function Main() {
  const cu = () => {
    window.location.pathname = "/create";
  };
  const ho = () => {
    window.location.pathname = "/home";
  };
  return (
    <div>
      <button onClick={cu}>create user</button>
      <button onClick={ho}>home</button>
    </div>
  );
}

export default Main;
