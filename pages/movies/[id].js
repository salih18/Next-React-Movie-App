import { useRouter } from "next/router";
import { getMovieById } from "./../../actions";

const Movie = ({
  movie: { id, name, releaseYear, description, rating, genre, image }
}) => {
  const genresArr = () => {
    return genre.map((genre, key) => (
      <p className="badge badge-secondary p-2 m-1" key={key}>
        {genre}
      </p>
    ));
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{name} </h1>
        <h5>
          <span className="badge badge-secondary">{releaseYear}</span>{" "}
        </h5>
        <h5>
          Rating: <span className="badge badge-primary">{rating}</span>{" "}
        </h5>
        <img className="img-fluid rounded m-5 mx-auto" src={image} alt="" />
        <p className="lead">{description}</p>
        <hr className="my-4" />
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
        <div className="mt-5">{genresArr()}</div>
      </div>
    </div>
  );
};

Movie.getInitialProps = async ctx => {
  const { id } = ctx.query;
  const movie = await getMovieById(id);
  return { movie };
};

export default Movie;
