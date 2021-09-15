import React, { createContext, useReducer, useEffect, useState } from "react";
// import firebase from "firebase";
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

  function submitTips({ title, description, setLoading }) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) dd = "0" + mm;
    if (mm < 10) mm = "0" + mm;
    today = mm + "/" + dd + "/" + yyyy;
    var time = new Date()
      .toLocaleTimeString()
      .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");

    // firebase
    //   .database()
    //   .ref("tips")
    //   .set({
    //     title: title,
    //     description: description,
    //     timeStamp: time,
    //     author: "",
    //   })
    //   .then(() => {
    //     setLoading(false);
    //   });
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

  console.log(auth);

  return (
    <AppContext.Provider
      value={{
        appState,
        appDispatch,
        signup,
        login,
        resetPassword,
        submitTips,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, Provider };
