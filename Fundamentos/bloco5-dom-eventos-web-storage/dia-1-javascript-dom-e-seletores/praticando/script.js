const paragraph = document.getElementById("paragraph");
paragraph.style.color = "green";



const title = document.getElementById("page-title").innerText = 'Vingadores - Ultimato';



const paragraph2 = document.getElementById("second-paragraph");
paragraph2.style.fontFamily = "Arial";



const subtitle = document.getElementById("subtitle");
subtitle.style.fontSize = "30px";



const classeParagrafo = document.getElementsByClassName("paragrafo");

for (let i in classeParagrafo) {
    console.log(classeParagrafo[i])
    classeParagrafo[i].innerText = "Novo texto";
}



const subtitulos = document.getElementsByTagName("h4");

subtitulos[0].innerText = "Subtitulo 2 alterado";
