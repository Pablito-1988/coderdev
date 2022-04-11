import React from "react";
import "./Header.css";
import MainLogo from "../../assets/img/diamond.png";
import { Link } from "react-router-dom";

const Header = () => {
  const menu = [
    { name: "Entrevistas", ref: "/entrevistas", id: "1" },
    { name: "Peleadores", ref: "/peleadores", id: "2" },
    { name: "Calendario", ref: "/calendario", id: "3" },
    { name: "Quien Soy", ref: "/about", id: "4" },
    { name: "Contacto", ref: "/contacto", id: "5" },
  ];

  return (
    <div className="divBcg">
      <div>
        <img src={MainLogo} alt="Jenny Panichi" className="logoImg"/>
      </div>
    <nav>
      <ul className="menuBar">
        {menu.map((menuItem) => {
          return (
            <li key={menuItem.id} className="menuItem">
              <Link to={menuItem.ref}>{menuItem.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
    </div>
  );
};

export default Header;
