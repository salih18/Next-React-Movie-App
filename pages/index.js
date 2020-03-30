import SideMenu from "../components/SideMenu";
import Carousel from "../components/Carousel";
import MovieList from "../components/MovieList";

import { getMovies, getCategories } from "./../actions";

const Home = props => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-3">
          <SideMenu categories={props.categories} />
        </div>
        <div className="col-lg-9">
          <Carousel images={props.images} />
          <div className="row">
            <MovieList movies={props.movies || []} />
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map(movie => {
    return {
      id: `image-${movie.id}`,
      url: movie.image,
      name: movie.name
    };
  });
  return { movies, images, categories };
};

export default Home;
