import React from "react";
import styled from "styled-components";
import Profile from "./profile/";
import Stats from "./stats/";
import Content from "../content/";

const Page = styled.div`
  // border: 1px solid black;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 99.9%;
  display: flex;
  flex-direction: column;
`;

const index = () => {
  return (
    <Page>
      <Profile />
      <Stats />
      <Content />
    </Page>
  );
};

export default index;
