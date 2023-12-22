//webshp

import * as _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());



//import config file

import config from "./config";

const api_key = config.api_key;

console.log(api_key);


const BASE_URL ="https://api.themoviedb.org/3/";


async function FetchApi(){

    const respone = await fetch("https://api.themoviedb.org/3/discover/movie",{
        method: "GET",
        headers:{
            accept: 'application/json',
            Authorization: api_key,
        }
    });
    console.log(respone);
    const data = await respone.json();
    console.log(data);

};

FetchApi();