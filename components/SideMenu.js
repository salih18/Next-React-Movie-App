import React, { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";
import MovieCreateForm from "./MovieCreateForm";

const SideMenu = ({ categories }) => {
  const [disabled, setDisabled] = useState(true);
  const disableButton = bool => setDisabled(bool);

  return (
    <>
      <h1 className="my-4">Shop Name</h1>
      <Modal buttonState={disabled}>
        <MovieCreateForm disableButton={disableButton} />
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
