import React from "react";
import "./search.css";
import { useGlobalContext } from "../context";

const Search = () => {

    const {query, searchPost} = useGlobalContext();

  return (
    <>
      <form onSubmit={(e) => {e.preventDefault()}}>
        <div className="input-box">
          <input type="text" className="input-field" placeholder="Search here"
          value={query} onChange={(event) => {
            console.log(event.target.value);
            searchPost(event.target.value)}
            }/>
        </div>
      </form>
    </>
  );
};

export default Search;
