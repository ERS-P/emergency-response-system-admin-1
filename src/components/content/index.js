import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import routes from "../../navigation/routes";
import { getEmergencyData1 } from "../../api/auth";
import { AppContext } from "context";

const BottomSheet = styled.div`
  padding: 1em 2.2em;
  // border: 1px solid red;
`;

function Content() {
  const { appState, appDispatch } = useContext(AppContext);

  useEffect(() => {
    getEmergencyData1(saveReports);
  }, []);

  return (
    <BottomSheet>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
      </Switch>
    </BottomSheet>
  );

  function saveReports(arr) {
    appDispatch({
      type: "set_reports",
      payload: {
        reports: arr,
      },
    });
  }
}

export default Content;
