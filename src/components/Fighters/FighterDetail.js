import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import { useTranslation } from "react-i18next";

const FighterDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation(["figthers"]);
  console.log(id)

  const accessToken =  "_8rkJ8PJK5FFmNgZI7aL5tShQCi9hETu4NOK7vkwtAw"
  const spaceId = "0ydrshsl7jeq"

  const query = `{
    
    peleadoresCollection(where : { apellidoPeleador_contains : "${id}"}){
      items{
        id
        nombreCompleto
        nombreDelPeleador
        apellidoPeleador
        twitter
        instagram
        alias
        nacionalidad
        record
        empresa
        categoria
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
  console.log(page);

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
    <div className="fighterDetailContainer">
      <div className="fighterDetail">
          <div className="fullNameAndAlias">
              <h1>{page[0].nombreCompleto}</h1>
                <h3>"{page[0].alias}"</h3>
          </div>
          
        <div>
        <img
              src={page[0].imagenPeleador.url}
              alt={page[0].imagenPeleador.title}
              className="fighterImg"
            />
        </div>
        <h2 className="fullNameAndAlias">{t("titulo")}</h2>
        <div className="data">
            <p className="FighterData">{t("nacionalidad")}: {page[0].nacionalidad}</p>
            <p className="FighterData">{t("categoria")}: {page[0].categoria}</p>
            <p className="FighterData">{t("record")}: {page[0].record}</p>
            <p className="FighterData">{t("empresa")}: {page[0].empresa}</p>
        </div>
        <h2 className="fullNameAndAlias">{t("redesSociales")}</h2>
        <div className="fighterSocialMediaDetail">
              <a href={page[0].twitter} target="_blank" rel="noreferrer">
                <i id="socialMediaTwitter" className="fab fa-twitter"></i>
              </a>
              <a href={page[0].instagram} target="_blank" rel="noreferrer">
                <i id="socialMedia" className="fab fa-instagram"></i>
              </a>
            </div>
      </div>
    </div>
  );
};

export default FighterDetail;
