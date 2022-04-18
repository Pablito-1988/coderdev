import React from "react";
import "./Interview.css";

const Interview = (props) => {
  const name = props.name;
  const date = props.date;
  return (
    <div className="mainInterviewContainer">
      <iframe width="250" height="300" src="https://www.youtube.com/embed/r4RC-zn8cRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="figtherData">
        <i id="figtherIcon" className="far fa-user-circle"></i>
        
          <p>{name}</p>
          <p>{date}</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus, ipsum molestiae beatae esse accusantium reprehenderit explicabo amet ex, tempora quibusdam hic omnis dolores. Molestiae porro mollitia corporis tempora ea!</p>
      
    </div>
  );
};

export default Interview;
