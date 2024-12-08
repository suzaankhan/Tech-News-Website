import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import "./stories.css";

const Stories = () => {
  const { hits, nbPages, isLoading, removePost, query } = useGlobalContext();

  if(isLoading){
      return(
          <>
          <div className="loading-box">
            <div className="loader"></div>
              {/* <h1>Loading......</h1> */}
          </div>
          </>
      )
  }
  if(hits.length === 0){
    return(
      <>
          <div className="loading-box">
              <h1>No result found for "{query}"</h1>
          </div>
          </>
    )
  }
  return (
    <>
      <div className="stories-div">
        {hits.map((curPost) => {
          const { url, title, author, num_comments, objectID} = curPost;
          if(url && title && author && num_comments){
            console.log("data", url, title, author, num_comments);
          return (
            <>
              <div className="card">
                <h2 id="title">{title}</h2>
                <p id="auth-com">
                  By <span id="author">{author}</span> | <span id="num-comments">{num_comments}</span>{" "}
                  comments
                </p>
                <div className="card-button">
                  <a href={url} target="_blank" id="read-more">
                    Click to Read More
                  </a>
                  <a href="#" id="remove" onClick={() => removePost(objectID)}>
                    Remove
                  </a>
                </div>
              </div>
            </>
          );
        }
        })}
      </div>
    </>
  );
};

export default Stories;
