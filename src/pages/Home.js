import React from "react";
import { Link } from "react-router-dom";
import catalog from "../catalog.json";

const Home = () => {
  return (
    <div className="home-page container d-flex flex-column align-items-center justify-content-center my-5 text-center">
      <header className="mb-5">
        <h1 className="home-h1 text-warning">Movies</h1>
      </header>
      <main className="m-5 home">
        <ul>
          {catalog.map((movie) => {
            console.log(movie);
            return (
              <li className="cursor" key={movie.title}>
                <Link
                  className="decoration text-light"
                  to={`/movie/${movie.id}`}
                >
                  <img className="mt-4 mb-3" src={movie.image} alt="" />
                  <p className="mb-5">{movie.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default Home;
