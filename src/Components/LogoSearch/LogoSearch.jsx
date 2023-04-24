import React from "react";
import logo from "../../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './LogoSearch.css'

function LogoSearch() {
  return (
    <div className="logoSearch">
      <img src={logo} alt="logoImg" />
      <div className="search">
        <input type="text" placeholder="#Explore" />

        <div className="s-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </div>
  );
}

export default LogoSearch;
