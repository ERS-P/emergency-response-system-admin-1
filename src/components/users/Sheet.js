import React, { useState } from "react";
import styled from "styled-components";
import { TabButton, RTable, VTable } from ".";
// import Form from "./Form";
// import Table from "./Table";
import { Button } from "../gen/";

function Sheet() {
  const [page, setPage] = useState("victims");

  function togglePage(arg) {
    setPage(arg);
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
        <div id="tabs">
          <TabButton
            active={page.match("victims")}
            title="Victims"
            onClick={() => togglePage("victims")}
          />
          <TabButton
            title="Respondents"
            onClick={() => togglePage("respondents")}
            active={page.match("respondents")}
            // style={{
            //   background: page === "respondents" ? "#F3F4F6" : "transparent",
            // }}
          />
        </div>
      </div>
      <div id="body">
        {page === "victims" && <VTable />}
        {page === "respondents" && <RTable />}
      </div>
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
    padding: 3em 1em 1em 1em;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    background: rgb(229, 231, 235);
    background: rgb(239, 246, 255);
    background: linear-gradient(
      0deg,
      rgba(239, 246, 255, 1) 0%,
      rgba(255, 255, 255, 1) 50%
    );

    #tabs {
      // border: 1px solid black;
      display: flex;
    }
  }

  #body {
    background: #f9fafb;
    padding: 1.8em;
  }
`;
