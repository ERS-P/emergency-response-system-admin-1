import React from 'react'
import styled from "styled-components"
import {Route, Switch} from "react-router-dom"
import routes from "../../navigation/routes"

const BottomSheet = styled.div`
    padding: 1em 2.2em;
    border: 1px solid red;
`

const index = () => {
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
    )
}

export default index
