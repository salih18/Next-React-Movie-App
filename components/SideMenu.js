import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Modal from "./Modal";
import MovieCreateForm from "./MovieCreateForm";
import { createMovie } from "./../actions";

const SideMenu = ({ categories }) => {
  const [createButtonClicked, setCreateButtonClicked] = useState(false);
  const router = useRouter();

  const handleCreateMovie = async movie => {
    await createMovie(movie);
    router.push("/");
  };

  const handleButtonClicked = bool => {
    setCreateButtonClicked(bool);
  };

  return (
    <>
      <h1 className="my-4">Movie App</h1>
      <Modal createButtonClicked={createButtonClicked}>
        <MovieCreateForm
          handleCreateMovie={handleCreateMovie}
          handleButtonClicked={handleButtonClicked}
        />
      </Modal>
      <div className="list-group">
        {categories.map(category => (
          <Link key={category.id} href="#">
            <a className="list-group-item text-capitalize">{category.name}</a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SideMenu;
