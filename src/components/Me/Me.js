import "./Me.css";
import AboutBanner from "./AboutBanner";
import Carrousel1 from "../../assets/img/carrousel1test.jpg";
import Carrousel2 from "../../assets/img/carrousel2test.jpg";
import logo1 from "../../assets/img/agfightlogo.jpg";
import logo2 from "../../assets/img/camlogo.png";
import logo3 from "../../assets/img/maineventlogo.jpg";
import logo4 from "../../assets/img/topkinglogo.png";
import logo5 from "../../assets/img/tudosobremmalogo.jpg";
import logo6 from "../../assets/img/wknlogo.png";
import logo7 from "../../assets/img/taura.png";
import Firma from "../../assets/img/firma.png";
import colage from "../../assets/img/colage.jpg";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Me = () => {
  const { t } = useTranslation(["about"]);
  const abouteGalery = [Carrousel1, Carrousel2];
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
  const webs = [
    "https://agfight.com",
    "https://mma-argentina.wixsite.com/inico",
    "https://www.facebook.com/pages/category/Sports---Recreation/MainEvent-Championship-106289098392695/",
    "https://www.instagram.com/topkingargentina",
    "https://tudosobremma.com/",
    "https://twitter.com/wknargentina",
  ];
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderTime = 5000;
  useEffect(() => {
    const interval = setInterval(() => {
      slideIndex === 1 ? setSlideIndex(0) : setSlideIndex(slideIndex + 1);
    }, sliderTime);
    return () => clearInterval(interval);
  }, [slideIndex, sliderTime, abouteGalery.length]);

  return (
    <>
      <div className="aboutContainer">
        <AboutBanner />
        <div className="aboutInfo">
          <div className="meImage">
            <img
              src={abouteGalery[slideIndex]}
              alt="Jenny Main"
              className="aboutMainImage"
            />
          </div>
          <div className="textAndSing">
            <p className="aboutText">
            {t("intro")}
            </p>
            <p>
              <u className="aboutText">{t("trabajos")}</u>
            </p>
            <ul>
              <li className="aboutList">
                <p className="aboutText">
                {t("trabajo1")}
                </p>
              </li>
              <li className="aboutList">
                {" "}
                <p className="aboutText">
                {t("trabajo2")}
                </p>{" "}
              </li>
              <li className="aboutList">
                <p className="aboutText">{t("trabajo3")}</p>
              </li>
              <li className="aboutList">
                <p className="aboutText">
                {t("trabajo4")}
                </p>
              </li>
              <li className="aboutList">
                <p className="aboutText">
                {t("trabajo5")}
                </p>
              </li>
              <li className="aboutList">
                <p className="aboutText">
                {t("trabajo6")}
                </p>
              </li>
              <li className="aboutList">
                <p className="aboutText">
                  {t("trabajo7")}
                </p>{" "}
              </li>
              <li className="aboutList">
                <p className="aboutText">
                {t("trabajo8")}
                </p>
              </li>
              <li className="aboutList">
                <p className="aboutText">
                {t("trabajo9")}
                </p>
              </li>
            </ul>
            <p className="aboutText">
            {t("trabajo10")}
            </p>
            <div className="firmaContainer">
              <img src={Firma} alt="" className="firma" />
            </div>
          </div>
        </div>
        <div className="workResume">
          <h1 className="workTitle">{t("empresas")}</h1>
          <div className="logos">
            {logos.map((logo, index) => {
              return (
                <a href={webs[index]} target="_blank" rel="noreferrer">
                  <div className="logoContainer" key={index}>
                    <img src={logo} alt="logo" className="logoImage" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <div className="galery">
          <img src={colage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Me;
