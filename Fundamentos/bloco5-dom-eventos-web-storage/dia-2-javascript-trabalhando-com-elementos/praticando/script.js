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

elementosFilhos = document.getElementById('pai').lastElementChild.previousElementSibling;
console.log(elementosFilhos);

irmaoOndeVoceEsta = document.createElement('section');
irmaoOndeVoceEsta.id = 'elemento-irmao';
paiElementos = document.querySelector('#pai');

paiElementos.appendChild(irmaoOndeVoceEsta);
console.log(paiElementos);

filhoOndeVoceEsta = document.createElement('p');
filhoOndeVoceEsta.innerText = 'Outro texto aqui';

paiOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

paiOndeVoceEsta.appendChild(filhoOndeVoceEsta);
console.log(paiOndeVoceEsta);

filhoDoFilhoDoFilho = document.createElement('p');
filhoDoFilhoDoFilho.innerText = ('filhoDoFilhoDoFilho filhoDoFilhoDoFilhofilhoDoFilhoDoFilho filhoDoFilhoDoFilho filhoDoFilhoDoFilho');
filhoDoFilhoDoFilho.id = 'filhoDoFilhoDoFilho'

filhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
filhoDoFilho.appendChild(filhoDoFilhoDoFilho);

chegandoAoTerceiroFilho = document.getElementById('filhoDoFilhoDoFilho').parentNode.parentNode.nextElementSibling;
console.log(chegandoAoTerceiroFilho);

elementosARemover = ['primeiroFilho', 'segundoEUltimoFilhoDoFilho', 'terceiroFilho', 'quartoEUltimoFilho'];
for (i of elementosARemover) {
    filhoARemover = document.getElementById(i);
    filhoARemover.parentNode.removeChild(filhoARemover);
}


