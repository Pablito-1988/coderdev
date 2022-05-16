import React from "react";
import "./Footer.css";
import logo from "../../assets/img/logoPng.png";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const {t} = useTranslation(["footer"]);
  return (
    <>
      <div className="footerContainer">
        <div className="footer">
          <div className="footerLeft">
            <Link to="/">
               <img className="logoImg" src={logo} alt="" />
            </Link>  
          </div>
          <div className="footerCenter">
            <h3 className="footerTitle">{t("contacto")}</h3>
            <ul className="iconContainer">
              <li className='linkIcon'>
                <a href = "mailto: jennypanichi@gmail.com" >
                  <i className="far fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footerRight">
            <h3 className="footerTitle">{t("redes")}</h3>
            <ul className="iconContainer">
              <li className='linkIcon'>
                <a href="https://www.instagram.com/jennypanichi/" target="_blank" rel="noreferrer" >
                  <i id="instagramIcon" className="fab fa-instagram"></i>
                </a>
              </li>
              <li className='linkIcon' >
                <a href="https://www.youtube.com/channel/UCIh8yp-Q12cA7fNkAjMQdBw" target="_blank" rel="noreferrer">
                  <i id="youtubeIcon" className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
