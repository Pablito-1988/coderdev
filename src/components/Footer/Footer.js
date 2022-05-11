import React from "react";
import "./Footer.css";
import logo from "../../assets/img/logoPng.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation(["footer"]);
  return (
    <>
      <div className="footerContainer">
        <div className="footer">
          <div className="footerLeft">
            <img className="logoImg" src={logo} alt="" />
          </div>
          <div className="footerCenter">
            <h3 className="footerTitle">{t("contacto")}</h3>
            <ul className="iconContainer">
              <li className='linkIcon'>
                <Link >
                  <i className="far fa-envelope"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footerRight">
            <h3 className="footerTitle">{t("redes")}</h3>
            <ul className="iconContainer">
              <li className='linkIcon'>
                <Link >
                  <i id="instagramIcon" className="fab fa-instagram"></i>
                </Link>
              </li>
              <li className='linkIcon' >
                <Link >
                  <i id="youtubeIcon" className="fab fa-youtube"></i>
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
