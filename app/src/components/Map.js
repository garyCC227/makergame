import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2FyeWNjMjI3IiwiYSI6ImNrZDJyaWRxbDFnZGcycXF5dm8wcnptdjQifQ.Aw920Zjcv8rr6ewAj3oe1A";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 77.6887,
      lat: 13.0194,
      zoom: 17,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      minZoom: 10,
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }

  render() {
    return (
      <div>
        <div
          className="sidebarStyle"
          style={{
            display: "inline-block",
            position: "absolute",
            top: " 0",
            right: "0",
            margin: "12px",
            backgroundColor: "#404040",
            color: "#ffffff",
            zIndex: "1",
            padding: " 6px",
            fontWeight: "bold",
          }}
        >
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
        <div
          ref={(el) => (this.mapContainer = el)}
          className="mapContainer"
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            height: "100vh",
          }}
        />
      </div>
    );
  }
}

export default Map;
