import React from "react";
import "./Fighters.css";
import Figther from "../../assets/img/ponzi.jpg";
import { useTranslation } from "react-i18next";

const Fighters = () => {
  const {t} = useTranslation(["figthers"]);
  const fighters = [
    {
      name: "Lucas",
      lastname: "Romero",
      img: Figther,
      twitter: "https://twitter.com/SPonzinibbioMMA",
      instagram: "https://www.instagram.com/sponzinibbiomma",
    },
    {
      name: "Lucas",
      lastname: "Romero",
      img: Figther,
      twitter: "https://twitter.com/SPonzinibbioMMA",
      instagram: "https://www.instagram.com/sponzinibbiomma",
    },
    {
      name: "Lucas",
      lastname: "Romero",
      img: Figther,
      twitter: "https://twitter.com/SPonzinibbioMMA",
      instagram: "https://www.instagram.com/sponzinibbiomma",
    },
    {
      name: "Lucas",
      lastname: "Romero",
      img: Figther,
      twitter: "https://twitter.com/SPonzinibbioMMA",
      instagram: "https://www.instagram.com/sponzinibbiomma",
    },
  ];
  return (
    <div className="fightersSeccion">
      <h1 className="fighterstitle">{t("peleadores")}</h1>
      <div className="figthersWrapper">
        {fighters.map((fighter) => (
          <div className="fighter">
            <img src={fighter.img} alt="Jenny Panichi" className="fighterImg" />
            <div className="fighterFullName">
              <p className="fighterName">{fighter.name}</p>
              <p className="fighterLastname">{fighter.lastname}</p>
            </div>
            <div className="fighterSocialMedia">
              <a href={fighter.twitter} target='_blank' rel="noreferrer">
                <i id='socialMediaTwitter' class="fab fa-twitter"></i>
              </a>
              <a href={fighter.instagram} target='_blank' rel="noreferrer">
                <i id='socialMedia' class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fighters;
