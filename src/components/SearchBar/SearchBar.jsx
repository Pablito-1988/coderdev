import React from "react";
import "./SearchBar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ placeholder }) => {
  const accessToken = process.env.REACT_APP_DELIVERY_TOKEN;
  const spaceId = process.env.REACT_APP_SPACE_ID;
  const query = `{
    entrevistaCollection{
      items{
        nombre
        slug
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
  const [wordEntered,setWordEntered] = useState("");
  console.log(interview)

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
    if (searchedWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInput">
        <input type="text" placeholder={placeholder} value={wordEntered}  onChange={handleFilter} />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <i id="searchIcon" className="fa fa-search" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-times" aria-hidden="true" id="clearBtn" onClick={clearInput}></i>
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <Link key={value.id} className="dataItem" to={`/peleador/${value.id}`}>
                <p>{value.nombreCompleto}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
