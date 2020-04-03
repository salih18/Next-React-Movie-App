import { useRouter } from "next/router";
import MovieCreateForm from "../../../components/MovieCreateForm";
import { getMovieById, updateMovie } from "../../../actions";

const EditMovie = ({ movie }) => {
  const router = useRouter();
  const handleUpdateMovie = async movieData => {
    await updateMovie(movieData);
    router.push("/movies/[id]", `/movies/${movieData.id}`);
  };
  return (
    <div className="container">
      <h1>Edit the Movie</h1>
      <MovieCreateForm
        initialData={movie}
        handleUpdateMovie={handleUpdateMovie}
      />
    </div>
  );
};

EditMovie.getInitialProps = async ctx => {
  const { id } = ctx.query;
  const movie = await getMovieById(id);
  return { movie };
};

export default EditMovie;
