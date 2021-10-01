import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const initialState = {
  isLoggedIn: false,
  currentUser: {},
  reports: [],
};

export const reducer = (state, action) => {
  const { type, payload, user } = action;

  switch (type) {
    case "login":
      return {
        ...state,
        isLoggedIn: true,
        currentUser: user,
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

    case "set_reports":
      return {
        ...state,
        reports: payload.reports,
      };

    default:
      return state;
  }
};
