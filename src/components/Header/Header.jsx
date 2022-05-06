import React from "react";
import { useEffect, useState } from "react";
import "./Header.css";
import MainLogo from "../../assets/img/diamond.png";
import Dropdown from "../Dropdown/Dropdown";
import SearchBar from "../SearchBar/SearchBar";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation(["header"]);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("es");
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="topDivHeader">
        <div id="leftbox">
          <Link to="/" onClick={closeMobileMenu}>
            <img src={MainLogo} alt="Jenny Panichi" className="logoHeader" />
          </Link>
        </div>
        <div id="middlebox">
          <SearchBar placeholder="Buscar..." />
        </div>
        <div id="rightbox">
          <Dropdown />
        </div>
        <div className="mobile-menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      </div>
      
        <ul
          className={click ? "nav-links-mobile" : "nav-links"}
          onClick={closeMobileMenu}
        >
          {click ? (
            <li className="menuItem" onClick={closeMobileMenu}>
              <Dropdown />{" "}
            </li>
          ) : null}
          <li key={t("entrevistas.nombre")} className="menuItem">
            <Link to={t("entrevistas.ref")} onClick={closeMobileMenu}>
              {t("entrevistas.nombre")}
              <br></br>
            </Link>
          </li>
          <li key={t("peleadores.nombre")} className="menuItem">
            <Link to={t("peleadores.ref")} onClick={closeMobileMenu}>{t("peleadores.nombre")}</Link>
          </li>
          <li key={t("calendario.nombre")} className="menuItem">
            <Link to={t("calendario.ref")} onClick={closeMobileMenu}>{t("calendario.nombre")}</Link>
          </li>
          <li key={t("quiensoy.nombre")} className="menuItem">
            <Link to={t("quiensoy.ref")} onClick={closeMobileMenu}>{t("quiensoy.nombre")}</Link>
          </li>
          <li key={t("contacto.nombre")} className="menuItem">
            <Link to={t("contacto.ref")} onClick={closeMobileMenu}>{t("contacto.nombre")}</Link>
          </li>
        </ul>
      
    </nav>
  );
};

export default Header;
