import React from "react";
import "./App.css";
import Navigator from "./navigation/";
import { Provider } from "./context";

function App() {
  return (
    <Provider id="root">
      <Navigator />
    </Provider>
  );
}

export default App;
