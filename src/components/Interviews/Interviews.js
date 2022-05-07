import React from 'react';
import Interview from "./Interview";
import { useState, useEffect } from "react";
import i18next from "i18next";
import imagen from "./interview.png"
import Loading from "../Loading/Loading";

const Interviews = () => {
    
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
    console.log(page)
    const [lang, setLanguage] = useState(i18next.language);
    const [newLang, setNewLanguage] = useState(lang);

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
      return (
        <div className='loading'>
            <Loading/>
        </div>)
    }
  
    return (
      < >
        <div className='inteviewBanner'>
            <img className='inteviewBanner' src={imagen} alt="Jenny Panichi" />
        </div>
        <h1 className='interviewTitle'>Entrevistas</h1>
        <div className="interviewContainer">
          <div className="intereviewsWrapper">
            {page.map((interview) => (
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
}
export default Interviews