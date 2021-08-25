import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import routes from "../../../navigation/routes";
import pfp from "../../../assets/img/pfp.png";
import Dropdown from "./Dropdown";

const BottomSheet = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5em 2.2em;

  p {
    margin: 0;
  }

  .pagetitle {
    color: white;
    font-weight: 600;
  }

  #right-div {
    position: relative;
    // border: 1px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;

    #name {
      color: white;
      font-weight: 600;
      margin: 0 0.5em;
      font-size: 0.9em;
    }

    #pfp {
      width: 2em;
      height: 2em;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  }
`;

const index = () => {
  return (
    <BottomSheet>
      <div className="pagetitle">
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.sidebar />}
            />
          ))}
        </Switch>
      </div>

      <div id="right-div">
        <img src={pfp} id="pfp" />
        <p id="name">Philip Amankwah</p>
        <Dropdown />

        {/* <div id="drop-down">
          <p id="welcome-note">WELCOME!</p>
          <ul>
            <li>My profile</li>
            <li>Settings</li>
            <li>Activity</li>
            <li>Support</li>
            <li>Logout</li>
          </ul>
        </div> */}
      </div>
    </BottomSheet>
  );
};

export default index;
