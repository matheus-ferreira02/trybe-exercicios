// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const append = (joke) => {
  const body = document.querySelector('body');
  const p = document.createElement('p');
  p.innerText = joke;
  body.appendChild(p);
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => append(data.joke));
};

window.onload = () => fetchJoke();