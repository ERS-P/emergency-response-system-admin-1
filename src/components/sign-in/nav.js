import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function nav() {
  return (
    <Stylednav>
      <div className="title">
        <h2>ERS-ADMIN</h2>
      </div>
    </Stylednav>
  );
}

export default nav;

const Stylednav = styled.div`
  padding: 1.5em 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
  }

}
`;
