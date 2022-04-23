import React from "react";
import "./Dropdown.css";
import "flag-icons";
import { useTranslation } from "react-i18next";

const Dropdown = () => {
  const { i18n } = useTranslation("header");

  const handlerLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="dropdown" data-dropdown>
      <ul>
        <li>
          <select
            className="textIdioma link"
            value={localStorage.getItem("i18nextLng")}
            onChange={handlerLanguageChange}
          >
            Idioma
            <option value="es">Español</option>
            <option value="pt">Português</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
