import { getAutoComplete } from "./http-provider";

const body = document.body;
let btnSearch, olList  ;

const createMovieListHtml = () => {
  const html = `
   <h1 class="mt-5">Movies</h1>

   <hr>
  <button class="btn btn-primary"> Search </button>
  <ol class="mt-2 list-group">
  </ol>`;
  const divMovieList = document.createElement('div');
  divMovieList.innerHTML = html;

  body.append(divMovieList);
}

const eventsSearch = () => {
  olList = document.querySelector('ol');
  btnSearch = document.querySelector('button');

  btnSearch.addEventListener('click', async () => {

    btnSearch.disabled = true;
    createMovieHtml(await getAutoComplete('game of thr') );
    btnSearch.disabled = false;

  });

}

const createMovieHtml = ( movies) => {
  movies.forEach(element => {
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${element.title} </b>: ${element.type}`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);
  });


}


export const init = () =>{
  createMovieListHtml();
  eventsSearch();
}