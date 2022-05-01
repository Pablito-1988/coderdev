import React from "react";
import Interview from "./Interview";
import { useState, useEffect } from "react";

const Interviews = () => {
  const accessToken = "_8rkJ8PJK5FFmNgZI7aL5tShQCi9hETu4NOK7vkwtAw";
  const spaceId = "0ydrshsl7jeq";
  const query = `
  {
    entrevistaCollection{
      items{
        titulo
        apellido
        descripcionEntrevista
        linkVideo
        entrevistaCompleta
        slug
        home
        date
      }
    }
  }
`;
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        } else {
          console.log("error");
        }
        setPage(data.entrevistaCollection.items);
      });
  }, [query]);
  
 /*  if (!page) {
    return (
      <>
      <p>"Loading..."</p>
      </>);
  } */
  const interviews = [
    { firstName: "Lucas", lastName: "Romero", date: "04 de Agosto 2022" },
    { firstName: "Lucas", lastName: "Romero", date: "05 de Agosto 2022" },
    { firstName: "Lucas", lastName: "Romero", date: "06 de Agosto 2022" },
  ];

  return (
    <>
      <div className="interviewsContainer">
        <h3 className="interviewsTitle">ENTREVISTAS</h3>
        <div className="intereviewsWrapper">
          {interviews.map((interview) => (
            <Interview
              firstName={interview.firstName}
              lastName={interview.lastName}
              date={interview.date}
            />
            
          ))}
        </div>
      </div>
    </>
  );
};

export default Interviews;
