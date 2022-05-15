import React from "react";
import "./Interview.css";
import moment from 'moment';
import { Link } from "react-router-dom";


const Interview = (props) => {
  /* const name = props.name; */
  const firstName = props.firstName;
  const lastName = props.lastName;
  const date = moment(props.date).format('DD/MM/YYYY');
  const descripcionEntrevista = props.desc;
  const imagen = props.imagen;
  const link = props.link;
 /*  console.log(imagen.url) */

  return (
    <div className="mainInterviewContainer">
      <div className="box">
       {imagen && <img className="interviewImage" src={imagen.url} alt="Jenny Panichi" />}
        <div className="capa">
        {imagen && <a href={link} rel="noreferrer" target="_blank"><i id='playIcon' className="far fa-play-circle"></i></a> }
        
        </div>
      </div>
      <div className="figtherData">
       <div className="figtherName">
         {lastName === 'Panichi' ? <Link to={`/about`}>
         <i id="figtherIcon" className="far fa-user-circle"></i>
         </Link> :<Link to={`/peleador/${lastName}`}>
         <i id="figtherIcon" className="far fa-user-circle"></i>
         </Link> }
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
