import axios from "axios";
import baseUrl from "./../utils/baseUrl";

const CATEGORY_DATA = [
  { id: "1", name: "drama" },
  { id: "2", name: "action" },
  { id: "3", name: "adventure" },
  { id: "4", name: "historical" },
  { id: "5", name: "crime" },
  { id: "6", name: "fantasy" }
];

export const getCategories = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(CATEGORY_DATA);
    }, 300);
  });
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
