import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Table from "./table";
import { getEmergencyData, getEmergencyData1 } from "../../api/auth";
import { AppContext } from "../../context";

function Sheet() {
  const { appDispatch } = useContext(AppContext);

  useEffect(() => {
    // getEmergencyData(saveData);
    getEmergencyData1(globalSave);
  }, []);

  return (
    <Stylesheet>
      <div id="head">
        <p>Emergency Report</p>
      </div>
      <Table />
    </Stylesheet>
  );

  function saveData1(data) {
    console.log(data, "save data 1");
  }

  function globalSave(arr) {
    appDispatch({
      type: "set_reports",
      payload: {
        reports: arr,
      },
    });
  }

  function saveData(data) {
    const entries = data;
    const arr = [];
    for (const key in entries) {
      arr.push(entries[key]);
    }
    appDispatch({
      type: "set_reports",
      payload: {
        reports: arr,
      },
    });
  }
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
