import React, { useContext } from "react";
import "../../css/map.css";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import geodata from "../../assets/geo/geodata.json";
import { AppContext } from "../../context";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [-0.19135476308435026, 5.572559669061878],
      zoom: 12,
    };
  }

  static contextType = AppContext;

  componentDidMount() {
    const { appState } = this.context;
    console.log(appState, "from class");

    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: process.env.REACT_APP_MAPSTYLE_URL,
      center: this.state.center,
      zoom: this.state.zoom,
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving",
    });

    const nav = new mapboxgl.NavigationControl({
      visualizePitch: true,
    });
    map.addControl(nav, "bottom-right");

    map.addControl(directions, "top-left");

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );

    appState.reports.forEach(({ postRegion }) => {
      const marker = new mapboxgl.Marker()
        .setLngLat([postRegion.longitude, postRegion.latitude])
        .addTo(map);
    });
  }
  render() {
    return (
      <div
        ref={el => {
          console.log(el);
          return (this.mapWrapper = el);
        }}
        className="mapWrapper"
      />
    );
  }
}

export default Map;
