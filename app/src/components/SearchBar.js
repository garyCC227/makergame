import React, { useState } from "react";
import style from "assets/styles/SearchBar.module.css";
import ReactTooltip from "react-tooltip";
import Filter from "components/Filter";

export default function SearchBar(props) {
  const [filterDisplay, setFilter] = useState("none");

  const toggleFilter = () => {
    if (filterDisplay === "none") {
      setFilter("block");
    } else {
      setFilter("none");
    }
  };

  const openSiderBar = () => {
    const sideBar = document.querySelector(".side-bar");
    // console.log(sideBar);
    if (sideBar.style.display === "none") {
      sideBar.style.display = "block";
    } else {
      sideBar.style.display = "none";
    }
  };
  return (
    <div className={style.container}>
      {/* search bar */}
      <div className={style["search-bar"]}>
        <form className="form-inline">
          <i
            className={"w3-hover-blue fas fa-bars w3-large w3-margin-left"}
            aria-hidden="true"
            data-tip="Sidebar"
            onClick={openSiderBar}
          ></i>
          <input
            className={"form-control ml-3 " + style["input"]}
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <i
            className={
              "fas fa-directions w3-xlarge w3-margin-left w3-hover-opacity w3-text-blue"
            }
            data-tip="Search"
            aria-hidden="true"
          ></i>
          <i
            className={
              "fas fa-ellipsis-v w3-large w3-margin-left w3-hover-opacity w3-text-grey"
            }
            data-tip="Filter"
            aria-hidden="true"
            onClick={toggleFilter}
          ></i>
        </form>
      </div>
      {/* end of search bar */}

      <Filter display={filterDisplay} />

      <ReactTooltip multiline={true} />
    </div>
  );
}
