import {init as autoComplete}  from "./js/autoComplete-page";
import {init as mostPopularMovies}  from "./js/mostPopularMovies-page";
import {init as topCrew}  from "./js/topCrew-page";
import './styles.css';

// autoComplete();
// mostPopularMovies();
// topCrew();

document.querySelector('#bar-toggle').addEventListener('click', async () => {
  document.querySelector('.header').style.visibility = "hidden";
  document.querySelector('.header-search').style.visibility = "visible";
});

document.querySelector('#bar-back').addEventListener('click', async () => {
  document.querySelector('.header').style.visibility = "visible";
  document.querySelector('.header-search').style.visibility = "hidden";
});