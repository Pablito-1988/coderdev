import React from "react";
import Interview from "./Interview";
import { useState, useEffect } from "react";
import i18next from "i18next";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loading from "../Loading/Loading";
import { useLang } from "../../context/LangContext";


const HomeInterviews = () => {
  const { t } = useTranslation(["figthers"]);
  const { description } = useLang();
  const accessToken = "_8rkJ8PJK5FFmNgZI7aL5tShQCi9hETu4NOK7vkwtAw";
  const spaceId = "0ydrshsl7jeq";
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

  // const description = (interview) => {
  //   if (lang === "pt") {
  //     return interview.descripcionPt;
  //   } else {
  //     return interview.descripcionEntrevista;
  //   }
  // };

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
  }, [query, accessToken, spaceId]);

  if (!page) {
    return (
      <div className="loading">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="interviewsContainer">
        <Link to={`/${t("entrevistas")}`}>
          <h3 className="interviewsTitle">ENTREVISTAS</h3>
        </Link>
        <div className="intereviewsWrapper">
          {page
            .filter((interview) => interview.home === true)
            .map((interview) => (
              <Interview
                firstName={interview.nombre}
                imagen={interview.imagenEntrevista}
                lastName={interview.apellido}
                date={interview.date}
                link={interview.linkVideo}
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
