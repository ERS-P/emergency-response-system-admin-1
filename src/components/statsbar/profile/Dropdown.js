import React from "react";
import styled from "styled-components";
import DropdownItem from "./DropdownItem";
import { ReactComponent as User } from "../../../assets/svgs/user.svg";
import { ReactComponent as Cog } from "../../../assets/svgs/cog.svg";
import { ReactComponent as Calendar } from "../../../assets/svgs/calendar.svg";
import { ReactComponent as Lifering } from "../../../assets/svgs/life-ring.svg";
import { ReactComponent as Running } from "../../../assets/svgs/running.svg";

function Dropdown() {
  return (
    <BottomSheet>
      <div id="top-section">
        <p id="welcome-note">WELCOME!</p>
      </div>
      <div id="list">
        <DropdownItem icon={User} title="My profile" />
        <DropdownItem icon={Cog} title="Settings" />
        <DropdownItem icon={Calendar} title="Activity" />
        <DropdownItem icon={Lifering} title="Support" />
        <div id="bottom-section">
          <DropdownItem icon={Running} title="Logout" />
        </div>
      </div>
    </BottomSheet>
  );
}

export default Dropdown;

const BottomSheet = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border-radius: 0.5em;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 13px 21px 5px rgba(0, 0, 0, 0.27);
  box-shadow: 0px 13px 21px 5px rgba(0, 0, 0, 0.27);
  padding: 0;

  p {
    margin: 0;
    padding: 0;
  }

  #top-section {
    // border: 1px solid black;
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
    }
  }
`;
