import React from "react";
import styled from "styled-components";
import Map from "./MapBox";
import MapClassComponent from "./MapClassComponent";

const MapContainer = () => {
  return (
    <div
      style={{
        width: "100%",
        // border: "1px solid black",
        minHeight: "700px",
      }}
    >
      {/* <Map /> */}
      <MapClassComponent />
    </div>
  );
};

export default MapContainer;
