import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const FighterDetail = () => {
  const { id } = useParams();
  console.log(id);

  const accessToken = process.env.REACT_APP_DELIVERY_TOKEN;
  const spaceId = process.env.REACT_APP_SPACE_ID;

  const query = `{
    
    peleadoresCollection(where : {id: ${id}}){
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
        console.log(data.peleadoresCollection.items);
      });
  }, [query]);

  if (!page) {
    return "Loading...";
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
        <h2 className="fullNameAndAlias">Datos del Peleador</h2>
        <div className="data">
            <p className="FighterData">Nacionalidad : {page[0].nacionalidad}</p>
            <p className="FighterData">Categoria: {page[0].categoria}</p>
            <p className="FighterData">Record: {page[0].record}</p>
            <p className="FighterData">Empresa: {page[0].empresa}</p>
        </div>
        <h2 className="fullNameAndAlias">Redes Sociales</h2>
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
