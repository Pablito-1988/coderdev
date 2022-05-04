import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const FighterDetail = () => {
    const { id } = useParams()
    console.log(id)
    
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
  console.log(page)

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
    <div>FighterDetail</div>
  )
}

export default FighterDetail