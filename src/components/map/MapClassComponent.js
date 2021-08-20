import React from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class Map extends React.Component {
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [-73.985664, 40.748514],
      zoom: 12,
    });
  }
  render() {
    return <div ref={el => (this.mapWrapper = el)} className="mapWrapper" />;
  }
}

export default Map;
