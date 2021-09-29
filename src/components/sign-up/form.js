import { Button } from "components/gen";
import React from "react";
import styled from "styled-components";
import { ReactComponent as Lock } from "../../assets/svgs/lock-alt.svg";
import { ReactComponent as Envelope } from "../../assets/svgs/envelope.svg";
import { ReactComponent as Phone } from "../../assets/svgs/phone.svg";
import { ReactComponent as UserCircle } from "../../assets/svgs/user-circle.svg";
import { ReactComponent as Github } from "../../assets/img/icons/common/github.svg";
import { ReactComponent as Google } from "../../assets/img/icons/common/google.svg";

function form() {
  return (
    <StyledForm>
      <form className="signin-form">
        <div className="form-head">
          <div id="sub">
            <p>Sign up with</p>
          </div>

          <div id="alt-signin">
            <div>
              <Github
                style={{
                  width: "1em",
                  height: "1em",
                  margin: ".5em",
                }}
              />
              <p>Github</p>
            </div>
            <div>
              <Google
                style={{
                  width: "1em",
                  height: "1em",
                  margin: ".5em",
                }}
              />
              <p>Google </p>
            </div>
          </div>
        </div>

        <div className="form-body">
          <div id="body-sub">
            <p>Or sign up with credentials</p>
          </div>

          <div id="input-field">
            <div
              style={{
                // border: "1px solid black",
                display: "flex",
                justifyContent: "space-between",
                padding: 0,
              }}
            >
              <div className="input-bracket">
                <div className="icon-place">
                  <UserCircle
                    fill="#ACB5BD"
                    style={{
                      width: "1em",
                      height: "1em",
                    }}
                  />
                </div>
                <div className="input-place">
                  {" "}
                  <input type="text" placeholder="First Name" />{" "}
                </div>
              </div>
              <div className="input-bracket">
                <div className="icon-place">
                  <UserCircle
                    fill="#ACB5BD"
                    style={{
                      width: "1em",
                      height: "1em",
                    }}
                  />
                </div>
                <div className="input-place">
                  {" "}
                  <input type="text" placeholder="Last Name" />{" "}
                </div>
              </div>
            </div>

            <div className="input-bracket">
              <div className="icon-place">
                <Envelope
                  fill="#ACB5BD"
                  style={{
                    width: "1em",
                    height: "1em",
                  }}
                />
              </div>
              <div className="input-place">
                {" "}
                <input type="email" placeholder="Email" />{" "}
              </div>
            </div>

            <div className="input-bracket">
              <div className="icon-place">
                <Phone
                  fill="#ACB5BD"
                  style={{
                    width: "1em",
                    height: "1em",
                  }}
                />
              </div>
              <div className="input-place">
                {" "}
                <input type="tel" placeholder="Phone" />{" "}
              </div>
            </div>

            <div className="input-bracket">
              <div className="icon-place">
                <Lock
                  fill="#ACB5BD"
                  style={{
                    width: "1em",
                    height: "1em",
                  }}
                />
              </div>
              <div className="input-place">
                {" "}
                <input type="password" placeholder="Password" />{" "}
              </div>
            </div>

            <div
              style={{
                // border: "1px solid black",
                display: "flex",
                justifyContent: "space-between",
                padding: 0,
              }}
            >
              <div className="input-bracket">
                <div className="icon-place">
                  <UserCircle
                    fill="#ACB5BD"
                    style={{
                      width: "1em",
                      height: "1em",
                    }}
                  />
                </div>
                <div className="input-place">
                  {" "}
                  <input type="text" placeholder="First Name" />{" "}
                </div>
              </div>
              <div className="input-bracket">
                <div className="icon-place">
                  <UserCircle
                    fill="#ACB5BD"
                    style={{
                      width: "1em",
                      height: "1em",
                    }}
                  />
                </div>
                <div className="input-place">
                  {" "}
                  <input type="text" placeholder="Last Name" />{" "}
                </div>
              </div>
            </div>
          </div>
          <div id="rem-field">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <div id="submit-field">
            <Button
              textColor="#ffffff"
              title="Create Account"
              color="blue_0"
              padding=".8em 1.5em"
            />
          </div>
        </div>
      </form>
    </StyledForm>
  );
}

export default form;

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  padding: 1% 35%;

  p {
    color: #8898aa !important;
  }

  .signin-form {
    background: #f8fafc;
    color: black;
    width: 100%;
    border-radius: 0.5em;
    height: 100%;

    .form-head {
      padding: 0.5em 0;
      border-bottom: 0.1em solid #e5e7eb;
      #sub {
        padding: 1.5em 0;
        p {
          text-align: center;
          font-size: 0.8em;
        }
      }

      #alt-signin {
        padding: 0.5em 0 2em 0;
        display: flex;
        justify-content: center;

        div {
          margin: 0 0.5em;
          border: 1px solid #e5e7eb;
          background: #ffffff;
          padding: 0.2em 1em;
          cursor: pointer;
          display: flex;
          align-items: center;
          border-radius: 0.5em;
          box-shadow: -2px 10px 10px -8px rgba(209, 213, 219, 1);
          -webkit-box-shadow: -2px 10px 10px -8px rgba(209, 213, 219, 1);
          -moz-box-shadow: -2px 10px 10px -8px rgba(209, 213, 219, 1);
        }
      }
    }

    .form-body {
      padding: 2em 0 3em 0;

      #body-sub {
        p {
          text-align: center;
          font-size: 0.8em;
        }
      }

      #input-field {
        display: flex;
        flex-direction: column;
        padding: 0.5em 3em;

        .input-bracket {
          padding: 0.2em 0;
          margin: 0.5em 0;
          display: flex;
          background: #ffffff;
          border-radius: 0.5em;
          box-shadow: -2px 10px 5px -8px rgba(209, 213, 219, 0.28);
          -webkit-box-shadow: -2px 10px 5px -8px rgba(209, 213, 219, 0.28);
          -moz-box-shadow: -2px 10px 5px -8px rgba(209, 213, 219, 0.28);

          .icon-place {
            padding: 0.5em;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .input-place {
            width: 100%;
            display: flex;
          }
        }

        input {
          margin: 0;
          flex: 1;
          padding: 0.8em 0;
          border: 0;
          background: transparent;
          font-size: 0.95em;
          color: #8898aa;

          :focus {
            outline: none;
          }

          ::placeholder {
            color: #8898aa;
            font-size: 0.95em;
          }
        }
      }
    }

    #rem-field {
      display: flex;
      padding: 0.5em 3em;
      align-items: center;

      p {
        font-size: 0.95em;
      }

      input {
        margin: 0;
        margin-right: 1em;
      }
    }

    #submit-field {
      display: flex;
      justify-content: center;
      padding: 2em 0 2.5em 0;

      p {
        color: #ffffff !important;
      }
    }
  }
`;
