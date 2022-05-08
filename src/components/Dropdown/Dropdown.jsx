import React from "react";
import "../Dropdown/Dropdown.css";
import "flag-icons";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Dropdown = (props) => {
  const { i18n } = useTranslation("header");

  const handlerLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    props.closeMenu();
  };

  return (
    <div className="paddingDropdown">
      <div className="dropdown">
        <select
          className="dropdown"
          value={localStorage.getItem("i18nextLng")}
          onChange={handlerLanguageChange}
        >
          Idioma
          <option className="dropdown-menu" value="es">
            Español
          </option>
          <option className="dropdown-menu" value="pt">
            Português
          </option>
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
