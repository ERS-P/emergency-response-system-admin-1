import React from "react";
import "./App.css";
import Navigator from "./navigation/";
import { Provider } from "./context";
// import

function App() {
  return (
    <Provider>
      <Navigator />
    </Provider>
  );
}

export default App;
