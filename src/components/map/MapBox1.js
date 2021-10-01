import React, { useRef, useEffect, useState, useContext } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import { AppContext } from "../../context";
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function MapBoxComponent() {
  const { appState } = useContext(AppContext);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-0.19135476308435026);
  const [lat, setLat] = useState(5.572559669061878);
  const [zoom, setZoom] = useState(12);

  //   console.log(appState.reports[0].coordinates._lat);

  useEffect(() => {
    if (map.current) return;
    const mapboxInstance = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false,
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving",
    });

    const nav = new mapboxgl.NavigationControl({
      visualizePitch: true,
    });
    mapboxInstance.addControl(nav, "bottom-right");

    mapboxInstance.addControl(directions, "top-left");

    mapboxInstance.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );

    appState.reports.forEach(({ coordinates }) => {
      //   console.log(coordinates._lat);
      const marker = new mapboxgl.Marker()
        .setLngLat([coordinates?._long, coordinates?._lat])
        .addTo(mapboxInstance);
    });
    // console.log(appState.reports);

    map.current = mapboxInstance;
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    // console.log(new mapboxgl());
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div
    //   style={{
    //     width: "100%",
    //     border: "1px solid black",
    //     minHeight: "700px",
    //   }}
    >
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default MapBoxComponent;
