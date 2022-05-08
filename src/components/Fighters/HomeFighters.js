import React from "react";
import "./Fighters.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const HomeFighters = () => {
  const { t } = useTranslation(["figthers"]);

  const accessToken =  "_8rkJ8PJK5FFmNgZI7aL5tShQCi9hETu4NOK7vkwtAw"
  const spaceId = "0ydrshsl7jeq"

  const query = `{
    
    peleadoresCollection
    {
      items{
        id
        nombreCompleto
        nombreDelPeleador
        apellidoPeleador
        twitter
        instagram
        home
        imagenPeleador {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        slug
      }}
    
    }`;
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
          console.log("No errors");
        }
        setPage(data.peleadoresCollection.items);
        
      });
  }, [query, accessToken, spaceId]);
  

  if (!page) {
    return (
      <div className='loading'>
          <Loading/>
      </div>)
  }
  
  return (
    <div className="fightersSeccion">
      <Link to={`/${t("peleadores")}`}><h1 className="fighterstitle">{t("peleadores")}</h1></Link>
      <div className="figthersWrapper">
        {page.filter((fighter) => (  fighter.home=== true)).map((fighter) => (
          <div key={fighter.id} className="fighter">
              <Link to={`/peleador/${fighter.apellidoPeleador}`}>
            <img
              src={fighter.imagenPeleador.url}
              alt={fighter.imagenPeleador.title}
              className="fighterImg"
            />
            </Link>
            <div className="fighterFullName">
              <p className="fighterName">{fighter.nombreDelPeleador}</p>
              <p className="fighterLastname">{fighter.apellidoPeleador}</p>
            </div>
            <div className="fighterSocialMedia">
              <a href={fighter.twitter} target="_blank" rel="noreferrer">
                <i id="socialMediaTwitter" className="fab fa-twitter"></i>
              </a>
              <a href={fighter.instagram} target="_blank" rel="noreferrer">
                <i id="socialMedia" className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFighters;
