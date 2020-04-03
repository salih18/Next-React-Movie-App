import React from "react";
import Link from "next/link";

const MovieList = ({ movies }) => {
  const shortenDesc = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
    }
    return text;
  };

  return movies.length > 0 ? (
    movies.map(movie => (
      <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
        <div className="card h-100">
          <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
            <a>
              <img className="card-img-top" src={movie.image} alt="" />
            </a>
          </Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                <a>{movie.name}</a>
              </Link>
            </h4>
            <h6 style={{ textTransform: "capitalize" }}>
              {movie.genre.toString()}
            </h6>
            <p className="card-text">{shortenDesc(movie.description, 200)}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{movie.rating}</small>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="lead alert alert-warning">There is no movies here...</p>
  );
};

export default MovieList;
