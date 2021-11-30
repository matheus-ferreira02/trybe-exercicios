const myObject = {
  method: 'GET',
  headers: { 'Accept-Encoding': 'application/json' }
};

const fetchCripto = () => {
  fetch('https://api.coincap.io/v2/assets')
  .then(response => response.json())
  .then(db => {
    const tenCriptos = db.data.slice(0, 10);
    append(tenCriptos)
  })
}

const append = (moedas) => {
  console.log(moedas)
  const body = document.querySelector('body');
  const ul = document.createElement('ul');

  moedas.forEach((moeda) => {
    const { name, symbol, priceUsd} = moeda;
    priceUsdConverter = parseFloat(priceUsd).toFixed(2);
    const li = document.createElement('li');
    li.innerText = `${name} ${symbol} ${priceUsdConverter}`;
    ul.appendChild(li);
  })

  body.appendChild(ul)


}

window.onload = () => fetchCripto();
