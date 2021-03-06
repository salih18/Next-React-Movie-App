import { useState, useEffect } from "react";

const INITIAL_FORM = {
  name: "",
  releaseYear: "",
  description: "",
  rating: "",
  genre: [],
  image: ""
};

const MovieCreateForm = ({
  handleCreateMovie,
  handleUpdateMovie,
  handleButtonClicked,
  initialData
}) => {
  // if there is editing action there is Initial data, otherwise empty initial form
  const formData = initialData ? initialData : INITIAL_FORM;

  const [form, setForm] = useState(formData);
  const [disabled, setDisabled] = useState(true);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmitForCreate = async () => {
    await handleCreateMovie(JSON.parse(JSON.stringify(form)));
    handleButtonClicked(true);
  };
  const handleSubmitForUpdate = async (e) => {  
    e.preventDefault()
    await handleUpdateMovie(JSON.parse(JSON.stringify(form)));  
  };
  const handleGenreChange = e => {
    const { selectedOptions } = e.target;
    setForm({
      ...form,
      genre: Array.from(selectedOptions, option => option.value)
    });
  };

  useEffect(() => {
    const isCompleted = Object.values(form).every(el => Boolean(el));
    const isGenreSelected = form.genre.length > 0 ? true : false;
    isCompleted && isGenreSelected ? setDisabled(false) : setDisabled(true);
  }, [form]);

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          value={form.name}
          type="text"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Lord of the Rings"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          name="description"
          value={form.description}
          type="text"
          className="form-control"
          id="description"
          placeholder="Somewhere in Middle-earth..."
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input
          name="rating"
          value={form.rating}
          type="number"
          max="5"
          min="0"
          className="form-control"
          id="rating"
          placeholder="3"
          onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted">
          Max: 5, Min: 0{" "}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="description">Release Year</label>
        <input
          name="releaseYear"
          value={form.releaseYear}
          type="number"
          max="2020"
          min="1900"
          className="form-control"
          id="releaseYear"
          placeholder="2020"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          name="image"
          value={form.image}
          type="text"
          className="form-control"
          id="image"
          placeholder="http://....."
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          multiple={true}
          className="form-control"
          id="genre"
          onChange={handleGenreChange}
          value={form.genre}
        >
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
          <option>crime</option>
          <option>fantasy</option>
        </select>
      </div>
      {initialData ? (
        <button
          onClick={handleSubmitForUpdate}
          type="button"
          className="btn btn-warning"
          disabled={disabled}
        >
          Update
        </button>
      ) : (
        <button
          onClick={handleSubmitForCreate}
          type="button"
          className="btn btn-primary"
          disabled={disabled}
        >
          Create
        </button>
      )}
    </form>
  );
};

export default MovieCreateForm;
