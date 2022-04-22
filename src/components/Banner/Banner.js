import "./Banner.css";
import logoUfc from "../../assets/img/ufcLogo.JPG";
import logoBellator from "../../assets/img/bellatorLogo.JPG";

const Banner = () => {
  const logos = [{ logoBanner: logoUfc }, { logoBanner:logoBellator }, {logoBanner: logoUfc }, {logoBanner: logoBellator }];
  return (
    <div className="bannerContainer">
      <div className="banner">
        {logos.map((logo) => (
            <div className="logoBanner">
                <img className='logoBanner' src={logo.logoBanner} alt="Jenny Panichi" className="logoBannerImg" />
            </div>
        ))}     
      </div>
    </div>
  );
};

export default Banner;
