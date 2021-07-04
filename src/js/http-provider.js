import {Movie} from '../classes';

const mainUrl = 'https://imdb8.p.rapidapi.com';
const rapidapiKey = '9c44151135mshaa63d7abf854a97p155e45jsn829d3a291c8e';
const rapidapiHost = 'imdb8.p.rapidapi.com';

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


export {
  getAutoComplete
}