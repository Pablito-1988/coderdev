import React from "react";
import "./Interview.css";
import moment from 'moment';

const Interview = (props) => {
  /* const name = props.name; */
  const firstName = props.firstName;
  const lastName = props.lastName;
  const date = moment(props.date).format('DD/MM/YYYY');
  const descripcionEntrevista = props.desc;

  return (
    <div className="mainInterviewContainer">
      <iframe
        width="300"
        height="300"
        src="https://www.youtube.com/embed/r4RC-zn8cRg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="figtherData">
        <div className="figtherName">
          <i id="figtherIcon" className="far fa-user-circle"></i>

          <p>{firstName}</p>
          <p className="interviewLastname">{lastName}</p>
        </div>

        <p className="interviewDate">{date}</p>
      </div>
      <p className="interviewDescription">{descripcionEntrevista}</p>
    </div>
  );
};

export default Interview;
