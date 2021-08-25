import React from "react";
import styled from "styled-components";
import Statsbar from "../statsbar";

const Div = styled.div`
  background: rgb(17, 202, 239);
  background: linear-gradient(
    90deg,
    rgba(17, 202, 239, 1) 0%,
    rgba(17, 202, 239, 1) 0%,
    rgba(18, 163, 239, 1) 100%
  );
  display: flex;
  flex: 0.38;
  flex-direction: column;
`;

const Sheet = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 0.86,
        background: "#f8f9ff",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          background: "#f8f9ff",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Div>
          <Statsbar />
        </Div>
      </div>
    </div>
  );
};

export default Sheet;
