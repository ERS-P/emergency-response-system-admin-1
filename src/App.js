import React from "react"
import './App.css';
import { Base } from "../src/components/gen"
import {BrowserRouter, BrowserRouter as Router} from "react-router-dom"


function App() {
  return (
    <BrowserRouter >
      <div style={{display: "flex", flex: 1, minHeight: "100vh", flexDirection: "column"}}>
        <Base />
      </div>
   </BrowserRouter>
  );
}

export default App;
