import "./Me.css";
import MainImg from "../../assets/img/jennymain.jpeg";
import Carrousel1 from "../../assets/img/carrousel1test.jpg";
import Carrousel2 from "../../assets/img/carrousel2test.jpg";
import logo1 from "../../assets/img/agfightlogo.jpg";
import logo2 from "../../assets/img/camlogo.png";
import logo3 from "../../assets/img/maineventlogo.jpg";
import logo4 from "../../assets/img/topkinglogo.png";
import logo5 from "../../assets/img/tudosobremmalogo.jpg";
import logo6 from "../../assets/img/wknlogo.png";
import Firma from "../../assets/img/firma.png";
import { useState , useEffect } from "react";

const Me = () => {
  const abouteGalery = [Carrousel1,Carrousel2]  
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
        slideIndex === 1
            ? setSlideIndex(0)
            : setSlideIndex(slideIndex + 1);
        }, sliderTime);
        return () => clearInterval(interval);
    }, [slideIndex, sliderTime, abouteGalery.length]);

 
  return (
    <>
      <div className="aboutContainer">
        <h1 className="aboutTitle">Conocé más acerca de mí</h1>
        <div className="aboutInfo">
          <div className="meImage">
            <img src={abouteGalery[slideIndex]} alt="Jenny Main" className="aboutMainImage" />
          </div>
          <div className="textAndSing">
           <p className="aboutText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            vero quod perspiciatis tempora quos repellat iure ducimus nesciunt
            iste culpa sed enim aliquid placeat, laudantium itaque veritatis
            tenetur illo nisi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Beatae dolorem itaque, porro atque tempora facere
            corporis consectetur a. Reiciendis necessitatibus tempora quam
            accusamus magni placeat modi iste perferendis illum corporis! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Expedita iure
            itaque animi. Deserunt ducimus consequuntur cumque saepe ipsa
            architecto nobis rerum voluptates ad. Porro asperiores corrupti
            tenetur placeat! Modi, quasi!
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
        <div className="galery"></div>
      </div>
    </>
  );
};

export default Me;
