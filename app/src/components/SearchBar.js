import React from "react";
import style from "assets/styles/SearchBar.module.css";

export default class SearchBar extends React.Component {
  openSiderBar() {
    const sideBar = document.querySelector(".side-bar");
    // console.log(sideBar);
    if (sideBar.style.display == "none") {
      sideBar.style.display = "block";
    } else {
      sideBar.style.display = "none";
    }
  }
  render() {
    return (
      <div className={style.container}>
        <form class="form-inline">
          <i
            className={" w3-hover-green fas fa-bars w3-large w3-margin-left"}
            aria-hidden="true"
            onClick={this.openSiderBar}
          ></i>
          <input
            className={"form-control ml-3 " + style.input}
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <i
            className={
              "fas fa-directions w3-xlarge w3-margin-left w3-hover-opacity w3-text-blue"
            }
            aria-hidden="true"
          ></i>
          <i
            className={
              "fas fa-ellipsis-v w3-large w3-margin-left w3-hover-opacity w3-text-grey"
            }
            aria-hidden="true"
          ></i>
        </form>
      </div>
    );
  }
}
