import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import geoFeatures from "assets/Bengaluru.geojson";
import InfoBar from "components/InfoBar";
import SearchBar from "./SearchBar";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2FyeWNjMjI3IiwiYSI6ImNrZDJyaWRxbDFnZGcycXF5dm8wcnptdjQifQ.Aw920Zjcv8rr6ewAj3oe1A";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 77.6887,
      lat: 13.0194,

      // test 2
      // lat: 45.137451890638886,
      // lng: -68.13734351262877,

      zoom: 10,
    };
  }

  componentDidMount() {
    //TODO: FOR debug only
    // const placeholder = document.getElementById("info");
    // ReactDOM.render(<InfoBar />, placeholder);
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/satellite-streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      // minZoom: 10,
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    this.loadCommunity(map);
  }

  loadCommunity(map) {
    map.on("load", function () {
      map.loadImage(
        "https://img.icons8.com/officexs/30/000000/marker.png",
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);
          // Add a GeoJSON source
          map.addSource("points", {
            type: "geojson",
            data: geoFeatures,
          });

          // Add a symbol layer
          map.addLayer({
            id: "communities",
            type: "symbol",
            source: "points",
            layout: {
              "icon-image": "custom-marker",
            },
          });

          //add pop-up
          map.on("click", "communities", function (e) {
            const placeholder = document.getElementById("info");

            //remove previous info bar, if info bar is opening
            if (placeholder.innerHTML !== "") {
              ReactDOM.unmountComponentAtNode(placeholder);

              //test
            }

            //add new info bar
            ReactDOM.render(<InfoBar features={e.features[0]} />, placeholder);
          });

          // Change the cursor to a pointer when the mouse is over the states layer.
          map.on("mouseenter", "communities", function () {
            map.getCanvas().style.cursor = "pointer";
          });

          // Change it back to a pointer when it leaves.
          map.on("mouseleave", "communities", function () {
            map.getCanvas().style.cursor = "";
          });

          // //test
          // map.addSource("maine", {
          //   type: "geojson",
          //   data: {
          //     type: "Feature",
          //     geometry: {
          //       type: "Polygon",
          //       coordinates: [
          //         [
          //           [-67.13734351262877, 45.137451890638886],
          //           [-66.96466, 44.8097],
          //           [-68.03252, 44.3252],
          //           [-69.06, 43.98],
          //           [-70.11617, 43.68405],
          //           [-70.64573401557249, 43.090083319667144],
          //           [-70.75102474636725, 43.08003225358635],
          //           [-70.79761105007827, 43.21973948828747],
          //           [-70.98176001655037, 43.36789581966826],
          //           [-70.94416541205806, 43.46633942318431],
          //           [-71.08482, 45.3052400000002],
          //           [-70.6600225491012, 45.46022288673396],
          //           [-70.30495378282376, 45.914794623389355],
          //           [-70.00014034695016, 46.69317088478567],
          //           [-69.23708614772835, 47.44777598732787],
          //           [-68.90478084987546, 47.184794623394396],
          //           [-68.23430497910454, 47.35462921812177],
          //           [-67.79035274928509, 47.066248887716995],
          //           [-67.79141211614706, 45.702585354182816],
          //           [-67.13734351262877, 45.137451890638886],
          //         ],
          //       ],
          //     },
          //   },
          // });
          // map.addLayer({
          //   id: "maine",
          //   type: "fill",
          //   source: "maine",
          //   layout: {},
          //   paint: {
          //     "fill-color": "#088",
          //     "fill-opacity": 0.8,
          //   },
          // });
        }
      );
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div
          className="sidebarStyle"
          style={{
            display: "inline-block",
            position: "absolute",
            bottom: "0",
            marginLeft: "100px",
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
        <div id="info"></div>
      </div>
    );
  }
}

export default Map;
