import {Movie} from '../classes';

const mainUrl = 'https://imdb8.p.rapidapi.com';
const rapidapiKey = '9c44151135mshaa63d7abf854a97p155e45jsn829d3a291c8e';
const rapidapiHost = 'imdb8.p.rapidapi.com';

const _getMovieByID = async (id) =>{

  try {
    const resp = await fetch(`${mainUrl}/title/get-videos?tconst=${id}&limit=1`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": rapidapiKey,
        "x-rapidapi-host": rapidapiHost
      }
    });
    if (!resp.ok) throw 'The request could not be fulfilled';
    let {resource: data} = await resp.json();
    return new Movie (data.id, data.title, data.titleType, data.size, data.image.url, data.year);

  } catch (err) {
    throw err;

  }
}
const _getMoviesByIDList = async( list) =>{
  let moviesListNew = [];
  for (const id of list) {
    moviesListNew.push(_getMovieByID(id));
  }

  return await Promise.all(moviesListNew);
}
const getAutoComplete = async (search) => {

  try{
    const resp = await fetch(`${mainUrl}/auto-complete?q=${search}`,{
      "method": "GET",
      "headers": {
        "x-rapidapi-key": rapidapiKey,
        "x-rapidapi-host": rapidapiHost
      }
    });
    if (!resp.ok) throw 'The request could not be fulfilled';
    const {d: data} = await resp.json();
    let movieList =[];
    data.forEach(resp => {
      let movieNew = new Movie(resp.id, resp.l, resp.q, resp.rank, resp.i.imageUrl, resp.y);
      movieList.push(movieNew);
    });
    return movieList;

  }catch(err){
      throw err;

  }
}
const getMostPopularMovies = async (firstId) => {

  try {
    const resp = await fetch(`${mainUrl}/title/get-most-popular-movies`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": rapidapiKey,
        "x-rapidapi-host": rapidapiHost
      }
    });
    if (!resp.ok) throw 'The request could not be fulfilled';
    let data = await resp.json();
    data = data.slice(firstId, firstId+5);
    // delete /title/ and /
    data = data.map( function( id){
      id = id.replace('/title/', '');
      id = id.replace('/', '');
      return id;
    });

    return await _getMoviesByIDList(data);

  } catch (err) {
    throw err;

  }
}
const getTopCrew = async (search) => {

  try {
    const resp = await fetch(`${mainUrl}/title/get-top-crew?tconst=tt0944947`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": rapidapiKey,
        "x-rapidapi-host": rapidapiHost
      }
    });
    if (!resp.ok) throw 'The request could not be fulfilled';
    const { d: data } = await resp.json();
    let movieList = [];
    data.forEach(resp => {
      let movieNew = new Movie(resp.id, resp.l, resp.q, resp.rank, resp.i.imageUrl, resp.y);
      movieList.push(movieNew);
    });
    return movieList;

  } catch (err) {
    throw err;

  }
}

export {
  getAutoComplete,
  getMostPopularMovies,
  getTopCrew
}