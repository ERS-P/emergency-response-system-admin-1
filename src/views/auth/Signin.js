import React, { useRef, useState, useContext } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from "../../context/index";

function SignIn(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { login, appDispatch } = useContext(AppContext);
  // console.log(response);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      appDispatch({
        type: "login",
      });
      history.push("/");
    } catch {
      setError("Wrong Email or Password !!");
    }
    setLoading(false);
  }
  return (
    <SigninStyled>
      <div className="sign-in">
        <ul>
          <li>
            <img
              src={require("../../assets/svgs/logo.svg").default}
              alt="logo"
              style={{ width: "40px", height: "40px" }}
            />
          </li>
          <li>
            <p>alert ghana</p>
          </li>
        </ul>
        <form id="sign-in-form" onSubmit={handleSubmit}>
          <label>Sign in</label>
          {error && (
            <span
              style={{
                color: "red",
                textAlign: "center",
                fontFamily: "Raleway-extra-bold",
              }}
            >
              {error}
            </span>
          )}
          <input placeholder="E-mail" type="email" ref={emailRef} />
          <input type="password" placeholder="Password" ref={passwordRef} />

          <div className="remember">
            <div>
              <input className="check" type="checkbox" />
              <span style={{ paddingLeft: "28px" }}>Remember Me</span>
            </div>
            <span>
              <a href="/reset">Forgot Password?</a>
            </span>
          </div>

          <button disabled={loading} className="sign-in-btn" type="submit">
            Sign in
          </button>

          <div className="regis">
            <span>Don't have an account?</span>
            <span>
              <Link to="/sign-up">Sign up</Link>
            </span>
          </div>
          {/* <div className="alt">
                <p>or</p>
                <p>Sign in with</p>
                <ul>
                    <li><a href="/"><img src={require('../../assets/images/Google.png').default} alt="google"/></a></li>
                    <li><a href="/"><img src={require('../../assets/images/Facebook Circled.png').default} alt="facebook"/></a></li>
                    <li><a href="/"><img src={require('../../assets/images/GitHub.png').default} alt="github"/></a></li>
                </ul>
                </div>  */}
        </form>
      </div>
    </SigninStyled>
  );
}

export default SignIn;

const SigninStyled = styled.div`
  .sign-in {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 110px;
    width: 30%;
    // border: 1px solid black;
  }

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: Raleway-extra-bold;
    font-size: 15px;
    letter-spacing: 1px;
    color: #152e87;
  }

  li {
    text-transform: uppercase;
    text-decoration: none;
    padding-right: 10px;
  }

  #sign-in-form {
    display: flex;
    flex-direction: column;
    margin-top: 150px;
  }

  #sign-in-form input {
    width: 100%;
    height: 34px;
    margin-top: 20px;
    padding-left: 10px;
    border-radius: 5px;
    font-family: Raleway-medium;
    font-size: 14px;
    border-color: #152e87;
  }

  .sign-in-btn {
    width: 104%;
    height: 38px;
    background-color: #152e87;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 15px;
    font-family: Raleway-bold;
    font-size: 18px;
    border-radius: 4px;
  }

  #sign-in-form input.check {
    width: 18px;
    height: 18px;
    margin-top: 0px;
    position: absolute;
  }

  .remember {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    font-family: Raleway-medium;
  }
  .remember a {
    text-decoration: none;
    color: #152e87;
  }

  .alt {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Raleway-medium;
  }
  .alt a img {
    width: 38px;
    height: 38px;
  }
  .regis {
    margin-top: 10px;
    font-family: Raleway-medium;
  }

  .regis a {
    text-decoration: none;
    padding-left: 4px;
    color: #152e87;
    font-family: Raleway-semi-bold;
  }
`;
