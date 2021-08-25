import React from "react";
import "../../css/map.css";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import geodata from "../../assets/geo/geodata.json";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
// const parsedgeodata = JSON.parse(geodata)
console.log(geodata.features[0].geometry.coordinates);

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.fetcher = this.fetcher.bind(this);
    this.state = {
      places: geodata.features[0].geometry.coordinates,
    };
  }

  fetcher = (...args) => fetch(...args).then(res => res.json());

  //   data =

  //   url =
  //     "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: process.env.REACT_APP_MAPSTYLE_URL,
      center: [-0.19135476308435026, 5.572559669061878],
      zoom: 12,
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

    this.state.places.forEach(place => {
      const marker = new mapboxgl.Marker()
        .setLngLat([place[0], place[1]])
        .addTo(map);
    });

    //     const marker = new mapboxgl.Marker()
    //       .setLngLat([-0.19135476308435026, 5.572559669061878])
    //       .addTo(map);
  }
  render() {
    return <div ref={el => (this.mapWrapper = el)} className="mapWrapper" />;
  }
}

export default Map;

// const [viewport, setViewport] = useState({
//     width: "100%",
//     height: "700px",
//     latitude: 52.6376,
//     longitude: -1.135171,
//     zoom: 12,
//   });
