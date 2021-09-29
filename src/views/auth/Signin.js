import React from "react";
import styled from "styled-components";
import bg from "../../assets/svgs/auth-bg.svg";
import { Nav, Banner, Form } from "../../components/sign-in";
import { Footer } from "components/gen";

function Signin() {
  return (
    <StyledPage
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Nav />
      <Banner />
      <Form />
      <div className="meta">
        <p>Forgot Password?</p>
      </div>
      <div id="foot">
        <Footer />
      </div>
    </StyledPage>
  );
}

export default Signin;

const StyledPage = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  color: white;

  .meta {
    // border: 1px solid white;
    padding: 0 38%;

    p {
      margin: 0;
      color: white;
      font-size: 0.8em;
      cursor: pointer;
      display: inline;
    }
  }

  #foot {
    padding: 1% 20%;
  }
`;
