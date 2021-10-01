import React from "react";
import styled from "styled-components";
import Map from "./MapBox";
import Map1 from "./MapBox1";
import MapClassComponent from "./MapClassComponent";

const MapContainer = () => {
  return (
    <div
      style={{
        width: "100%",
        border: "1px solid black",
        minHeight: "700px",
      }}
    >
      {/* <Map1 /> */}
      {/* <Map /> */}
      {/* <MapClassComponent /> */}
    </div>
  );
};

export default Map1;
