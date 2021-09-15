import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const initialState = {
  isLoggedIn: false,
  currentUser: {},
};

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
        currentUser: undefined,
      };

    case "set_user":
      return {
        ...state,
        currentUser: user,
      };

    default:
      return state;
  }
};
