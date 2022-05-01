import React from "react";
import Interview from "./Interview";
import { useState, useEffect } from "react";
import { language } from "react-i18next";
import i18next, { use } from "i18next";

const Interviews = () => {
  const accessToken = "_8rkJ8PJK5FFmNgZI7aL5tShQCi9hETu4NOK7vkwtAw";
  const spaceId = "0ydrshsl7jeq";
  const query = `
  {
    entrevistaCollection{
      items{
        tituloEntrevista
        nombre
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
  const [lang, setLanguage] = useState(i18next.language);
  
  useEffect(() => {
    
    setLanguage(i18next.language);
    console.log(setLanguage);
  }, [lang]);

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
          console.log("No errors");
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
              firstName={interview.nombre}
              lastName={interview.apellido}
              date={interview.date}
              desc={
                i18next.language === "es"
                  ? interview.descripcionEntrevista
                  : interview.descripcionPt
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Interviews;
