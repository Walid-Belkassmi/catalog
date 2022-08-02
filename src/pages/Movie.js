import React from "react";
import catalog from "../catalog.json";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const params = useParams();
  const [movie] = useState(catalog[params.id - 1]);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center my-5 text-center text-light">
      <img className="mb-3" src={movie.image} alt={movie.title} />
      <h2 className="mb-5">{movie.title}</h2>
      <h2>Director : {movie.director}</h2>
      <ul>
        <span className="fs-3">Stars : </span>
        {movie.stars.map((star) => {
          return <li>{star}</li>;
        })}
      </ul>
      <p className="w-50">{movie.description}</p>
    </div>
  );
};

export default Movie;
