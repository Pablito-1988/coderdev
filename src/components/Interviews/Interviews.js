import React from "react";
import Interview from "./Interview";

const Interviews = () => {
  const interviews = [
    { firstName: "Lucas", lastName: "Romero", date: "04 de Agosto 2022" },
    { firstName: "Lucas", lastName: "Romero", date: "05 de Agosto 2022" },
    { firstName: "Lucas", lastName: "Romero", date: "06 de Agosto 2022" },
  ];
  return (
    <>
      <div className="interviewsContainer">
        <h3 className='interviewsTitle'>ENTREVISTAS</h3>
        <div className="intereviewsWrapper">
          {interviews.map((interview) => (
            <Interview firstName={interview.firstName} lastName={interview.lastName} date={interview.date} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Interviews;


