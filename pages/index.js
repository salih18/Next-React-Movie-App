import { useState } from "react";
import SideMenu from "../components/SideMenu";
import Carousel from "../components/Carousel";
import MovieList from "../components/MovieList";

import { getMovies, getCategories } from "./../actions";

const Home = props => {
  const [activeCategory, setActiveCategory] = useState("all");

  const changeCategory = category => {
    setActiveCategory(category);
  };

  const filterByCategory = movies => {
    if (activeCategory === "all") return movies;
    return movies.filter((movie, index, arr) => {
      return movie.genre.join(", ").includes(activeCategory);
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-3">
          <SideMenu
            activeCategory={activeCategory}
            categories={props.categories}
            changeCategory={changeCategory}
          />
        </div>
        <div className="col-lg-9">
          <Carousel images={props.images} />
          {activeCategory ? (
            <h3 className="lead my-4 text-capitalize">{activeCategory} Movies</h3>
          ) : (
            <h3 className="lead my-4">Movies</h3>
          )}
          <div className="row">
            <MovieList movies={filterByCategory(props.movies)} />
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
