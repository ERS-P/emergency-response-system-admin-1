import React from 'react'
import { Switch, Route } from "react-router-dom"
import styled from 'styled-components'
import routes from "../../../navigation/routes"

// console.log(routes)

const BottomSheet = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.5em 2.2em;
    // border: 1px solid white;
    

    p {
        margin: 0;
    }

    .pagetitle {
        color: white;
        font-weight: 600;
    }

    #name {
        color: white;
        font-weight: 600;
    }
`

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

            <div>
                <p id="name" >Philip Amankwah</p>
            </div>
        </BottomSheet>
    )
}

export default index


        