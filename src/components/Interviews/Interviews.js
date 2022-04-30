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
        descripcionPt
        linkVideo
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
  
  if (!page) {
    return "Loading...";
  }

  return (
    <>
      <div className="interviewsContainer">
        <h3 className="interviewsTitle">ENTREVISTAS</h3>
        <div className="intereviewsWrapper">
          {page.map((interview) => (
            <Interview
              firstName={interview.titulo}
              lastName={interview.apellido}
              date={interview.date}
              desc={interview.descripcionEntrevista}
            />
            
          ))}
        </div>
      </div>
    </>
  );
};

export default Interviews;
