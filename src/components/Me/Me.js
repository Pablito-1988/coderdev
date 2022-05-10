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
import Firma from "../../assets/img/firma.png";
import colage from "../../assets/img/colage.jpg";
import { useState, useEffect } from "react";

const Me = () => {
  const abouteGalery = [Carrousel1, Carrousel2];
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
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
        {/* <h1 className="aboutTitle">Conocé más acerca de mí</h1> */}
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
              Mi nombre es Jennifer Panichi, soy empresaria conductora y
              reportera en eventos de artes marciales mixtas, soy la
              representante de latinoamerica.
            </p>
            <p>
              <u className="aboutText">Trabajos:</u>
            </p>
            <ul>
              <li className="aboutList">
                <p className="aboutText">
                  Reportera y corresponsal para Tudo Sobre MMA (Brasil) en UFC
                  Argentina
                </p>
              </li>
              <li className="aboutList">
                {" "}
                <p className="aboutText">
                  Reportera y Traductora en Taura MMA (Brasil)
                </p>{" "}
              </li>
              <li className="aboutList">
                <p className="aboutText">Reportera CAM(Argentina) en canal 9</p>
              </li>
              <li className="aboutList">
                <p className="aboutText">
                  Reportera y Corresponsal de MMA Premium (Brasil)
                </p>
              </li>
              <li className="aboutList">
                <p className="aboutText">
                  Reportera y comentarista en BJJ Combat (Argentina)
                </p>
              </li>
              <li className="aboutList">
                <p className="aboutText">
                  Comentarista en Estrella de Acero WKN
                </p>
              </li>
              <li className="aboutList">
                <p className="aboutText">
                  Reportera en el Main Event Championship
                </p>{" "}
              </li>
              <li className="aboutList">
                <p className="aboutText">
                  Reportera y Corresponsal media day UFC y Bellator para AG
                  Figth (Brasil)
                </p>
              </li>
              <li className="aboutList">
                <p className="aboutText">
                  Traductora para peleadores Brasileños al español
                </p>
              </li>
            </ul>
            <p className="aboutText">
              Administración y producción, asesoramiento , art media. Doblaje al
              español neutro. Español y portugués
            </p>
            <div className="firmaContainer">
              <img src={Firma} alt="" className="firma" />
            </div>
          </div>
        </div>
        <div className="workResume">
          <h1 className="workTitle">Empresas con las que trabajé</h1>
          <div className="logos">
            {logos.map((logo, index) => {
              return (
                <a href={webs[index]} target="_blank" rel="noreferrer">
                  <div className="logo" key={index}>
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
