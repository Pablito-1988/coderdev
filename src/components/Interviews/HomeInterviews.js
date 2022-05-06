import React from "react";
import Interview from "./Interview";
import { useState, useEffect } from "react";
import i18next from "i18next";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomeInterviews = () => {
  const { t } = useTranslation(["figthers"]);
  const accessToken = process.env.REACT_APP_DELIVERY_TOKEN;
  const spaceId = process.env.REACT_APP_SPACE_ID;
  const query = `{
    entrevistaCollection{
      items{
        nombre
        apellido
        descripcionEntrevista
        descripcionPt
        linkVideo
        slug
        home
        date
        imagenEntrevista {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
          
        }
      }
    }
  }`;
  ///* tituloEntrevista */
  const [page, setPage] = useState(null);
  const [lang, setLanguage] = useState(i18next.language);
  const [newLang, setNewLanguage] = useState(lang);
  console.log(page)
  console.log(newLang)
  console.log(setLanguage)
  const description = (interview) => {
    console.log("Soy el new language " + lang);
    if (setNewLanguage === "es") {
      return interview.descripcionEntrevista;
    } else {
      return interview.descripcionPt;
    }
  };

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
  }, [query , accessToken, spaceId]);

  if (!page) {
    return "Loading...";
  }

  return (
    <>
      <div className="interviewsContainer">
        <Link to={`/${t("entrevistas")}`}><h3 className="interviewsTitle">ENTREVISTAS</h3></Link>
        <div className="intereviewsWrapper">
          {page.filter((interview) => ( interview.home === true )).map((interview) => (
            <Interview
            firstName={interview.nombre}
            imagen ={interview.imagenEntrevista}
            lastName={interview.apellido}
            date={interview.date}
            link = {interview.linkVideo}
            desc={description(interview)}
            key={interview.nombre}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeInterviews;
