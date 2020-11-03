import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import geoFeatures from "assets/Bengaluru";
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
      zoom: 10,

      //temp use
      geoData: geoFeatures,
    };
    this.map = null;
    this.geoData = geoFeatures;
    this.mapContainer = React.createRef();
    this.loadCommunity = this.loadCommunity.bind(this);
    this.showFilteredslum = this.showFilteredslum.bind(this);
    this.filterGeojson = this.filterGeojson.bind(this);
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/satellite-streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      // minZoom: 10,
    });
    this.loadCommunity(this.map);
  }

  async loadCommunity(map) {
    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    await map.on("load", function () {
      map.addSource("polygons", {
        type: "geojson",
        data: geoFeatures,
      });
      map.addLayer({
        id: "communities",
        type: "fill",
        source: "polygons",
        layout: {},
        paint: {
          "fill-color": "#f08",
          "fill-opacity": 0.5,
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
    });
  }

  //show filtered communities on UI
  showFilteredslum(keywords) {
    console.log(keywords);
    if (keywords.length === 0 && this.map.getSource("polygons")) {
      this.map.getSource("polygons").setData({ ...this.geoData });
      return;
    }
    const result = this.filterGeojson(keywords);

    const newJson = {
      type: "FeatureCollection",
      features: result,
    };
    if (this.map.getSource("polygons")) {
      this.map.getSource("polygons").setData(newJson);
    }
  }

  //filter helper
  filterHelper(keyword, geo) {
    if (keyword === "verified" && geo["properties"].verified === "true") {
      return true;
    }

    if (keyword === "unverified" && geo["properties"].verified === "false") {
      return true;
    }

    if (keyword === "served" && geo["properties"].served === "true") {
      return true;
    }

    if (keyword === "unserved" && geo["properties"].served === "false") {
      return true;
    }

    if (
      keyword === "Fully Electrified" &&
      geo["properties"].electrified === "Fully Electrified"
    ) {
      return true;
    }

    if (
      keyword === "Partially Electrified" &&
      geo["properties"].electrified === "Partially Electrified"
    ) {
      return true;
    }

    if (
      keyword === "Not Electrified" &&
      geo["properties"].electrified === "Not Electrified"
    ) {
      return true;
    }

    return false;
  }

  // filter slum database with different keyword, and return an intersection
  filterGeojson(keywords) {
    let features = this.geoData.features;
    const result = keywords.map((keyword) => {
      return features.filter((geo) => this.filterHelper(keyword, geo));
    });

    const reducer = (curr, newVal) => {
      if (curr.length === 0) {
        curr = newVal;
      } else {
        const intersection = curr.filter((x) => newVal.includes(x));
        curr = intersection;
      }
      return curr;
    };
    const intersection = result.reduce(reducer, []);
    return intersection;
  }

  render() {
    return (
      <div>
        <SearchBar filterFunc={this.showFilteredslum} />
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
