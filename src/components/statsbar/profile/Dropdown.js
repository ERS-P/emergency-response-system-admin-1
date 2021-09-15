import React, { useContext, useRef, useEffect, useState } from "react";
import { AppContext } from "../../../context/index";
import styled from "styled-components";
import DropdownItem from "./DropdownItem";
import { ReactComponent as User } from "../../../assets/svgs/user.svg";
import { ReactComponent as Cog } from "../../../assets/svgs/cog.svg";
import { ReactComponent as Calendar } from "../../../assets/svgs/calendar.svg";
import { ReactComponent as Lifering } from "../../../assets/svgs/life-ring.svg";
import { ReactComponent as Running } from "../../../assets/svgs/running.svg";

function Dropdown(props) {
  const { appDispatch } = useContext(AppContext);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      props.setShow(false);
      //   alert("asd");
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <BottomSheet show={props.show}>
      <div id="top-section">
        <p id="welcome-note">WELCOME!</p>
      </div>
      <div id="list">
        <DropdownItem icon={User} title="My profile" />
        <DropdownItem icon={Cog} title="Settings" />
        <DropdownItem icon={Calendar} title="Activity" />
        <DropdownItem icon={Lifering} title="Support" />
        <div
          id="bottom-section"
          onClick={() => {
            appDispatch({
              type: "logout",
            });
          }}
        >
          <Running
            fill="#000000"
            style={{ width: ".9em", height: ".9em", marginRight: ".5em" }}
          />
          <p>Logout</p>
        </div>
      </div>
    </BottomSheet>
  );
}

export default Dropdown;

const BottomSheet = styled.div`
  @keyframes example {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  display: ${props => (props.show ? `initial` : `none`)};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border-radius: 0.5em;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 13px 21px 5px rgba(0, 0, 0, 0.27);
  box-shadow: 0px 13px 21px 5px rgba(0, 0, 0, 0.27);
  padding: 0;
  margin-top: 1em;
  animation-name: example;
  animation-duration: 0.5s;

  p {
    margin: 0;
    padding: 0;
  }

  #top-section {
    padding: 0.8em 1em;

    #welcome-note {
      font-size: 0.5em;
      margin: 0;
    }
  }

  #list {
    display: flex;
    flex-direction: column;

    #bottom-section {
      border-top: 0.1em solid #eaecef;
      margin-top: 0.2em;
      margin-bottom: 0.8em;
      display: flex;
      padding: 0.5em 1em;
      cursor: pointer;

      :hover {
        background-color: #eaecef;
      }

      p {
        font-size: 0.85em;
      }
    }
  }
`;
