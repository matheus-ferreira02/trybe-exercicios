const longestWord = (frase) => {
  const fraseSplit = frase.split(" ");
  let maior = '';
  for (let i in fraseSplit) {
      if (fraseSplit[i].length > maior.length) {
      maior = fraseSplit[i];
    }
  }
  return maior;
};

console.log(longestWord("hoje eu acordei"));
