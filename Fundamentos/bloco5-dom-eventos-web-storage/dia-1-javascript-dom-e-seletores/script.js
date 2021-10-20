/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName() */


/* Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício) */
function textArea(text) {
    document.querySelector('.center-content p').innerText = text;
}
let text = 'Daqui a 2 anos, eu me vejo trabalhando na área de tecnologia, morando sozinho numa casa própria';
textArea(text);


/* Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie uma função que mude a cor do quadrado vermelho para branco.*/
function background(classTag, color) {
    document.getElementsByClassName(classTag)[0].style.backgroundColor = color;
}
background('main-content', 'rgb(76,164,109)');
background('center-content', 'white');


/*Crie uma função que corrija o texto da tag <h1>. */
function speelChecker(classTag, text) {
    document.getElementsByClassName(classTag)[0].innerText = text
}
speelChecker('title', 'Exercício 5.1 - JavaScript');

/* Crie uma função que exiba o conteúdo de todas as tags <p> no console.*/
function consoleLog(tag) {
    textTag = document.getElementsByTagName(tag);
    for (let i in textTag) {
        console.log(textTag[i].innerText);
    }
    
}
consoleLog('p');

/* Crie uma função que modifique todo o texto da tag <p> para maiúsculo. */
function upperCase(tag) {
    textTag = document.getElementsByTagName(tag);
    for (let i in textTag) {
        textTag[i].innerText = textTag[i].innerText.toUpperCase();
    }
}
upperCase('p');
