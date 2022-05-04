import React from 'react';
import Slider from '../Slider/Slider';
import Interviews from '../Interviews/Interviews';
import HomeFighters from '../Fighters/HomeFighters';
import Banner from '../Banner/Banner';
const Home = () => {
  return <div>
    <Slider />
    <Interviews />
    <HomeFighters />
    <Banner />
  </div>;
};

export default Home;
