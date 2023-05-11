import React from "react";
import "./Header.css";
import Microbit from "../../assets/pngwing.com.png";
import Makersplace from "../../assets/MakersPlaceGH-Logo.png";

function Header() {
  return (
    <div className="header-container">
      <div className="Makersplace">
        <span>Makersplace</span>
        <img src={Makersplace} alt="" />
      </div>
      <div className="Microbit">
        <span>Micro:Bit</span>
        <img src={Microbit} alt="" />
      </div>
    </div>
  );
}

export default Header;
