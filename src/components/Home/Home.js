import React from 'react';
import Slider from '../Slider/Slider';
import HomeInterviews from '../Interviews/HomeInterviews';
import HomeFighters from '../Fighters/HomeFighters';
import Banner from '../Banner/Banner';
const Home = () => {
  return <div>
    <Slider />
    <HomeInterviews />
    <HomeFighters />
    <Banner />
  </div>;
};

export default Home;
