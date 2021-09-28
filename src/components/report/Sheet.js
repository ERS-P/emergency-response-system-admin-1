import React from "react";
import styled from "styled-components";
import Table from "./table";
import { Button } from "../gen/";

function Sheet() {
  return (
    <Stylesheet>
      <div id="head">
        <p>Emergency Reports</p>
      </div>
      <Table />
      {/* <div id="body">{page === "compose" ? <Form /> : <Table />}</div> */}
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
