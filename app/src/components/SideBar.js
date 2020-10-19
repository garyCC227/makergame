import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import CssBaseline from "@material-ui/core/CssBaseline";
import style from "assets/styles/Sidebar.module.css";
import icon from "assets/icon.png";
import statIcon from "assets/stat.svg";
import homeIcon from "assets/home.svg";

function SideBar(props) {
  return (
    <div className={"side-bar " + style.container}>
      <CssBaseline />
      <div className={style.icon}>
        <Link to="/">
          <img
            className={style["icon-image"] + " w3-hover-opacity"}
            src={icon}
            alt="Pollinate icon"
          />
        </Link>
      </div>
      <div className={style.links}>
        <ul className={style.nav}>
          <li>
            <Link to="/">
              <img
                className={style.navIcon}
                data-tip="Home"
                src={homeIcon}
                alt="HomePage Icon"
              />
            </Link>
          </li>
          <li>
            <Link to="/">
              {/* TODO */}
              <img
                className={style.navIcon}
                data-tip="Community <br />Summary"
                src={statIcon}
                alt="statPage Icon"
              />
            </Link>
          </li>
        </ul>
      </div>
      <ReactTooltip multiline={true} />
    </div>
  );
}

export default SideBar;
