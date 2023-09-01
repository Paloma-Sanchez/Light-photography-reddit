import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";


export const SearchBar = ({category}) =>{
    const searchInputRef = useRef();
    const navigate = useNavigate();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const query = {
      title: searchInputRef.current.value
    }
    const queryString = new URLSearchParams(query).toString();

    navigate.push({ pathname: `/${category}`, search: queryString})
  };

    return (
        <form onSubmit={onSearchHandler} className="search-bar">
            <input type="text" className="search" placeholder="Search for a post"  ref={searchInputRef}/>
            <button type="submit" className="search-button">
                🔎
            </button>
        </form>
    )
}

