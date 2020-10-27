import React, { useState } from "react";
import ReactDOM from "react-dom";
import style from "assets/styles/InfoBar.module.css";
import EditIcon from "@material-ui/icons/Edit";
import InfoForm from "components/InfoForm";

/* TODO:
1. Wait for more information coming back
2. be aware of the NaN value, make conditional rendering 
*/
export default function InfoBar(props) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

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

      <div className="ui divider"></div>
      <div className={style.row}>
        <h3 className={"ui dividing header " + style.detailHeader}>Address</h3>
        {/* coordinates */}
        <div className={style.detail + " w3-margin-top"}>
          <i className="fas fa-location-arrow w3-xlarge w3-text-red"></i>
          <div className={style.place}>
            <h5>Coordinates</h5>
            <p>
              (
              {Math.round(
                props.features.geometry.coordinates[0][0][0] * 100000
              ) /
                100000 +
                " ," +
                Math.round(
                  props.features.geometry.coordinates[0][0][1] * 100000
                ) /
                  100000}
              )
            </p>
          </div>
        </div>
        {/* w3w address1 */}
        <div className={style.detail + " w3-margin-top"}>
          <i className="fas fa-map-marked-alt w3-xlarge w3-text-red "></i>
          <div className={style.place}>
            <h5>w3w Address</h5>
            {props.features.properties.w3w === "" ? (
              <p>Not Defined</p>
            ) : (
              <p>{props.features.properties.w3w}</p>
            )}
          </div>
        </div>
      </div>
      <div className="ui divider"></div>

      <div className={style.detailContainer}>
        <h3 className={"ui header " + style.detailHeader}>
          Community Information
        </h3>
        <button
          className={style.editButton + " btn btn-outline-info"}
          onClick={handleShow}
        >
          <EditIcon fontSize="small" />
        </button>

        <InfoForm show={show} setShow={setShow} />
        <div className="ui divider"></div>
        {/* more pollinate information */}
        <div className={style.pollinateInfo}>
          <div className={style.detail}>
            <i className="fas fa-charging-station w3-xlarge w3-text-teal"></i>
            <div className={style.place}>
              <h7>Electrified</h7>
              <p>
                <span className={style.unverified}>
                  {props.features.properties.electrified === null
                    ? props.features.properties.electrified
                    : "None"}
                </span>
              </p>
            </div>
          </div>

          <div className={style.detail}>
            <i className="fas fa-users w3-xlarge w3-text-teal"></i>
            <div className={style.place}>
              <h7>Slum Size</h7>
              <p>
                {props.features.properties.num_of_customers === null
                  ? props.features.properties.num_of_customers
                  : "None"}
              </p>
            </div>
          </div>

          <div className={style.detail}>
            <i className="fas fa-users w3-xlarge w3-text-teal"></i>
            <div className={style.place}>
              <h7>Slum Type</h7>
              <p>
                {props.features.properties.comm_type === null
                  ? props.features.properties.comm_type
                  : "None"}
              </p>
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

          <div className={style.detail}>
            <i className="fas fa-user-check w3-xlarge w3-text-teal"></i>
            <div className={style.place}>
              <h7>Existence</h7>
              <p>
                {/* <span className={style.verified}>Verified</span> */}
                <select className={style.verified + " ui dropdown"}>
                  <option value="">Verified</option>
                  <option value="1">Accpet</option>
                  <option value="0">Reject</option>
                </select>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={style.row}>
        <button className="btn btn-info w3-padding">Add Comment</button>
      </div> */}
    </div>
  );
}
