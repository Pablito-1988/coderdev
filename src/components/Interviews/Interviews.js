import React from "react";
import Interview from "./Interview";

const Interviews = () => {
  const interviews = [
    { name: "Lucas Romero", date: "04 de Agosto" },
    { name: "Lucas Romero", date: "05 de Agosto" },
    { name: "Lucas Romero", date: "06 de Agosto" },
  ];
  return (
    <>
      <div className="interviewsContainer">
        <h3 className='interviewsTitle'>ENTREVISTAS</h3>
        <div className="intereviewsWrapper">
          {interviews.map((interview) => (
            <Interview name={interview.name} date={interview.date} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Interviews;
