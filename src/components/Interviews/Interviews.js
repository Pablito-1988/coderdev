import React from 'react';
import Interview from "./Interview";
import { useState, useEffect } from "react";
import { useLang } from "../../context/LangContext";
import imagen from "./interview.png"
import Loading from "../Loading/Loading";

const Interviews = () => {
    
  const accessToken =  "_8rkJ8PJK5FFmNgZI7aL5tShQCi9hETu4NOK7vkwtAw"
  const spaceId = "0ydrshsl7jeq"
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
    const { description } = useLang();
  
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