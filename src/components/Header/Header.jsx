import React from "react";
import { useEffect, useState } from "react";
import "./Header.css";
import MainLogo from "../../assets/img/diamond.png";
import Dropdown from "../Dropdown/Dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation(["header"]);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("es");
    }
  }, []);

  return (
    <div>
      <div className="topDivHeader">
        <div id="leftbox">
          <Link to="/">
            <img src={MainLogo} alt="Jenny Panichi" className="logoImg" />
          </Link>
        </div>
        <div id="middlebox">
          <img src={MainLogo} alt="Jenny Panichi" className="logoImg" />
        </div>
        <div id="rightbox">
          <Dropdown />
        </div>
      </div>
      <div className="divBcg">
        <nav>
          <ul className="menuBar">
            <li key={t("entrevistas.nombre")} className="menuItem">
              <Link to={t("entrevistas.ref")} onMouseEnter={() => setIsShown(true)}>
                {t("entrevistas.nombre")}
                <br></br>
                
                <span className="hoverCircle"></span>
              </Link>
            </li>
            <li key={t("peleadores.nombre")} className="menuItem">
              <Link to={t("peleadores.ref")}>{t("peleadores.nombre")}</Link>
            </li>
            <li key={t("calendario.nombre")} className="menuItem">
              <Link to={t("calendario.ref")}>{t("calendario.nombre")}</Link>
            </li>
            <li key={t("quiensoy.nombre")} className="menuItem">
              <Link to={t("quiensoy.ref")}>{t("quiensoy.nombre")}</Link>
            </li>
            <li key={t("contacto.nombre")} className="menuItem">
              <Link to={t("contacto.ref")}>{t("contacto.nombre")}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
