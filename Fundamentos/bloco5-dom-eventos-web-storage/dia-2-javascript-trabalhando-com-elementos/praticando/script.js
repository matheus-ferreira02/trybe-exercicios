// arquivo script.js

console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

elementoOndeVoceEsta.parentNode.style.backgroundColor = 'blue';

console.log(document.getElementById('primeiroFilhoDoFilho').innerText = 'texto aqui');

console.log(document.getElementById('pai').firstElementChild);

console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

elementosFilhos = document.getElementById('pai').children;
console.log(elementosFilhos[elementosFilhos.length -2]);