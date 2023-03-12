import axios from 'axios';

const moviesApi = axios.create({
  baseURL: 'https://moviesdatabase.p.rapidapi.com'
});

moviesApi.defaults.headers.common['X-RapidAPI-Key'] = import.meta.env.VITE_API_KEY;

export default moviesApi;