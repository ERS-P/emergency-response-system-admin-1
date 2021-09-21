import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const TabEl = styled(NavLink)`
  text-decoration: none;

  padding: 0.2em 1em;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1em;

  p {
    text-decoration: none;
    margin: 0;
    font-size: 0.9em;
    color: #7f7f7f;
  }

  &:hover {
    p {
      color: #000000;
    }
  }
`;

const Tab = props => {
  return (
    <TabEl
      activeStyle={{
        borderLeft: ".15em solid #5e71e4",
        color: "#000000 !important",
      }}
      exact={true}
      to={props.to}
    >
      <props.icon
        fill={props.color}
        style={{ height: ".9em", width: ".9em" }}
      />

      <div style={{ marginLeft: "1em" }}>
        <p>{props.title}</p>
      </div>
    </TabEl>
  );
};

export default Tab;
