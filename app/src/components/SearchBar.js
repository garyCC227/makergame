import React, { useState } from "react";
import style from "assets/styles/SearchBar.module.css";
import ReactTooltip from "react-tooltip";
import Filter from "components/Filter";
import FilterIcon from "assets/filter.svg";

export default function SearchBar({ filterFunc }) {
  const [filterDisplay, setFilter] = useState("block");

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
              "fas fa-directions w3-xlarge w3-hover-opacity w3-text-blue"
            }
            data-tip="Search"
            aria-hidden="true"
          ></i>
          <img
            src={FilterIcon}
            alt="filters"
            className={
              "w3-margin-left w3-hover-opacity w3-text-grey " + style.filterIcon
            }
            //hello
            data-tip="Filter"
            aria-hidden="true"
            onClick={toggleFilter}
          />
        </form>
      </div>
      {/* end of search bar */}

      <Filter display={filterDisplay} filterFunc={filterFunc} />

      <ReactTooltip multiline={true} />
    </div>
  );
}
