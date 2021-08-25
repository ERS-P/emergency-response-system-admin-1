import React, { createContext, useReducer, useEffect, useState } from "react";
import { reducer, initialState } from "./reducer";
import { auth } from "../firebase";
const AppContext = createContext({});

function Provider(props) {
  const [appState, appDispatch] = useReducer(reducer, initialState);
  const [currentUser, setCurrentUser] = useState();
  // console.log(appState, appDispatch, "ctx1");

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      appDispatch({
        type: "set_user",
        user,
      });
    });

    return unsubscribe;
  }, []);

  return (
    <AppContext.Provider
      value={{ appState, appDispatch, signup, login, resetPassword }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, Provider };
