import axios from "axios";
import baseUrl from "./../utils/baseUrl";

export const getCategories = async() => {
  const url = `${baseUrl}/api/categories`
  const res = await axios.get(url);
  return res.data;
};


export const getMovies = async () => {
  const url = `${baseUrl}/api/movies`
  const res = await axios.get(url);
  return res.data;
};

export const getMovieById = async id => {
  const url = `${baseUrl}/api/movie`
  const payload = { params: { id } };
  const res = await axios.get(url, payload)
  return res.data
};

export const removeById = async id => {
  const url = `${baseUrl}/api/movie`
  const payload = { params: { id } };
  await axios.delete(url, payload)
};

export const createMovie = async movie => {
  const url = `${baseUrl}/api/movie`
  const payload = movie
  const res = await axios.post(url, payload)
  return res.data
  //console.log({createdMovie})
};

export const updateMovie = async (movie) => {
  const url =  `${baseUrl}/api/movie`
  const payload = movie
  await axios.put(url, payload)
} 
