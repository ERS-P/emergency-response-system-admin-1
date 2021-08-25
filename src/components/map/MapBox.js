import React, { useEffect, useRef, useState } from "react";
import ReactMapGL, {
  Marker,
  FlyToInterpolator,
  GeolocateControl,
  NavigationControl,
  Layer,
} from "react-map-gl";
import useSwr from "swr";
import useSupercluster from "use-supercluster";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
// import MapboxDirections from "@mapbox/mapbox-gl-directions";
// import custodyimg from "../images/custody.svg";

const geolocateControlStyle = {
  right: 10,
  top: 10,
};
const navigationControlStyle = {
  ...geolocateControlStyle,
  top: 50,
};

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "700px",
    latitude: 52.6376,
    longitude: -1.135171,
    zoom: 12,
  });
  const mapRef = useRef();

  //load and prepare data
  const url =
    "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
  const { data, error } = useSwr(url, fetcher);
  const crimes = data && !error ? data.slice(0, 2000) : [];
  const points = crimes.map(crime => ({
    type: "Feature",
    properties: {
      cluster: false,
      crimeId: crime.id,
      category: crime.category,
    },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(crime.location.longitude),
        parseFloat(crime.location.latitude),
      ],
    },
  }));

  //get map bounds
  const bounds = mapRef.current
    ? mapRef.current.getMap().getBounds().toArray().flat()
    : null;

  //get clusters
  const { clusters, supercluster } = useSupercluster({
    points,
    zoom: viewport.zoom,
    bounds,
    options: { radius: 75, maxZoom: 20 },
  });

  // console.log(clusters);

  //return map
  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={newViewport => setViewport(newViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle={process.env.REACT_APP_MAPSTYLE_URL}
      maxZoom={20}
      ref={mapRef}
    >
      {/* <Layer {...directions} /> */}
      {/* <Directions /> */}
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        auto
      />
      <NavigationControl style={navigationControlStyle} />
    </ReactMapGL>
  );
};

export default Map;
