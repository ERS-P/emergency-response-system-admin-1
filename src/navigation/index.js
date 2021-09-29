import React, { useState, useContext } from "react";
import { Base } from "../components/gen";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "../context";
import AuthNavigation from "./AuthNavigation";

const Navigator = () => {
  const { appState } = useContext(AppContext);
  const { isLoggedIn } = appState;
  // const isLoggedIn = true;
  // console.log(appState);

  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flex: 1,
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        {!isLoggedIn && <AuthNavigation />}
        {isLoggedIn && <Base />}
      </div>
    </BrowserRouter>
  );
};

export default Navigator;
