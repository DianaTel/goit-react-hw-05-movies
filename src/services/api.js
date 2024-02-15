import axios from "axios";
import { Notify } from "notiflix";

const KEY = '32e4578d60990bc32696639e780641fd';
const URL = 'https://api.themoviedb.org/3';

export const paramsForNotify = {
  position: 'center-center',
  timeout: 3000,
  width: '400px',
  fontSize: '24px',
};

// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.

export async function fetchMovies(endPoint) {
    const url = `${URL}${endPoint}?api_key=${KEY}`
    const response = await axios.get(url);
    return response.data;
};

export async function fetchSearchMovies(endPoint, query) {
    const url = `${URL}${endPoint}?api_key=${KEY}&query=${query}`
    const response = await axios.get(url);
    return response.data;
};

export async function fetchMovieDetails(endPoint, movieId) {
    const url = `${URL}${endPoint}/${movieId}?api_key=${KEY}`
    const response = await axios.get(url);
    return response.data;
};

export async function fetchMovieCast(endPoint, movieId) {
    const url = `${URL}${endPoint}/${movieId}/credits?api_key=${KEY}`
    const response = await axios.get(url);
    return response.data;
};

export async function fetchMovieReviews(endPoint, movieId) {
    const url = `${URL}${endPoint}/${movieId}/reviews?api_key=${KEY}`
    const response = await axios.get(url);
    return response.data;
};

export function onFetchError() {
    Notify.failure('Oops! Something went wrong! Try reloading the page or make another choice!', paramsForNotify);
};

