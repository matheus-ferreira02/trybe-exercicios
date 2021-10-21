/* Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ; */

h1 = document.createElement('h1');
h1.innerText = 'Exercicio 5.2';
document.body.appendChild(h1);


/* Adicione a tag main com a classe main-content como filho da tag body  */

main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);


/* Adicione a tag section com a classe center-content como filho da tag main criada no passo 2; */

sectionMain = document.createElement('section');
sectionMain.className = 'center-content';
main.appendChild(sectionMain);


/* Adicione a tag p como filho do section criado no passo 3 e coloque algum texto; */

text = document.createElement('p');
text.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cupiditate, facere voluptate molestiae ea, ad officia quis consectetur, adipisci sunt iusto aperiam facilis recusandae cum odio ducimus quasi voluptas! Optio?';
sectionMain.appendChild(text);


/* Adicione a tag section com a classe left-content como filho da tag main criada no passo 2; */

sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);


/* Adicione a tag section com a classe right-content como filho da tag main criada no passo 2; */

sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);


/* Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5; */

image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
sectionLeft.appendChild(image);


/* Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6; */

ul = document.createElement('ul');
sectionRight.appendChild(ul);
numExtenso = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let num of numExtenso) {
    itemList = document.createElement('li');
    itemList.innerText = num;
    ul.appendChild(itemList);
}


/* Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2. */

for (let i = 1; i <= 3; i += 1) {
    h3 = document.createElement('h3');
    main.appendChild(h3);
}


/* Adicione a classe title na tag h1 criada; */

h1.className = 'title';


/* Adicione a classe description nas 3 tags h3 criadas; */

subtitulos = document.querySelectorAll('h3');
for (let i = 0; i < 3; i += 1) {
    subtitulos[i].className = 'description'
}


/* Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ; */

sectionRemove = document.querySelector('.left-content');
console.log(sectionRemove)
console.log(main)
main.removeChild(sectionRemove);


/* Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ; */

sectionRight.style = 'margin-right: auto';


/* Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde; */

sectionMain.parentNode.style.backgroundColor = 'purple'


/* Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8. */

itensList = document.querySelectorAll('li');
console.log(itensList);
for (i = itensList.length - 1; i > itensList.length - 3; i -= 1) {
    ul.removeChild(itensList[i]);
}

/* Mostra a estrutura */
console.log(document.body);
