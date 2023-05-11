import React from "react";
import "./Footer.css";
import Logo from "../../assets/MakersPlaceGH-Logo.png";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div className="footer-container">
      <span>All Right Reserved</span>
      <div
        className="Makersplace"
        style={{ fontWeight: "bold", textTransform: "uppercase" }}
      >
        <span>Makersplace Ghana</span>
        <img src={Logo} alt="" style={{ height: "2rem" }} />
      </div>
      <span>Copyright {currentYear}</span>
    </div>
  );
}
