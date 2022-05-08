import React from "react";
import "./SearchBar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ placeholder }) => {
  const accessToken = "_8rkJ8PJK5FFmNgZI7aL5tShQCi9hETu4NOK7vkwtAw";
  const spaceId = "0ydrshsl7jeq";
  const query = `{
    entrevistaCollection{
      items{
        nombre
        tituloEntrevista
      }
    }
    peleadoresCollection{
      items{
        id
        nombreCompleto
        nombreDelPeleador
        apellidoPeleador
        slug
      }
    }
  }`;
  const [interview, setInterview] = useState(null);
  const [fighter, setFighter] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

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
        setInterview(data.entrevistaCollection.items);
        setFighter(data.peleadoresCollection.items);
      });
  }, [query, accessToken, spaceId]);
  if (!fighter) {
    return "Loading...";
  }

  const handleFilter = (e) => {
    const searchedWord = e.target.value;
    setWordEntered(searchedWord);
    const newFilter = fighter.filter((item) => {
      return item.nombreCompleto
        .toLowerCase()
        .includes(searchedWord.toLowerCase());
    });
    const newFilter2 = interview.filter((item) => {
      return item.nombre.toLowerCase().includes(searchedWord.toLowerCase());
    });
    console.log(newFilter2);
    if (searchedWord === "") {
      setFilteredData([]);
    } else {
      const newArray = newFilter.concat(newFilter2)
      setFilteredData(newArray);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInput">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <i
              id="searchIcon"
              className="fa fa-search widthSearch"
              aria-hidden="true"
            ></i>
          ) : (
            <i
              className="fa fa-times widthSearch"
              aria-hidden="true"
              id="clearBtn"
              onClick={clearInput}
            ></i>
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
       
        <div className="dataResult">
          {filteredData.map((value, key) => {
             console.log(filteredData);
            return (
              <Link
                key={value.id ? value.id : value.nombre}
                className="dataItem"
                onClick={clearInput}
                to={ value.apellidoPeleador ? `/peleador/${value.apellidoPeleador}` : `/entrevistas`}
              >
                <p>{value.nombreCompleto ? value.nombreCompleto : value.nombre}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
