import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from "../../context/index";

function Signup(props) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { signup, appDispatch } = useContext(AppContext);
  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        firstNameRef.current.value,
        lastNameRef.current.value
      );

      history.push("/sign-in");
    } catch {
      setError1("Failed to create an account");
    }
    setLoading(false);
  }
  return (
    <SignupStyled>
      <div className="sign-up">
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
        <form id="sign-up-form" onSubmit={handleSubmit}>
          <label>Sign up</label>
          {error1 && (
            <span
              style={{
                color: "red",
                fontFamily: "Raleway-extra-bold",
                textAlign: "center",
              }}
            >
              {error1}
            </span>
          )}
          <div className="names">
            <input type="text" placeholder="first name" ref={firstNameRef} />
            <input
              type="text"
              placeholder="last name"
              style={{ marginLeft: "15px" }}
              ref={lastNameRef}
            />
          </div>
          <input placeholder="E-mail" type="email" ref={emailRef} />
          <input
            type="password"
            placeholder="Create password"
            ref={passwordRef}
          />

          {/* <div className="remember">
            <div>
              <span>
                <strong>Password must be at least 8 characters</strong>
              </span>
            </div>
          </div> */}
          <input
            type="password"
            placeholder="Confirm password"
            ref={confirmPasswordRef}
          />
          {error && (
            <span style={{ color: "red", fontFamily: "Raleway-extra-bold" }}>
              {error}
            </span>
          )}
          <button disabled={loading} className="sign-in-btn" type="submit">
            Sign up
          </button>

          <div className="regis">
            <span>Already a member?</span>
            <span>
              <Link to="/">Sign in</Link>
            </span>
          </div>
        </form>
      </div>
    </SignupStyled>
  );
}

export default Signup;

const SignupStyled = styled.div`
  .sign-up {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 110px;
    width: 30%;
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

  #sign-up-form {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }

  #sign-up-form input {
    width: 100%;
    height: 34px;
    margin-top: 20px;
    padding-left: 10px;
    border-radius: 5px;
    font-family: Raleway-medium;
    font-size: 14px;
  }

  .sign-up-btn {
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

  .remember {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    font-family: Raleway-medium;
    font-size: 13px;
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

  .names {
    display: flex;
    flex-direction: row;
    width: 104%;
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
`;
