import React, { useContext, useRef, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import routes from "../../../navigation/routes";
import { AppContext } from "../../../context/index";
import RightProfile from "./RightProfile";

const BottomSheet = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2em 2.2em;

  p {
    margin: 0;
  }

  .pagetitle {
    color: white;
    font-weight: 900;
  }

  }
`;

function Profile() {
  const { appState } = useContext(AppContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const { currentUser } = appState;

  return (
    <BottomSheet onClick={() => setShowDropdown(true)}>
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

      <RightProfile
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
      />
    </BottomSheet>
  );
}

export default Profile;
