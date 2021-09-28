import React, { useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import Table from "./Table";
import { Button } from "../gen/";

function Sheet() {
  const [page, setPage] = useState("compose");

  function togglePage() {
    if (page === "compose") {
      setPage("view");
    } else {
      setPage("compose");
    }
  }

  function buttonText() {
    if (page === "compose") {
      return "See all";
    } else {
      return "Compose";
    }
  }

  return (
    <Stylesheet>
      <div id="head">
        <p>Tips</p>
        <Button color="purple_0" onClick={togglePage} title={buttonText()} />
      </div>
      <div id="body">{page === "compose" ? <Form /> : <Table />}</div>
    </Stylesheet>
  );
}

export default Sheet;

const Stylesheet = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10em;
  box-shadow: 0px 41px 32px 0px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: 0px 41px 32px 0px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 41px 32px 0px rgba(0, 0, 0, 0.09);

  p {
    margin: 0;
  }

  #head {
    background-color: white;
    padding: 1.5em;
    display: flex;
    justify-content: space-between;
  }

  #body {
    background: #f8fafc;
    padding: 1.8em;
  }
`;
