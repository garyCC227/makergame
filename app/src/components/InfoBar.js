import React from "react";
import ReactDOM from "react-dom";
import style from "assets/styles/InfoBar.module.css";

export default function InfoBar(props) {
  console.log(props.features);
  function close() {
    const infoBar = document.getElementById("info");
    ReactDOM.unmountComponentAtNode(infoBar);
  }
  return (
    <div className={style.infoBox}>
      <div className={style.row}>
        {/* image with close button */}
        <div className={style.title}>
          <div className={style.closeBar}>
            <i className="fas fa-map-pin w3-xlarge w3-text-red"></i>
            <h3>{props.features.properties.name}</h3>
            <button className="btn btn-light" onClick={close}>
              <i className="far fa-times-circle w3-xlarge"></i>
            </button>
          </div>
        </div>

        {/* name and introduction */}
        <div className={style.intro}>
          <i className="place fas fa-place-of-worship w3-xlarge w3-text-cyan"></i>
          <div className={style.place}>
            <h4>{props.features.properties.name}</h4>
            <h6>{props.features.properties.city}</h6>
          </div>
        </div>
      </div>

      <div className={style.row}>
        {/* coordinates */}
        <div className={style.detail + " w3-margin-top"}>
          <i className="fas fa-location-arrow w3-xlarge w3-text-red"></i>
          <div className={style.place}>
            <h5>Coordinates</h5>
            <p>
              (
              {Math.round(props.features.geometry.coordinates[0] * 100000) /
                100000 +
                " ," +
                Math.round(props.features.geometry.coordinates[1] * 100000) /
                  100000}
              )
            </p>
          </div>
        </div>
        {/* w3w address */}
        <div className={style.detail}>
          <i className="fas fa-map-marked-alt w3-xlarge w3-text-red"></i>
          <div className={style.place}>
            <h5>w3w Address</h5>
            <p>{props.features.properties.w3w}</p>
          </div>
        </div>
      </div>

      {/* more pollinate information */}
      <div className={style.pollinateInfo}>
        <div className={style.detail + " w3-margin-top"}>
          <i className="fas fa-user-check w3-xlarge w3-text-teal"></i>
          <div className={style.place}>
            <h7>Existence</h7>
            <p>
              <span className={style.verified}>Verified</span>
            </p>
          </div>
        </div>

        <div className={style.detail + " w3-margin-top"}>
          <i className="fas fa-charging-station w3-xlarge w3-text-teal"></i>
          <div className={style.place}>
            <h7>Electrified</h7>
            <p>
              <span className={style.unverified}>
                {props.features.properties.electrified}
              </span>
            </p>
          </div>
        </div>

        <div className={style.detail}>
          <i className="fas fa-users w3-xlarge w3-text-teal"></i>
          <div className={style.place}>
            <h7>Slum Size</h7>
            <p>{props.features.properties.num_of_customers}</p>
          </div>
        </div>

        <div className={style.detail}>
          <i className="fas fa-users w3-xlarge w3-text-teal"></i>
          <div className={style.place}>
            <h7>Slum Type</h7>
            <p>{props.features.properties.comm_type}</p>
          </div>
        </div>

        <div className={style.detail}>
          <i className="fas fa-hands w3-xlarge w3-text-teal"></i>
          <div className={style.place}>
            <h7>Servev By Pollinate</h7>
            <p>
              <span className={style.verified}>Yes</span>
            </p>
          </div>
        </div>
      </div>

      <div className={style.row}>
        <button className="btn btn-info w3-padding">Add Comment</button>
      </div>
    </div>
  );
}
