import React from "react";
import "./Interview.css";

const Interview = (props) => {
  const name = props.name;
  const date = props.date;
  return (
    <div className="mainInterviewContainer">
      <iframe
        width="250"
        height="300"
        src="https://www.youtube.com/embed/r4RC-zn8cRg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="figtherData">
        <i id="figtherIcon" className="far fa-user-circle"></i>

        <p>{name}</p>
        <p>{date}</p>
      </div>
      <p>
        Lörem ipsum dinas vidiska omuskap om mivagt. Gungar åkol det vill säga
        bonungen ett dålig. Dysnomi faktaresistens supraplastisk. Nerar pren de
        metatism ett biotion. Kontracism pesat. Pyn åtredade och nungen.
      </p>
    </div>
  );
};

export default Interview;
