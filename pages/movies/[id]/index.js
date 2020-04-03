import Link from 'next/link'
import { getMovieById, removeById } from "./../../../actions";
import {useRouter} from 'next/router'

const Movie = ({
  movie: { id, name, releaseYear, description, rating, genre, image }
}) => {

  const router = useRouter()

  const handleRemove = async() => {
    await removeById(id)
    router.push('/')
  }

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
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary ">More...</button>
          <button onClick={handleRemove} className="btn btn-danger ">Remove</button>
          <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
          <button className="btn btn-warning ">Edit</button>
          </Link>
        </div>

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
