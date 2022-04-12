import React from "react";
import "./Footer.css";
import logo from "../../assets/img/diamond.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footer">
          <div className="footerLeft">
            <img className="logoImg" src={logo} alt="" />
          </div>
          <div className="footerCenter">
            <h3 className="footerTitle">Contacto</h3>
            <ul className="iconContainer">
              <li>
                <Link>
                  <i class="fab fa-whatsapp"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i class="far fa-envelope"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footerRight">
            <h3 className="footerTitle">Redes</h3>
            <ul className="iconContainer">
              <li>
                <Link>
                  <i id="instagramIcon" class="fab fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i id="youtubeIcon" class="fab fa-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
