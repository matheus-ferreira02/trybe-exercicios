const frase = string => {
  const skillsOrdenada = skills.sort();
  const frase = `${string}! Minhas principais habilidades são: 
  ${skillsOrdenada}`;
  return frase;
}

const substitui = (string) => {
  let stringDeterminada = 'Aluno da Trybe x aqui';
  const stringFinal = stringDeterminada.replace('x', string);
  return stringFinal;
};

const skills = ['html', 'css', 'js', 'videogame']; 
console.log(frase(substitui("matheus")));
