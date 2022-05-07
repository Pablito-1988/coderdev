import React from "react";
import "../Dropdown/Dropdown.css";
import "flag-icons";
import { useTranslation } from "react-i18next";
import { useState } from "react";


const Dropdown = () => {
  const { i18n } = useTranslation("header");
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  console.log(handleClick)
  const handlerLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
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
        {/* <ul
        onClick={handleClick}
        // className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        <li key="es" value="es" onClick={handlerLanguageChange}><a>Español</a></li>
        <li key="pt" value="pt" onClick={handlerLanguageChange}><a>Español</a></li> */}

        {/* {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path} 
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })} */}
      {/* </ul> */}
      </div>
    </div>
  );
};

export default Dropdown;
