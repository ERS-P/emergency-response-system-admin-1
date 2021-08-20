import React from 'react'
import styled from 'styled-components'
import Map from "./MapBox"



const MapContainer = () => {
    return (
        <div style={{
            width: "100%",
            border: "1px solid black",
            minHeight: "700px"
        }} >
            <Map />
        </div>
    )
}

export default MapContainer
