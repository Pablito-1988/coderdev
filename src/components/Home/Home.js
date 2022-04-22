import React from 'react';
import Slider from '../Slider/Slider';
import Interviews from '../Interviews/Interviews';
import Fighters from '../Fighters/Fighters';
import Banner from '../Banner/Banner';
const Home = () => {
  return <div>
    <Slider />
    <Interviews />
    <Fighters />
    <Banner />
  </div>;
};

export default Home;
