import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const initialState = {
  isLoggedIn: false,
  currentUser: {},
};

// useEffect(() => {
//   const unsubscribe = auth.onAuthStateChanged(user => {
//     setCurrentUser(user);
//   });

//   return unsubscribe;
// }, []);

export const reducer = (state, action) => {
  const { type, payload, user } = action;

  switch (type) {
    case "login":
      return {
        ...state,
        isLoggedIn: true,
      };

    case "logout":
      return {
        ...state,
        isLoggedIn: false,
      };

    case "set_user":
      return {
        ...state,
        currentUser: user,
      };

    // case "signin":
    //   return state;

    // case "signup":
    //   return state;

    // case "reset_password":
    //   return state;

    default:
      return state;
  }
};
